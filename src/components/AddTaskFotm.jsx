import Button from "./Button";
import Field from "./Field";

const AddTaskForm = () => {
  return (
    <form className="todo__form">
      <Field
      className='todo__form'
      label='New task title'
      id='new-task'
      
      />
      <Button
      type='submit'
      >Add</Button>
    </form>
  );
};

export default AddTaskForm;
