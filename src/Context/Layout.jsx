import React from "react";
import Action from "./Action";

function Layout(props) {
  return (
    <div className="bg-red-100 p-4 rounded border border-red-400">
      <h2 className="text-lg font-primary font-semibold mb-2">
        {props.level} Priority
      </h2>
      {props.getTasksByPriority(props.level).map((task, index) => (
        <div key={index} className="bg-white p-4 rounded mb-4 shadow-md">
          <div className="flex flex-col">
            <div
              className="cursor-pointer"
              onClick={() => props.setSelectedTask(task)}
            >
              <p className="text-base font-semibold">{task.text}</p>
              {task.description && (
                <p className="text-sm text-gray-600 mt-1">{task.description}</p>
              )}
            </div>
            {props.selectedTask === task && (
              <div className="mt-2">
                <Action
                  priority={props.level}
                  handleEditTask={props.handleEditTask}
                  handleChangePriority={props.handleChangePriority}
                  handleDeleteTask={props.handleDeleteTask}
                  selectedTask={props.selectedTask}
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Layout;
