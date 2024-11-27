import CounterGroupGenerator from './CounterGroupGenerator';
import Counter from './Counter';
import {useState} from 'react';

const MultipleCounter = () => {
  const [size, setSize] = useState(0)

  return (<div>
    <CounterGroupGenerator setSize={setSize} currentSize={size}></CounterGroupGenerator>
    {Array.from({length: size}, (_, i) => {
      return <Counter></Counter>
    })}
  </div>)
}
export default MultipleCounter