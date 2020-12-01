import React from 'react';
import { connect } from 'react-redux';
import './IncrementDecrementCounter.css';


function IncrementDecrementCounter(props) {

    const handleIncrementClick = () => {
        props.onIncrement()
    }

    const handleDecrementClick = () => {
        props.onDecrement()
    }

    return (
        <div className="box1">
            <h2>IncrementDecrementCounter</h2>
            <div >
                <button className="IncrementButton" onClick={handleIncrementClick}>INCREMENT</button>
                <button className="DecrementButton" onClick={handleDecrementClick}>DECREMENT</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({type: 'INCREMENT'}),
        onDecrement: () => dispatch ({type: 'DECREMENT'})
    }
}

export default connect(null, mapDispatchToProps)(IncrementDecrementCounter)