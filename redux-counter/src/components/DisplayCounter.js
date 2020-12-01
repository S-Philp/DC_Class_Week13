import React from 'react';
import { connect } from 'react-redux';
import './DisplayCounter.css';


function DisplayCounter(props) {
    return (
        <div className="box3">
            <h2>DisplayCounter</h2>
            <h2>{props.ctr}</h2>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter
    }
}

export default connect(mapStateToProps)(DisplayCounter)
