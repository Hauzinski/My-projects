export interface IPropsNewTodoItemButtons {
  btnActionAdd: () => void;
  btnActionClear: () => void;
}

export interface IPropsTodoItemButtons {
  btnActionComplete: () => void;
  btnActionEdit: () => void;
  btnActionRemove: () => void;
}

export interface IPropsButton {
  data: {
    class: string;
    action: () => void;
    title: string;
    label: string;
  };
}

export interface IItemTodoList {
  title: string;
  added: number;
  isCompleted: boolean;
  isEdited: boolean;
}

export interface IEditTodoPayload {
  todo: IItemTodoList;
  newTitle: string;
}
