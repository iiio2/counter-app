const Counter = ({ counter, inc, dec, onDelete }) => {
  return (
    <div>
      <span className='badge bg-warning  mr-3'>{counter.value}</span>
      <button onClick={() => inc(counter)} className='btn btn-danger mr-3 my-2'>
        +
      </button>
      <button onClick={() => dec(counter)} className='btn btn-dark mr-3'>
        -
      </button>
      <button onClick={() => onDelete(counter)} className='btn btn-light'>
        Delete
      </button>
    </div>
  );
};

export default Counter;
