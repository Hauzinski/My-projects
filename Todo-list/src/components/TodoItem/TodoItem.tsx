import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  removeTodo as removeTodoAction,
  completeTodo as completeTodoAction,
  editTodo as editTodoAction,
} from '../../store/todoListSlice';

import styles from './TodoItem.module.scss';

import TodoItemButtonsComponent from './TodoItemButtons/TodoItemButtons';

import { IItemTodoList } from '../../interfaces/interfaces';

export default function TodoItemComponent(props: { item: IItemTodoList }) {
  const { item } = props;
  const [isHover, setHover] = useState(false);
  const completedStyle = item.isCompleted ? 'todo-item-completed' : '';
  const input: React.RefObject<HTMLInputElement> = useRef(null);
  const dispatch = useDispatch();

  const completeTodo = () => dispatch(completeTodoAction(item));

  const editTodo = () => {
    const newTitle = input.current ? input.current?.value : item.title;

    dispatch(editTodoAction({ todo: item, newTitle }));
  };

  const removeTodo = () => dispatch(removeTodoAction(item));

  return (
    <div className="todo-item-container" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="todo-item-input-border">
        {item.isEdited && (
          <input className={`todo-item-input ${completedStyle}`} type="text" defaultValue={item.title} ref={input} />
        )}
        {!item.isEdited && <p className={`${styles['todo-item']} ${completedStyle}`}>{item.title}</p>}
      </div>
      {isHover && (
        <TodoItemButtonsComponent
          btnActionComplete={completeTodo}
          btnActionEdit={editTodo}
          btnActionRemove={removeTodo}
        />
      )}
    </div>
  );
}
