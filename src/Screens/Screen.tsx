import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import { RootStackParamList } from '../../App';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './ScreenStyles'; 

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;
type Props = {
    route: ProfileScreenRouteProp;
    navigation: ProfileScreenNavigationProp;
};

const NewComponent : FunctionComponent<Props> = ({route, navigation}) => {

    return (
        <View style={styles.container} >
            
        </View>
    );
};

export default NewComponent;