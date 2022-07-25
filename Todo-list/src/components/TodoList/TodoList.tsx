import { useSelector } from 'react-redux';

import styles from './TodoList.module.scss';

import TodoItemComponent from '../TodoItem/TodoItem';

import { IItemTodoList } from '../../interfaces/interfaces';

export default function TodoListComponent(props: { isCompleted: boolean }) {
  const { isCompleted } = props;
  const title = isCompleted ? 'Completed' : 'Todo';
  const completedStyle = isCompleted ? styles['todo-list-completed'] : '';
  const todoList = useSelector((state: { todoList: [IItemTodoList] }) => state.todoList).filter(
    (item) => item.isCompleted === isCompleted
  );

  return (
    <div className={styles['todo-list-container']}>
      {Boolean(todoList.length) && <p className={styles['todo-list-title']}>{title}</p>}
      <ul className={`${styles['todo-list']} ${completedStyle}`}>
        {todoList.map((item) => (
          <li key={item.added}>
            <TodoItemComponent item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
