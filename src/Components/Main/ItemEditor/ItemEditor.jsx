import React from 'react';
import './ItemEditor.scss';

const ItemEditor = (props) => {
  return (
    <div className="itemEditor">
      <button onClick={props.saveNote}>
        update
      </button>
      <button>
        cancel
      </button>
    </div>
  );
};

export default  ItemEditor;
