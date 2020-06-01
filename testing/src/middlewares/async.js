// export default function({dispatch}) {
//     return function(next) {
//         return function(action){

//         }
//     }
// }
export default ({ dispatch }) => next => action => {
  // Check if action has a promise on payload prop
  if (!action.payload || !action.payload.then) {
    return next(action);
  }
  //   Wait for promise to resolve
  //   Then create a new action with that response data and dispatch
  action.payload.then(function(response) {
    const newAction = {
      ...action,
      payload: response
    };
    dispatch(newAction);
  });
};
