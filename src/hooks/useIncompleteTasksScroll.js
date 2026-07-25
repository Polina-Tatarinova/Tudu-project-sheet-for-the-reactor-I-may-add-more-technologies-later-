import { useRef } from 'react';

const useIncompleteTasksScroll = (tasks) => {
  const firstIncompleteTaskRef = useRef(null);
  const firstIncompleteTaskId = tasks.find(({ isDone }) => !isDone)?.id;

  return {
    firstIncompleteTaskRef,
    firstIncompleteTaskId,
  };
};

export default useIncompleteTasksScroll;
