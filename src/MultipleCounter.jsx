import CounterGroupGenerator from './CounterGroupGenerator';
import Counter from './Counter';
import {useState} from 'react';

const MultipleCounter = () => {
  const [size, setSize] = useState(0);
  const [sum, setSum] = useState(0);

  return (<div>
    <CounterGroupGenerator setSize={setSize} currentSize={size}></CounterGroupGenerator>
    <div>sum : {sum}</div>
    {Array.from({length: size}, (_, i) => {
      return <Counter sum={sum} setSum={setSum}></Counter>
    })}
  </div>)
}
export default MultipleCounter