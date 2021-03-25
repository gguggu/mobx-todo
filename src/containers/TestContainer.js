import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';

let INDEX = 2;

const TestContainer = ({ store }) => {
  const { todos, addTodo, deleteTodo, checkTodo, checkedTodoLength } = store.TodoStore;
  const [content, setContent] = useState('');
  const clickButton = () => {
    const data = {
      id: INDEX,
      checked: false,
      content
    }
    addTodo(data);
    setContent('');
    INDEX++;
  }

  return (
    <div>
      <input value={content} onChange={e => setContent(e.target.value)}/>
      <button onClick={clickButton}>Add</button>
      <div>할 일 수{checkedTodoLength}</div>
      <div>
        {todos && todos.map(todo => <div key={todo.id}>
          <div style={{ color: todo.checked ? 'green' : 'red' }}>
            {todo.content}
          </div>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          <button onClick={() => checkTodo(todo.id)}>Check</button>
        </div>)}
      </div>
    </div>
  );
};

export default inject('store')(observer(TestContainer));
