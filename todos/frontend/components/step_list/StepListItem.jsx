const StepListItem = ({ step, receiveStep, removeStep }) => {

  const toggleStep = () => {
    step.done = !step.done;
    receiveStep(toggled);
  }

  const handleDelete = () => {
    removeStep(step);
  }

  return (
    <li>
      {step.title}
      <button onClick={toggleStep}>Toggle Status</button>
      {step.done ? "Done" : "Not done"}
      <button onClick={handleDelete}>Delete</button>
    </li>
  )
}

export default StepListItem
