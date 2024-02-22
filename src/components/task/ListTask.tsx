import React, { useEffect, useState } from "react";
import { Task as TaskClass } from "../../utils/class/task.class";
import { ListTaskType, SingleTaskType } from "../../utils/type/task.type";
import SingleTask from "./SingleTask";

const ListTask = () => {
  const [tasks, setTasks] = useState<any>({});

  const taskInfo = async () => {
    const response = await new TaskClass(
      "https://jsonplaceholder.typicode.com/todos"
    ).getAllTask();
    setTasks(response);
  };

  useEffect(() => {
    taskInfo();
  }, []);

  console.log(tasks[0]);

  return (
    <div>
      {tasks.map((task: SingleTaskType) => (
        <SingleTask
          userId={task.userId}
          id={task.id}
          title={task.title}
          completed={task.completed}
        />
      ))}
    </div>
  );
};

export default ListTask;
