import { useState, useReducer } from 'react'

// useState components
function NameList() {
  const [ list, setList ] = useState(["Jack", "Jill", "John"]);
  // Can run a function for the first iteration of state
  const [ name, setName ] = useState("");


  // Add name to existing list using spread operator  
  const onAddName = () => {
    setList([...list, name]);
    setName("");
  }

  return (
    <div>
      <ul>
        {/* map each name to render unordered list */}
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
      onClick={onAddName}>
        Add Name
      </button>
    </div>
  );
}

function Counter() {
  const [ count, setCount ] = useState(10);
  

  function addOne() {
    setCount(count + 1);
  }

  return <div className='App'>
    <button
      onClick={addOne}
    >Count = {count}</button>
  </div>;

  
}

// function App() {
//   return (
//     <div>
//       <Counter />
//       <NameList />

//     </div>
//   )
// }

// useReducer components


function App() {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case "SET_NAME":
        return {...state, name: action.payload}
    }
  }, {
    names: [],
    name: "",
  });
  return <div className="App">
    <input
    type='text'
    value={state.name}
    onChange={e => dispatch({ type: "SET_NAME", payload: e.target.value})}>
    
    </input>
    <div>Name = {state.name}</div>

  </div>
}


export default App;
