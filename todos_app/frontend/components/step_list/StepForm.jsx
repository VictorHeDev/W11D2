import { useState } from 'react';
import { uniqueId } from '../../util';

const StepForm = ({ receiveStep, todoId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    receiveStep({
      title,
      description,
      done: false,
      id: uniqueId(),
      todoId
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>
      <br />
      <label>Description:
        <textarea cols="30" rows="10" onChange={handleDescriptionChange} value={description} ></textarea>
      </label>
      <br />
      <button>Submit</button>
    </form>
  )
}

export default StepForm
