import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo as addTodoAction } from '../../store/todoListSlice';

import AddNewTodoItemButtonsComponent from './AddNewTodoItemButtons/AddNewTodoItemButtons';

export default function AddNewTodoItemComponent() {
  const dispatch = useDispatch();
  const input: React.RefObject<HTMLInputElement> = useRef(null);

  const addTodo = () => {
    const inputValue = input.current?.value;
    if (inputValue) {
      const todo = {
        title: inputValue,
        added: Date.now(),
        isCompleted: false,
        isEdited: false,
      };

      dispatch(addTodoAction(todo));

      input.current.value = '';
    }
  };

  const todoClear = () => {
    if (input.current) {
      input.current.value = '';
    }
  };

  return (
    <div className="todo-item-container">
      <div className="todo-item-input-border">
        <input className="todo-item-input" type="text" placeholder="Add new task" ref={input} />
      </div>
      <AddNewTodoItemButtonsComponent btnActionAdd={addTodo} btnActionClear={todoClear} />
    </div>
  );
}
