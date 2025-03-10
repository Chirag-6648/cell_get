import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [user, setuser] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((result) => {
      result.json().then((res) => {
        setuser(res)
      })
    })
  }, [])
  return (
    <div className="App">
      <h1>Get API CALL</h1>
      <table border="1" align='center'>
        <tbody>
          <tr>
            <td>id</td>
            <td>title</td>
            <td>completed</td>
          </tr>
          {
            user.map((item, i) =>
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.completed + " "}</td>
              </tr>
            )
          }

        </tbody>
      </table>
    </div>
  );
}

export default App;
