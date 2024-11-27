import {useState} from 'react';

const CounterGroupGenerator = (props) => {
  const [size, setSize] = useState(0)

  function handleSetSize (event) {
    if (event.target.value < 0) {
      setSize(0);
    }
    else if (event.target.value > 20) {
      setSize(20);
    }
    else {
      setSize(event.target.value)
    }
  }

  function handleResetSize () {
    if (size !== props.currentSize) {
      props.setSize(size)
    }
  }

  return (<div>
    <span>Size:</span>
    <input type={'number'} min={0} max={20} onChange={handleSetSize} value={size}></input>
    <button onClick={handleResetSize}>reset</button>
  </div>)
}
export default CounterGroupGenerator