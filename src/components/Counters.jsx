import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';
import Counter from './Counter';

const Counters = () => {
  const { counters, inc, dec, onDelete, reset } = useContext(CounterContext);
  return (
    <div className='container'>
      {counters.length > 0 ? (
        <button onClick={reset} className='btn btn-info mb-4'>
          Reset
        </button>
      ) : null}

      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          inc={inc}
          dec={dec}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default Counters;
