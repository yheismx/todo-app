import './App.css';
import React,  {useState} from 'react';
import Title from './components/Title';
import Form from './components/Form';
import List from './components/List';


function App() {

  const [listToDo, setListToDo] = useState([]);
  const [listDone, setListDone] = useState([]);

  return (
    <div>
      <Title
        title="To Do App"
      />
      <div className="App">
          <Form/>

          <List/>
      </div>
    </div>
  );
}

export default App;
