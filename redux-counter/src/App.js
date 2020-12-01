import AddSubtractCounter from './components/AddSubtractCounter';
import './App.css';
import IncrementDecrementCounter from './components/IncrementDecrementCounter'
import DisplayCounter from './components/DisplayCounter';
import { connect } from 'react-redux';


function App(props) {
  return (
    <div className='App'>
      <h1 className='appHeading'>App</h1>
      <div className='App2'>
        <IncrementDecrementCounter />
        <h2>{props.ctr}</h2>
        <AddSubtractCounter />
      </div>
      <DisplayCounter />
    </div>

  );
}

const mapStateToProps = (state) => {
  return {
      ctr: state.counter
  }
}

export default connect(mapStateToProps)(App)