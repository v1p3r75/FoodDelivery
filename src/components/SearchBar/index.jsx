import React from 'react';
import { Dimensions, StyleSheet, TextInput, View } from 'react-native';
import COLORS from '../../constants/colors';
import GENERALS from '../../constants/generals';

function SearchBar(){

    
    return (
        <View>
            <TextInput placeholder='Search For meals of area' placeholderTextColor={COLORS.black} style={styles.searchbar} />
        </View>
    )
}

const styles = StyleSheet.create({
    searchbar: { fontFamily: 'Poppins-Regular',width: GENERALS.width - 100,color: COLORS.black, borderRadius: 10, borderWidth: 2, padding: 10, borderColor: COLORS.primary, backgroundColor: COLORS.primary },

})
export default SearchBar;