import React, { Component } from 'react';
import './ItemShowLayer.scss';

export default class ItemShowLayer extends Component {

  constructor() {
    super();
    this.focus = this.focus.bind(this);
  }

  componentDidMount() {
    this.refs.content.addEventListener('input', () => {
      this.props.saveDraft(this.refs.content.innerText);
    }, false);
  }

  componentWillMount() {
    if (this.props.isEditing) {
      this.refs.content.focus();
    }
  }

  componentDidUpdate() {
    if (this.props.isEditing) {
      this.refs.content.focus();
    }

    if (!this.props.isEditing && this.props.isShow) {
      this.refs.content.innerHTML = this.props.drafts.content;
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isCreateNew) {
      this.refs.content.innerHTML = '';
    }
  }

  focus() {
    this.props.setFocus();
  }

  render() {

    return (
      <div className="ItemShowLayer">
        <div ref="content" id="item-show" className="item-show" onClick={this.focus}
             contentEditable={this.props.isEditing}
             suppressContentEditableWarning={true}>
        </div>
      </div>
    );
  }
}

