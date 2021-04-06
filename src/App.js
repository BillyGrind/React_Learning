import './App.css';
import { useState } from 'react';
import Item from './Item'

function App() {

const [dataArr,setDataArr] = useState(
  [
    {nom: "Juliette"},
    {nom: "JOHHHHN"},
    {nom: "Jorsi"},

  ]
);


  const [toggle, setToggle] = useState(true);
  const changeState = () => {
    setToggle(!toggle)
  }

  return (
    <div className="App">
      <div className={toggle ? "box animated" : "box"}></div>
      <button onClick={changeState}>Changer state</button>
      
      {dataArr.map(item =>{
        return <p>Nom: {item.nom}</p>
      })}
    
    
    </div>
  );
}

export default App;
