import AddSubtractCounter from './components/AddSubtractCounter';
import './App.css';
import IncrementDecrementCounter from './components/IncrementDecrementCounter'
import DisplayCounter from './components/DisplayCounter';

function App() {
  return (
    <div className='App'>
      <h1 className='appHeading'>App</h1>
      <div className='App2'>
        <IncrementDecrementCounter />
        <AddSubtractCounter />
      </div>
      <DisplayCounter />
    </div>

  );
}

export default App;
