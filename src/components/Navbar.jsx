import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

const Navbar = () => {
  const { total } = useContext(CounterContext);

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <h4 className='navbar-brand'>
          Navbar
          <span className='ml-2 badge badge-primary'>{total()}</span>
        </h4>
      </div>
    </nav>
  );
};

export default Navbar;
