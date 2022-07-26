import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo as addTodoAction } from '../../store/todoListSlice';

import AddNewTodoItemButtonsComponent from './AddNewTodoItemButtons/AddNewTodoItemButtons';

export default function AddNewTodoItemComponent() {
  const dispatch = useDispatch();
  const input: React.RefObject<HTMLInputElement> = useRef(null);

  const buttonActions = {
    addTodo: () => {
      const inputValue = input.current?.value;

      if (inputValue) {
        dispatch(addTodoAction(inputValue));

        input.current.value = '';
      }
    },

    deleteText: () => {
      if (input.current) {
        input.current.value = '';
      }
    },
  };

  return (
    <div className="todo-item-container">
      <div className="todo-item-input-border">
        <input className="todo-item-input" type="text" placeholder="Add new task" ref={input} />
      </div>
      <AddNewTodoItemButtonsComponent actions={buttonActions} />
    </div>
  );
}
