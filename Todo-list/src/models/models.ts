export interface IPropsNewTodoItemButtons {
  actions: {
    addTodo: () => void;
    deleteText: () => void;
  };
}

export interface IPropsTodoItemButtons {
  actions: {
    completeTodo: () => void;
    editTodo: () => void;
    removeTodo: () => void;
  };
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
