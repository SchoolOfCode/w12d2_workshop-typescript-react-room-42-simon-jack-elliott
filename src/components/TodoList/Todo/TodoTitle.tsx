import { ChangeEvent } from "react";

interface Props {
  isEditing: boolean;
  isComplete: boolean;
  title: string;
  editedTodoTitle: string;
  setEditedTodoTitle: (title: string) => void;
}

// Alternative to 'e : ChangeEvent<HTMLInputElement>'
// interface Event {
//   target: {
//     value: string
//   }
// }

export function TodoTitle(props: Props) {
  const { isEditing, isComplete, title, editedTodoTitle, setEditedTodoTitle } =
    props;

  function onTodoTitleChange(e: ChangeEvent<HTMLInputElement>) {
    const newTodoTitle = e.target.value;
    setEditedTodoTitle(newTodoTitle);
  }

  return (
    <div className="todo-title">
      <span>{isComplete ? `✔️` : `❌`}</span>
      {isEditing ? (
        <input
          className="edit-todo"
          type="text"
          value={editedTodoTitle}
          onChange={onTodoTitleChange}
        />
      ) : (
        <div className={`${isComplete && "todo-done"}`}>{title}</div>
      )}
    </div>
  );
}
