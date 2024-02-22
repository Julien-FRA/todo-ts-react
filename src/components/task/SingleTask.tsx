import React, { useEffect, useState } from "react";
import { Task as TaskClass } from "../../utils/class/task.class";
import { SingleTaskType } from "../../utils/type/task.type";

const SingleTask = ({ userId, id, title, completed }: SingleTaskType) => {
  return (
    <div>
      <h3>{id}</h3>
      <p>{title}</p>
      <label>
        <input type="checkbox" checked={completed} />
      </label>
    </div>
  );
};

export default SingleTask;
