import StepListItemContainer from './StepListItemContainer'
import StepForm from './StepForm'

const StepList = ({ todoId, steps, receiveStep }) => {
  return (
    <div>
      <ul>
        { steps.map(step => (
          <StepListItemContainer key={step.id} step={step} />
        ))}
      </ul>
      <StepForm receiveStep={receiveStep} todoId={todoId} />
    </div>
  )
}

export default StepList
