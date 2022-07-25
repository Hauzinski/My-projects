import Button from '../../Button/Button';

import { IPropsNewTodoItemButtons } from '../../../interfaces/interfaces';

export default function AddNewTodoItemButtonsComponent(props: IPropsNewTodoItemButtons) {
  const { btnActionAdd } = props;
  const { btnActionClear } = props;

  const buttons = [
    {
      class: 'btn-add',
      action: btnActionAdd,
      title: 'Add todo',
      label: 'Add todo',
    },
    {
      class: 'btn-clear',
      action: btnActionClear,
      title: 'Clear text',
      label: 'Clear todo',
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
