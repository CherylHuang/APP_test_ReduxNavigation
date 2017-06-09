import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { View, Text } from 'react-native';

const styles = {
  formStyle: {
    marginTop: 25
  },
  textNew:{
    color:'white',
    textDecorationLine:'underline',
    alignSelf:"center",
    fontSize:15,
    marginTop:10
  }
};


const AuthButton = ({ NewUserScreen }) => {
    const { formStyle, textNew } = styles;
    return(
        <View style={formStyle}>
           <Text
           style={textNew}
           onPress={NewUserScreen}>
                新使用者?
           </Text>
        </View>
    );
};


// const mapStateToProps = state => ({
//   isLoggedIn: state.auth.isLoggedIn,
// });

const mapDispatchToProps = dispatch => ({
  // logout: () => dispatch({ type: 'Logout' }),
  NewUserScreen: () =>
    dispatch(NavigationActions.navigate({ routeName: 'NewUser' })),
});

export default connect(null, mapDispatchToProps)(AuthButton);