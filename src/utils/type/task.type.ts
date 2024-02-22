export type SingleTaskType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type ListTaskType = {
  tasks?: {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
};
