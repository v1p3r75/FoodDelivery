import React from 'react';
import { Image, StyleSheet,Text, View } from 'react-native';
import COLORS from '../../constants/colors';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Item = ({info}) => {
    return (
        <>
            <TouchableOpacity style={{width: 100, height: 100, marginEnd: 10}}>
                <Image width={100} height={50} source={require("../../assets/images/pizza.png")} />
                <Text style={styles.category}>{info.name}</Text>
            </TouchableOpacity>
        </>
    )
}
function PopularItem(){

    const data = [
        {imgUrl : "../../assets/images/pizza.png", name: "Pizza" },
        {imgUrl : "", name: "Burgers" },
        {imgUrl : "", name: "Steak" },{imgUrl : "", name: "Pizza II" }, 
    ]
    return (
        <View style={{borderBottomWidth: 2, borderColor: COLORS.silver}}>
            <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                <Text style={{...styles.text, fontFamily: "Poppins-Bold"}}>Popular Item</Text>
                <TouchableOpacity style={{display: "flex", flexDirection: "row"}}>
                    <Text style={styles.text}>&nbsp;View all</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true}>
                {data.map((category) => {
                    return <Item key={category.name} info={category} />
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    category: {fontFamily: "Poppins-Bold",color: COLORS.black,textAlign: "center" },
    text: {fontFamily: "Poppins-Regular", color: COLORS.black}

})
export default PopularItem;