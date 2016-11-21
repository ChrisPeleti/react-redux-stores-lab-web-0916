export default function createStore(reducer){
// your code here!
  let state
  let listeners = []
  function getState() {
    return state
  }

  function subscribe(listener) {
    listeners.push(listener)
  }

  function dispatch(action) {
    state = reducer(state, action)
    listeners.forEach( listener => listener() )
  }

  dispatch({})

  return {
    getState: getState,
     dispatch: dispatch,
     subscribe: subscribe
   }
}
