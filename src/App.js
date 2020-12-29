import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';


function loadProjects(callback){
  const xhr = new XMLHttpRequest()
  const method = 'GET' // 'POST'
  const url = "http://localhost:8000/projects/"
  const responseType = "json"
  xhr.responseType = responseType
xhr.open(method, url)
xhr.onload = function() {
  callback(xhr.response, xhr.status)
}
// xhr.onerror = function (e) {
//   callback({"message": "invalid request"}, 400)
// }
xhr.send()
}

function App() {
  const [projects, setProjects] = useState([{name: 123}])
  useEffect(() => {
    const myCallback = (response, status) => {

      setProjects(response);

    }
    loadProjects(myCallback)
  }, [])
  

  // console.log(projects.response)
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {projects.map((project, index)=>{
          return <li>{project.name}</li>
          })} 
        </p>
      </header>
    </div>
  );
}

export default App;
