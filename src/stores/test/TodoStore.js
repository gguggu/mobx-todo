import { autobind } from 'core-decorators';
import { observable, action, computed } from 'mobx';

@autobind
class TodoStore {
  @observable todos = [{ id: 0, checked: false, content: '설거지 하기' }, { id: 1, checked: true, content: '밥 먹기' }];

  @action addTodo(todo){
    this.todos.push(todo);
  }

  @action deleteTodo(id){
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  @action checkTodo(id) {
    for(let todo of this.todos){
      if(todo.id === id){
        todo.checked = true;
        break;
      }
    }
  }

  @computed get checkedTodoLength() {
    return this.todos.filter(todo => !todo.checked).length;
  }

}

export default TodoStore;
