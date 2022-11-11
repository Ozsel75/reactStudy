import logo from './logo.svg';
import { useState } from 'react'; // usestate ile değişken yapı içinde aldık 
import User from './components/user';
import './App.css';

const friends = [
  {
    name : "Diablo" 
  }, 
  {
    name : "lylit" 
  }, 
  {
    name : "yyüüiiitt" 
  } 
];

function App() {
  const [name2, setName2] = useState("Mirnaw");
  const [age2, setAge2] = useState(24);
  const [friends2, setFriends2] = useState(["yayşe", "yosman", "yali"]);
  const [adress, setAdress] = useState({title : "Manisa", zip : 45020});

  return (
    <div className="App">
      <h1>Hi there {name2}</h1>
      <h2>your age {age2}</h2>
      <button onClick={()=> setName2("Ash")}>Click</button>
      <button onClick={() => setAge2(47)}>Click</button>
      <hr />
      <br></br>
      <h3>friends2</h3>
      {
        friends2.map((frie, key) => <div key={key}>{frie}</div>)
      }
      <button onClick={()=>setFriends2([...friends2, "yayası"])}>Add friend click</button> 
      
      <hr />
      <br></br> 
      <h2>Adress</h2>
      <div>
        {adress.title} {adress.zip}
      </div>
      <br/>
      <button onClick={()=>setAdress({ ...adress, title: "İzmir",  })}>change adress</button>
      <User 
      name="baal" 
      surname="the lord"
      isLoggedIn = {true} 
      age={938475938475}
      friends = {friends}
      />
    </div>
  );
}

export default App;
