import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import styles from './TodoItem.module.scss';

import TodoItemButtonsComponent from './TodoItemButtons/TodoItemButtons';

import {
  removeTodo as removeTodoAction,
  completeTodo as completeTodoAction,
  editTodo as editTodoAction,
} from '../../store/todoListSlice';

import { IItemTodoList } from '../../interfaces/interfaces';

export default function TodoItemComponent(props: { item: IItemTodoList }) {
  const { item } = props;
  const [isHover, setHover] = useState(false);
  const completedStyle = item.isCompleted ? 'todo-item-completed' : '';
  const input: React.RefObject<HTMLInputElement> = useRef(null);
  const dispatch = useDispatch();

  const buttonActions = {
    completeTodo: () => dispatch(completeTodoAction(item)),

    editTodo: () => {
      const newTitle = input.current ? input.current?.value : item.title;

      dispatch(editTodoAction({ todo: item, newTitle }));
    },

    removeTodo: () => dispatch(removeTodoAction(item)),
  };

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
            <TodoItemButtonsComponent actions={buttonActions} />
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
}
