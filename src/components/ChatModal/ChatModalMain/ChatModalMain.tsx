import React from "react";
import s from "./ChatModalMain.module.scss";
import classNames from "classnames";
import { ModalMedia } from "./ModalMedia/ModalMedia";

enum SelectedItem {
  Media = 'Media',
  Links = 'Links',
  Docs = 'Docs',
}

export const ChatModalMain = () => {
  const [selectedItem, setSelectedItem] = React.useState(SelectedItem.Media);

  return (
    <div className={s.chat_modal_main}> 
      <ul className={s.chat_modal_main__list}>
        <li 
        onClick={() => setSelectedItem(SelectedItem.Media)}
        className={classNames(
          s.chat_modal_main__list_item,
          {[s.chat_modal_main__list_item__selected]: selectedItem === SelectedItem.Media}
        )}
        >
          Media
        </li>

        <li
        onClick={() => setSelectedItem(SelectedItem.Links)}
        className={classNames(
          s.chat_modal_main__list_item,
          {[s.chat_modal_main__list_item__selected]: selectedItem === SelectedItem.Links}
        )}
        >
          Links
        </li>

        <li
        onClick={() => setSelectedItem(SelectedItem.Docs)}
        className={classNames(
          s.chat_modal_main__list_item,
          {[s.chat_modal_main__list_item__selected]: selectedItem === SelectedItem.Docs}
        )}
        >
          Docs
        </li>
      </ul>

      <div className={s.chat_modal_main__content}>
        {selectedItem === SelectedItem.Media && <ModalMedia />}
        {selectedItem === SelectedItem.Links && <div>Links</div>}
        {selectedItem === SelectedItem.Docs && <div>Docs</div>}
      </div>
    </div>
  )
}