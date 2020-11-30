import React from 'react';
import { connect } from 'react-redux';
// import styles from 'css/IncrementDecrementCounter.css';
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
            <h1>IncrementDecrementCounter</h1>
            <h1>{props.ctr}</h1>
            <div >
                <button className="IncrementButton" onClick={handleIncrementClick}>INCREMENT</button>
                <button className="DecrementButton" onClick={handleDecrementClick}>DECREMENT</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({type: 'INCREMENT'}),
        onDecrement: () => dispatch ({type: 'DECREMENT'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncrementDecrementCounter)