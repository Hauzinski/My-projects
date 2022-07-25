import TodoListComponent from '../../components/TodoList/TodoList';

export default function MainPage() {
  return (
    <main>
      <TodoListComponent isCompleted={false} />
      <TodoListComponent isCompleted />
    </main>
  );
}
