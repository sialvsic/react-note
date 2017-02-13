import React from 'react';
import Header from '../Hearder/Header';
import Footer from '../Footer/Footer';
import List from '../Main/List/List';
import ItemEditor from '../Main/ItemEditor/ItemEditor';
import ItemShowLayer from '../Main/ItemShowLayer/ItemShowLayer';
import './App.scss';
import  uuid from 'uuid';
import Favicon from 'react-favicon';

export  default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      notes: [],
      draft: {
        title: '',
        content: '',
        time: ''
      },
      isEditing: false,
      selectedNoteId: 0,
      isShow: false,
      isCreateNew: false
    };
    this.saveNote = this.saveNote.bind(this);
    this.saveDraft = this.saveDraft.bind(this);
    this.createNote = this.createNote.bind(this);
    this.selectedNote = this.selectedNote.bind(this);
    this.isExistNote = this.isExistNote.bind(this);
    this.setFocus = this.setFocus.bind(this);
  }


  isExistNote() {
    let isExist = false;
    this.state.notes.find((note) => {
      if (note.id == this.state.draft.id) {
        isExist = true;
      }
    });

    return isExist;
  }

  saveNote() {

    if (this.isExistNote()) {
      this.updateNote();
    } else {
      this.addNote();
    }
  }

  addNote() {
    this.setState({
      notes: [...this.state.notes, this.state.draft],
      isEditing: false,
      isCreateNew: false
    });
  }

  updateNote() {
    const newNotes = this.state.notes.map((note) => {
      if (note.id == this.state.draft.id) {
        note = this.state.draft;
      }
      return note;
    });

    this.setState({
      notes: newNotes,
      isEditing: false,
      isCreateNew: false
    });
  }

  saveDraft(tempNote) {
    this.setState({
      draft: {
        title: tempNote,
        content: tempNote,
        time: '',
        id: this.state.draft.id
      },
      isCreateNew: false
    });
  }

  selectedNote(selectedNoteId) {
    const note = this.state.notes.find((noteItem) => {
      return noteItem.id == selectedNoteId;
    });

    this.setState({
      selectedNoteId: selectedNoteId,
      draft: note,
      isEditing: false,
      isShow: true
    });
  }

  createNote() {
    const id = uuid.v4();
    this.setState({
      isEditing: true,
      selectedNoteId: id,
      draft: {
        id: id,
        title: '',
        content: '',
        time: ''
      },
      isShow: false,
      isCreateNew: true
    });
  }

  setFocus() {
    this.setState({
      isEditing: true,
      isShow: false,
      isCreateNew: false
    });
  }

  render() {
    return (
      <div className="app" id="app">
        <header className="header">
          <Header/>
        </header>

        <div className="content">
          <aside className="aside">
            <List
              notes={this.state.notes}
              createNote={this.createNote}
              selectedNote={this.selectedNote}
            />
          </aside>
          <main className="main-content">
            <ItemEditor
              saveNote={this.saveNote}
            />
            <ItemShowLayer
              isEditing={this.state.isEditing}
              isShow={this.state.isShow}
              isCreateNew={this.state.isCreateNew}
              saveDraft={this.saveDraft}
              setFocus={this.setFocus}
              drafts={this.state.draft}
            />
          </main>
        </div>

        <footer className="footer">
          <Footer/>
        </footer>
        <Favicon url={'/images/sun.jpg'}/>
      </div>
    );
  }
}

App.propTypes = {
  name: React.PropTypes.string
};

App.defaultProps = {
  name: 'welcome to react'
};
