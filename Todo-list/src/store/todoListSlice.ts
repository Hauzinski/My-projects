import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IItemTodoList, IEditTodoPayload } from '../interfaces/interfaces';

const defaultTodoList = [
  {
    title: 'Do react project',
    added: Date.now(),
    isCompleted: true,
    isEdited: false,
  },
  {
    title: 'Test react project',
    added: Date.now() + 1,
    isCompleted: false,
    isEdited: true,
  },
  {
    title: 'Deploy react project',
    added: Date.now() + 2,
    isCompleted: false,
    isEdited: false,
  },
];

export const todoList = createSlice({
  name: 'todoList',
  initialState: defaultTodoList,
  reducers: {
    addTodo: (state, action: PayloadAction<IItemTodoList>) => {
      state.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<IItemTodoList>) => {
      const todoIndex = state.findIndex(
        (value) => value.title === action.payload.title && value.added === action.payload.added
      );
      state.splice(todoIndex, 1);
    },
    //! Ошибка имени. Посмотреть логику.
    completeTodo: (state, action: PayloadAction<IItemTodoList>) => {
      state.map((value) => {
        if (value.title === action.payload.title && value.added === action.payload.added) {
          value.isCompleted = !value.isCompleted;
        }
        return value;
      });
    },
    editTodo: (state, action: PayloadAction<IEditTodoPayload>) => {
      state.map((value) => {
        if (value.title === action.payload.todo.title && value.added === action.payload.todo.added) {
          value.title = action.payload.newTitle;
          value.isEdited = !value.isEdited;
        }
        return value;
      });
    },
  },
});

export const { addTodo, removeTodo, completeTodo, editTodo } = todoList.actions;

export default todoList.reducer;
