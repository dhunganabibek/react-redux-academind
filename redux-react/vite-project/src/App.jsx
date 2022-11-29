import {useSelector,useDispatch} from 'react-redux';



function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const incrementHandler = () => {
    dispatch({type:'increment'});
  }
  
  
  const decrementHandler = () => {
    dispatch({type:'decrement'});
  }
  
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={incrementHandler}>Add</button>
      <button onClick={decrementHandler}>subtract</button>
    </div>
  )
}

export default App
