import { useState } from 'react';


const TodoForm = ({ receiveTodo }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    receiveTodo({
      title,
      body
    })
  }


  return (
    <form>
      <label>Title:
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>
      <br />
      <label>Body:
        <textarea cols="30" rows="10" onChange={handleBodyChange} value={body} ></textarea>
      </label>
      <br />
      {/* <button onSubmit={}>Submit</button> */}
    </form>
  )
}



export default TodoForm
