import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } =this.props;

    return (
      <li className="d-flex justify-content-between align-items-center my-2 list-group-item text-capitalize">
        <h6 className="my-0">{title}</h6>
        <div className="todo-icons">
          <span role="button" title="Edit Item" className="mx-2 text-success" onClick={handleEdit}>
            <i className="fas fa-pen"></i>
          </span>
          <span role="button" title="Delete Item" className="mx-2 text-danger" onClick={handleDelete}> 
            <i className="fas fa-trash"></i>
          </span>
        </div>
      </li>
    )
  }
}
