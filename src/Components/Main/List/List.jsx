import React from 'react';
import ListItem from '../ListItem/ListItem';
import './List.scss';

const List = (props) => {
  const selected = (item) => {
    props.selectedNote(item.id);
  };

  const List = props.notes.map((item, key) => {
    return (
      <div key={key} onClick={selected.bind(this, item)}>
        <ListItem props={item}/>
      </div>
    );
  });

  return (
    <div className="list">
      <div className="creat-note">
        <button onClick={props.createNote}>
          Creat a New Note
        </button>
      </div>
      {List}
    </div>
  );
};

export default  List;
