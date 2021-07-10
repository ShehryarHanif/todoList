// import Todos from "./components/Todos";

// function App() {
//   return (
//     <div>
//       <Todos items={["Learn React", "Learn TypeScript"]} />
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// import Todos from "./components/Todos";
// import NewTodo from "./components/NewTodo";

// import Todo from "./models/todo";

// function App() {
//   // const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];

//   const [todos, setTodos] = useState<Todo[]>([]);

//   const addTodoHandler = (todoText: string): void => {
//     const newTodo = new Todo(todoText);

//     setTodos((previousState) => previousState.concat(newTodo));
//   };

//   const removeTodoHandler = (todoId: string) => {
//     setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
//   };

//   return (
//     <div>
//       <NewTodo onAddTodo={addTodoHandler} />

//       <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
//     </div>
//   );
// }

// export default App;

import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos-context";

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;