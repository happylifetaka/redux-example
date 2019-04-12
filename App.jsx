import React from 'react';
import { connect } from 'react-redux';

function App({ count, onIncrementClick,onDecrementClick }) {

    return (
        <div>
            <span>{count}</span>
            <button onClick={() => { onIncrementClick(); }}>
                inc
            </button>
            <button onClick={() => { onDecrementClick(); }}>
                dec
            </button>
        </div>
    );
}

export default connect(
    state => {
        return { count: state.count };
    },
    dispatch => {
        return {
            onIncrementClick: () => {
                dispatch({ type: 'INCREMENT' });
            },
            onDecrementClick: () => {
                dispatch({ type: 'DECREMENT' });
            }
        };
    }
)(App);
