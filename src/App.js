import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
const commentStyle = {
  border: '3px solid blue',
  borderRadius: '15px',
  margin: '10px',
  backgroundColor: 'skyblue'


}

function App() {
  return (
    <div className="App">
      <Comments></Comments>
    </div>
  );
}
function Comments() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => setComments(data))
  }, []);

  return (
    <div>
      <h1>User Comments</h1>
      <h3>comments: {comments.length}</h3>
      {
        comments.map(comment => <Comment name={comment.name} email={comment.email} body={comment.body}></Comment>)
      }
    </div>
  );
}
function Comment(props) {
  return (
    <div style={commentStyle}>
      <h2>Name: {props.name}</h2>
      <h3>Email: {props.email}</h3>
      <p>{props.body}</p>
    </div>
  );
}

export default App;
