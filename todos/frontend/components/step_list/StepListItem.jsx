const StepListItem = ({ step, receiveStep, removeStep }) => {

  const toggleStep = () => {
    step.done = !step.done;
    receiveStep(step);
  }

  const handleDelete = () => {
    removeStep(step);
  }

  return (
    <li>
      {step.title} - {step.description}
      <button onClick={toggleStep}>Toggle Status</button>
      {step.done ? "Done" : "Not done"}
      <button onClick={handleDelete}>Delete</button>
    </li>
  )
}

export default StepListItem
