import React from "react";

const Action = (props) => {
  return (
    <div className="mt-2 space-x-2">
      <button
        className="btn btn-secondary"
        onClick={() =>
          props.handleEditTask(prompt("Edit task:", props.selectedTask.text))
        }
      >
        Edit
      </button>
      <button
        className="btn btn-secondary"
        onClick={() =>
          props.handleChangePriority(
            prompt("Enter new priority:", props.selectedTask.priority)
          )
        }
      >
        Change Priority
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => {
          window.alert(
            `Want to Delete ${props.priority} Priority Task? Click OK to confirm.`
          );
          props.handleDeleteTask();
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Action;
