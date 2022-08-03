import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import styles from './TodoItem.module.scss';

import TodoItemButtonsComponent from '../TodoItemButtons/TodoItemButtons';

import {
  removeTodo as removeTodoAction,
  completeTodo as completeTodoAction,
  editTodo as editTodoAction,
} from '../../store/todoListSlice';

import { IItemTodoList } from '../../models/models';

export default function TodoItemComponent({ item }: { item: IItemTodoList }) {
  const [isHover, setHover] = useState(false);
  const completedStyle = item.isCompleted ? 'todo-item-completed' : '';
  const input: React.RefObject<HTMLInputElement> = useRef(null);
  const dispatch = useDispatch();

  function completeTodo() {
    dispatch(completeTodoAction(item));
  }

  function editTodo() {
    const newTitle = input.current ? input.current?.value : item.title;

    dispatch(editTodoAction({ todo: item, newTitle }));
  }

  function removeTodo() {
    dispatch(removeTodoAction(item));
  }

  const buttons = [
    {
      class: 'btn-complete',
      action: completeTodo,
      title: 'Complete todo',
      label: 'Todo complete',
    },
    {
      class: 'btn-edit',
      action: editTodo,
      title: 'Edit todo',
      label: 'Todo edit',
    },
    {
      class: 'btn-remove',
      action: removeTodo,
      title: 'Remove todo',
      label: 'Todo remove',
    },
  ];

  return (
    <div className="todo-item-container" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="todo-item-input-border">
        {item.isEdited && (
          <input className={`todo-item-input ${completedStyle}`} type="text" defaultValue={item.title} ref={input} />
        )}
        {!item.isEdited && <p className={`${styles['todo-item']} ${completedStyle}`}>{item.title}</p>}
      </div>
      <TransitionGroup>
        {isHover && (
          <CSSTransition
            in={false}
            timeout={200}
            classNames={{
              enter: styles['btn-transition-enter'],
              enterActive: styles['btn-transition-enter-active'],
              exit: styles['btn-transition-exit'],
              exitActive: styles['btn-transition-exit-active'],
            }}
          >
            <TodoItemButtonsComponent buttons={buttons} />
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
}
