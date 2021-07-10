// import { useRef } from "react";

// import classes from "./NewTodo.module.css";

// const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
//     const todoTextInputRef = useRef<HTMLInputElement>(null);

//     const submitHandler = (event: React.FormEvent) => {
//         event.preventDefault();

//         // const enteredText = todoTextInputRef.current?.value; // We needed the question mark because it was possible that there was a null value outside the function

//         const enteredText = todoTextInputRef.current!.value; // We added the question mark because we know there will be a value

//         if (enteredText.trim().length === 0){
//             // Throw an error

//             return;
//         }

//         props.onAddTodo(enteredText);
//     };

//     return (
//         <form onSubmit={submitHandler} className={classes.form}>
//             <label htmlFor="Text">Todo Text</label>
//             <input type="text" id="text" ref={todoTextInputRef}/>

//             <button>Add Todo</button>
//         </form>
//     )
// }

// export default NewTodo;

  
import { useRef, useContext } from "react";

import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todosContext = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // Throw an error

      return;
    }

    todosContext.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;