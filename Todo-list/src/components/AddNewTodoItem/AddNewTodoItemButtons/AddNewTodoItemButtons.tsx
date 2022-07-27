import Button from '../../Button/Button';

import { IPropsNewTodoItemButtons } from '../../../models/models';

export default function AddNewTodoItemButtonsComponent(props: IPropsNewTodoItemButtons) {
  const { actions } = props;

  const buttons = [
    {
      class: 'btn-add',
      action: actions.addTodo,
      title: 'Add todo',
      label: 'Add todo',
    },
    {
      class: 'btn-delete-text',
      action: actions.deleteText,
      title: 'Delete text',
      label: 'Delete text',
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
