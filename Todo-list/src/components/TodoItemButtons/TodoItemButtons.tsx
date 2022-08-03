import Button from '../Button/Button';

import styles from './TodoItemButtons.module.scss';

import { IPropsTodoItemButtons } from '../../models/models';

export default function TodoItemButtonsComponent({ buttons }: IPropsTodoItemButtons) {
  return (
    <div className={styles['todo-item-buttons']}>
      {buttons.map((item) => (
        <Button data={item} key={item.title} />
      ))}
    </div>
  );
}
