import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../../constants/colors';
import GENERALS from '../../constants/generals';

function Localisation(){

    
    return (
        <View style={{marginEnd: 10}}>
            <TouchableOpacity style={styles.locationContainer}>
                <Icon name='map-marker' size={20} color={COLORS.black}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    locationContainer: { width: GENERALS.width - 500, padding: 12, borderWidth: 2, borderColor: COLORS.primary, backgroundColor: COLORS.primary, elevation: 100, shadowColor: '#000', borderRadius: 10},
})
export default Localisation;