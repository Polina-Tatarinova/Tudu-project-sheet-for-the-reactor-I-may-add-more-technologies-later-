import Todo from './components/Todo';
import { TasksProvider } from './context/TaskContext';

const Hello = () => <h1>Hellow!</h1>;

const App = () => {
  return (
    <TasksProvider>
      <Todo />
    </TasksProvider>
  );
};

export default App;
