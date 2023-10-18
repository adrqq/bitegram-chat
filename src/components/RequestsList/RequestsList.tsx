import React, { FC, useEffect } from 'react';
import s from './RequestsList.module.scss';
import classNames from 'classnames';
import { getUserById } from '../../redux/slices/userSlice';

import dummyAvatar from '../../images/avatar.svg';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { RequestCard } from '../RequestCard';
import { IUser } from '../../models/IUser';

interface RequestsListProps { }

const RequestsList: FC<RequestsListProps> = () => {
  const dispatch = useAppDispatch();
  const selected = false;

  const { user } = useAppSelector((state) => state.authSlice);

  const [requestors, setRequestors] = React.useState<IUser[]>([]);

  useEffect(() => {
    const fetchRequestors = async () => {
      try {
        const requestorsData = await Promise.all(
          user.incomingFriendRequests.map(async (requestorId: string) => {
            const requestor = await dispatch(getUserById(requestorId));
            return requestor.payload;
          })
        );

        setRequestors(requestorsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRequestors();
  }, []);

  return (
    <div className={s.requests_list}>
      {requestors.length > 0 ? (
        requestors.map((request) => (
          <RequestCard
            user={request}
            key={request.id}
          />
        ))
      ) : (
        <p className={s.requests_list__title}>
          You have no friend requests
        </p>
      )}
    </div>
  )
}

export default RequestsList;
