import StepListItemContainer from './StepListItemContainer'

const StepList = ({ steps, receiveStep }) => {
  return (
    <div>
      <ul>
        { steps.map(step => (
          <StepListItemContainer key={step.id} step={step} />
        ))}
      </ul>
    </div>
  )
}

export default StepList
