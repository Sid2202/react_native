import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styles from './styles';
import StyledButton from '../StyledButton';

const CarItem = (props) => {

    const { name, tagline, image, taglineCTA } = props.car;


    return (
        <View  style={styles.car_container}>

            <ImageBackground 
                source={image}
                style={styles.image} 
            />

                <View style={styles.titles}>

                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subtitle}>
                        {tagline}{" "}
                        <Text style={styles.subtitleCTA}>
                            {taglineCTA}
                        </Text>
                    </Text>

                </View>

            <View style={styles.buttonContainer}>

                <StyledButton 
                    type="primary"
                    content={"Custom order"} 
                    onPress={() =>{
                    console.warn({data : "Custom order pressed"});
                    }}
                />

                <StyledButton 
                    type="secondary"
                    content={"blabla"} 
                    onPress={() =>{
                    console.warn({data : "blabla pressed"});
                    }}
                />

            </View>
            
  
        </View>
    )
}

export default CarItem;





