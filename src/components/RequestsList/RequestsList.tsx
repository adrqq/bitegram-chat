import React, { FC } from 'react';
import styles from './RequestsList.module.scss';

interface RequestsListProps {}

const RequestsList: FC<RequestsListProps> = () => (
  <div className={styles.RequestsList}>
    RequestsList Component
  </div>
);

export default RequestsList;
