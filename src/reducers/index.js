// import { combineReducers } from 'redux';
// import LibraryReducer from './LibraryReducer';

// export default combineReducers({
//    libraries: LibraryReducer,
// });

import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
//
import MedicineData from './json/medicine.json';
import { AppNavigator } from '../Router';

// Start with two routes: The Main screen, with the Login screen on top.
const loginAction = AppNavigator.router.getActionForPathAndParams('Login');
const loginNavState = AppNavigator.router.getStateForAction(loginAction);
// const newuserAction = AppNavigator.router.getActionForPathAndParams('NewUser');
const initialNavState = AppNavigator.router.getStateForAction(
  loginAction,
  loginNavState
);

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'Login':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        // NavigationActions.navigate({ routeName: 'Tab' }),
        state
      );
      break;
    case 'Logout':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

const initialAuthState = { isLoggedIn: false };

function auth(state = initialAuthState, action) {
  switch (action.type) {
    case 'Login':
      return { ...state, isLoggedIn: true };
    case 'Logout':
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}

const AppReducer = combineReducers({
  nav,
  auth,
  libraries: MedicineData
});

export default AppReducer;