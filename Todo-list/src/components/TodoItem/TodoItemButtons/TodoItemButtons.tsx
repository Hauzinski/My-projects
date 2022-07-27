import Button from '../../Button/Button';

import { IPropsTodoItemButtons } from '../../../models/models';

export default function TodoItemButtonsComponent(props: IPropsTodoItemButtons) {
  const { actions } = props;

  const buttons = [
    {
      class: 'btn-complete',
      action: actions.completeTodo,
      title: 'Complete todo',
      label: 'Todo complete',
    },
    {
      class: 'btn-edit',
      action: actions.editTodo,
      title: 'Edit todo',
      label: 'Todo edit',
    },
    {
      class: 'btn-remove',
      action: actions.removeTodo,
      title: 'Remove todo',
      label: 'Todo remove',
    },
  ];

  return (
    <div className="todo-item-buttons-container">
      {buttons.map((item) => (
        <Button data={item} key={item.title} />
      ))}
    </div>
  );
}
