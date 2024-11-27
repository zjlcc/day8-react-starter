import {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0)

  function increate () {
    setCount(count + 1);
  }

  function decreate () {
    setCount(count - 1)
  }

  return (<div>
    <button onClick={increate}>+</button>
    <span>{count}</span>
    <button onClick={decreate}>-</button>
  </div>)


}
export default Counter;