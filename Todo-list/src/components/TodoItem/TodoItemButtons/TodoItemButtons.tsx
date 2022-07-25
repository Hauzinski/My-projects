import Button from '../../Button/Button';

import { IPropsTodoItemButtons } from '../../../interfaces/interfaces';

export default function TodoItemButtonsComponent(props: IPropsTodoItemButtons) {
  const { btnActionComplete } = props;
  const { btnActionEdit } = props;
  const { btnActionRemove } = props;

  const buttons = [
    {
      class: 'btn-complete',
      action: btnActionComplete,
      title: 'Complete todo',
      label: 'Todo complete',
    },
    {
      class: 'btn-edit',
      action: btnActionEdit,
      title: 'Edit todo',
      label: 'Todo edit',
    },
    {
      class: 'btn-delete',
      action: btnActionRemove,
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
