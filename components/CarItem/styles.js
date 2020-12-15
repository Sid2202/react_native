import { StyleSheet, Dimensions } from 'react-native';


const styles = StyleSheet.create({

    car_container: {

        width: '100%',
        height: Dimensions.get('screen').height,
        
      },
    
      titles: {
    
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
    
      },
    
      title: {
    
        fontSize: 40,
        color: '#dfe6e9',
        fontWeight: '100',
    
      },
    
      subtitle: {
    
        fontSize: 16,
        color: '#dfe6e9',
    
      },
    
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        // contain
        position: 'absolute',
      },

      buttonContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
      },

      subtitleCTA: {
        textDecorationLine: 'underline',
        
      }
    
});

export default styles;