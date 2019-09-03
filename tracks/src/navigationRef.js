import { NavigationActions } from 'react-navigation';

let navigator;

export const setNavigator = ( nav ) => {
    navigator = nav;
};

export const navigate = ( routeName, params ) => {
    // allow an external function to trigger a navigation event
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    );
};