const redux = require('redux');

const counterReducer = (state={counter: 0},action) => {
    return {
        counter: state.counter + 1
    }
};

const store = redux.createStore(counterReducer);



const counteSubsriber = () => {
    const latestStore = store.getState();
    console.log(latestStore)
}

store.subscribe(counteSubsriber);

store.dispatch({type:"add"});
store.dispatch({type:"add"});
store.dispatch({type:"add"})
store.dispatch({type:"add"})
store.dispatch({type:"add"})
store.dispatch({type:"add"})






