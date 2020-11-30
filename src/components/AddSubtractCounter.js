import React from 'react';
import { connect } from 'react-redux';
import './AddSubtractCounter.css';


function AddSubtractCounter(props) {
    return(
        <div className='box2'>
            <h1>AddSubtractCounter</h1>
            <input className='textBox' type='text'></input>
            <div>
                <button className="IncrementButton" >INCREMENT</button>
                <button className="DecrementButton" >DECREMENT</button>
            </div>
        </div>
    )
}



export default connect()(AddSubtractCounter)