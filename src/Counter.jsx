import {useState} from 'react';

const Counter = (props) => {
  const [count, setCount] = useState(0)

  function increase () {
    setCount(count + 1);
    props.setSum(props.sum+1);
  }

  function decrease () {
    setCount(count - 1);
    props.setSum(props.sum-1);
  }

  return (<div>
    <button onClick={increase}>+</button>
    <span>{count}</span>
    <button onClick={decrease}>-</button>
  </div>)


}
export default Counter;