import React, { Component } from 'react';
import {
    View,
    Text,
    LayoutAnimation,
    TouchableWithoutFeedback,
    UIManager
} from 'react-native';
import { connect } from 'react-redux';

import { ListItem, Icon } from 'react-native-elements';



class MedicineList extends Component {

    render() {
        const { medi } = this.props;
        const { title, image, effect } = this.props.medi;
        return (
            <ListItem
              key={medi.title}
              roundAvatar
              avatar={{ uri: medi.image }}
              avatarStyle={{
                width:100, height:100,
                }}
              title={medi.title}
              titleStyle={{
                fontSize:18,
                paddingBottom:5
                }}
              subtitle={medi.effect}
              subtitleStyle={{fontSize:12}}
              onPress={() => medi.navigation.navigate('MedicineDetails', { ...medi })}
            />
        );
    }
}


export default MedicineList;
