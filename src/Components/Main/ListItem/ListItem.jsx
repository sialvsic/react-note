import React from 'react';
import './ListItem.scss';

const ListItem = ({ props }) => {
  return (
    <div className="list-item">
      {props.title}
    </div>
  );
};

export default ListItem;
