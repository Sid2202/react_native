import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styles from './styles';

const CarItem = (props) => {
    return (
        <View  style={styles.car_container}>

            <ImageBackground 
            source={require('../../assets/Images/tree.jpg')}
            style={styles.image} />

                <View style={styles.titles}>

                    <Text style={styles.title}>Model S</Text>
                    <Text style={styles.subtitle}>Starting at 2,30,000</Text>

                </View>
  
        </View>
    )
}

export default CarItem;





