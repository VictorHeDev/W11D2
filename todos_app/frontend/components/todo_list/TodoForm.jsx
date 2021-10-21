import { useState } from 'react';
import { uniqueId } from '../../util';


const TodoForm = ({ createTodo, errors }) => {
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
    createTodo({
      title,
      body,
      done: false,
      id: uniqueId()
    }).then(() => {
      setTitle("");
      setBody("");
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        { errors.map((error, i) => <li key={i}>{error}</li>) }
      </ul>
      <label>Title:
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>
      <br />
      <label>Body:
        <textarea cols="30" rows="10" onChange={handleBodyChange} value={body} ></textarea>
      </label>
      <br />
      <button>Submit</button>
    </form>
  )
}



export default TodoForm
