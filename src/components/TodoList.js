import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;

    return (
      <React.Fragment>
        <h3 className="text-capitalize text-center">Todo list</h3>
        <ul className="list-group my-5">
          {items.map(item => <TodoItem 
                                key={item.id} 
                                title={item.title} 
                                handleDelete={() => handleDelete(item.id)} 
                                handleEdit={() => handleEdit(item.id)}
                              />
          )}
        </ul>
        <button 
          type="button" 
          className="btn btn-danger btn-block text-capitalize mt-5"
          onClick={clearList}
        >
          Clear list
        </button>
      </React.Fragment>
    )
  }
}
