// import React from "react";

// const Todos = () => {
//   return (
//     <ul>
//       <li>Learn React</li>
//       <li>Learn TypeScript</li>
//     </ul>
//   );
// };

// export default Todos;

// const Todos = (props: { items: string[], children: any}) => {
//   return (
//     <ul>
//       <li>Learn React</li>
//       <li>Learn TypeScript</li>
//     </ul>
//   );
// };

// export default Todos;

// import React from "react";

// const Todos: React.FC<{ items: string[] }> = (props) => {
//   return (
//     <ul>
//       {props.items.map((item) => (
//         <li key={item}>{item}</li>
//       ))}
//     </ul>
//   );
// };

// export default Todos;

// import React from "react";

// import Todo from "../models/todo";

// const Todos: React.FC<{ items: Todo[] }> = (props) => {
//   return (
//     <ul>
//       {props.items.map((item) => <li key={item.id}>{item.text}</li>)}
//     </ul>
//   );
// };

// export default Todos;
  
// import React from "react";

// import TodoItem from "./TodoItem";
// import Todo from "../models/todo";

// import classes from "./Todos.module.css";

// const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (props) => {
//   return (
//     <ul className={classes.todos}>
//       {props.items.map((item) => <TodoItem key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}/>)}
//     </ul>
//   );
// };

// export default Todos;

import React, { useContext } from "react";

import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const todosContext = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosContext.items.map((item) => <TodoItem key={item.id} text={item.text} onRemoveTodo={todosContext.removeTodo.bind(null, item.id)}/>)}
    </ul>
  );
};

export default Todos;