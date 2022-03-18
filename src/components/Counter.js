import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { counteraction } from '../store';
const Counter = () => {
  let counter = useSelector(state => state.counter.counter)
  let show = useSelector(state => state.counter.isshown)
  console.log(`the state was reload`);

  let dispatch = useDispatch()
  let addcounter = () => {
    // dispatch({ type: 'increment' })
    dispatch(counteraction.increment())
  }
  let subcounter = () => {
    // dispatch({ type: 'decrement' })
    dispatch(counteraction.decrement())
  }
  let morecounter = () => {
    // dispatch({ type: 'custom', payload: 100 })
    dispatch(counteraction.increase(5))
  }
  console.log(counter);
  console.log(addcounter);


  const toggleCounterHandler = () => {
    // dispatch({ type: 'toggle' })
    dispatch(counteraction.toggler())
  };
  console.log(show);


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={addcounter}>increment</button>
      <button onClick={subcounter}>decrement</button>
      <button onClick={morecounter}>increase by 5</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
