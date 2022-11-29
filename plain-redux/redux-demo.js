const redux = require('redux');

const counterReducer = (state={counter: 0},action) => {

    if(action.type === "increment"){
        return {
            counter: state.counter + 1
        }
    }
    else if (action.type === "decrement"){
        return {
            counter: state.counter - 1
        }
    }else{
        return state;
    }
    
};

const store = redux.createStore(counterReducer);



const counteSubsriber = () => {
    const latestStore = store.getState();
    console.log(latestStore)
}

store.subscribe(counteSubsriber);

store.dispatch({type:"increment"});
store.dispatch({type:"increment"});
store.dispatch({type:"decrement"});






