import React, { Component } from 'react';
import './ItemShowLayer.scss';

export default class ItemShowLayer extends Component {

  constructor() {
    super();
    this.focus = this.focus.bind(this);
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

  saveDate() {
    this.props.saveDraft(this.refs.content.innerText);
  }

  focus() {
    this.props.setFocus();
  }

  render() {
    return (
      <div className="ItemShowLayer">
        <div ref="content" id="item-show" className="item-show" onClick={this.focus} onInput={::this.saveDate}
             contentEditable={this.props.isEditing}>
        </div>
      </div>
    );
  }
}

