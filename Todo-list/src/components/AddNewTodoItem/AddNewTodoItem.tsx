import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo as addTodoAction } from '../../store/todoListSlice';

import TodoItemButtonsComponent from '../TodoItemButtons/TodoItemButtons';

export default function AddNewTodoItemComponent() {
  const dispatch = useDispatch();
  const input: React.RefObject<HTMLInputElement> = useRef(null);

  function addTodo() {
    const inputValue = input.current?.value;

    if (inputValue) {
      dispatch(addTodoAction(inputValue));

      input.current.value = '';
    }
  }

  function deleteText() {
    if (input.current) {
      input.current.value = '';
    }
  }

  const buttons = [
    {
      class: 'btn-add',
      action: addTodo,
      title: 'Add todo',
      label: 'Add todo',
    },
    {
      class: 'btn-delete-text',
      action: deleteText,
      title: 'Delete text',
      label: 'Delete text',
    },
  ];

  return (
    <div className="todo-item-container">
      <div className="todo-item-input-border">
        <input className="todo-item-input" type="text" placeholder="Add new task" ref={input} />
      </div>
      <TodoItemButtonsComponent buttons={buttons} />
    </div>
  );
}
