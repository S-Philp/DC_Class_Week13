import React, { useState } from 'react';
import { connect } from 'react-redux';
import './AddSubtractCounter.css';


function AddSubtractCounter(props) {

    const [number, setNumber] = useState(0)

    const handleAddClick = () => {
        props.onAdd(number)
    }

    const handleSubtractClick = () => {
        props.onSubtract(number)
    }

    const handleNumberChange = (e) => {
        let value = parseInt(e.target.value)
        setNumber(value)
    }

    return(
        <div className="box2">
            <h2>AddSubtractCounter</h2>
            <input className="textBox" type="text" onChange = {handleNumberChange} />
            <div>
                <button className="IncrementButton" onClick = {handleAddClick}>Add</button>
                <button className="DecrementButton" onClick = {handleSubtractClick}>Subtract</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({type: 'INCREMENT'}),
        onAdd: (num) => dispatch({type: 'ADD', value: num}),
        onSubtract: (num) => dispatch({type: 'SUBTRACT', value: num}),
    }
}



export default connect(null, mapDispatchToProps)(AddSubtractCounter)