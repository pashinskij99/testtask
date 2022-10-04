import React from 'react';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { setTogglePopup } from '../../store/popup';

const Popup = ({ status, children, popup }) => {

  const dispatch = useDispatch()

  return (
    <div className={clsx('popup', popup ? 'popup_active' : '')} onClick={() => dispatch(setTogglePopup(false))}>
      <div className={clsx('popup__content', popup ? 'popup__content_active' : '', status === 'rejected_user' && 'popup__content_error')} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Popup;