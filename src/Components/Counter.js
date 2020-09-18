import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { check, decrement, increment } from '../actions';

function Counter () {

    const counter = useSelector(state => state.counter);
    const isTrue = useSelector(state => state.logged);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(check(counter));
    }, [counter])

    return (
        <div>
            <h1>Counter</h1>
            <h2>Readed Book</h2>
            <h3>Enter how many books have you read today?</h3>
            <input id='input' type="number"/>
                <h3>{counter}</h3>
                <button onClick={() => dispatch(increment(Number(document.getElementById('input').value)))}>Add</button>
                {isTrue ? <button onClick={() => {
                    dispatch(decrement());
                }}>Decrement</button> : ""}
        </div>
    )
}

export default Counter;