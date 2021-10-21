const StepListItem = ({ step, receiveStep, removeStep }) => {

  const toggleStep = () => {
    const toggledStep = Object.assign(
      {},
      step,
      { done: !step.done}
    );
    receiveStep(toggledStep);
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
