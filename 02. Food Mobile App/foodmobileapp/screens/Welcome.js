import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';


import { images, icons, COLORS, FONTS, SIZES } from '../constants';

const title = "MODERN";
const subTitle = "the art of food";

const Welcome =({navigation})=>{
    return(
        <View
            style={{
                flex: 1,
                backgroundColor:"#000",
                height: "100%",
            }}
        >
            <LinearGradient 
                colors={[COLORS.lightGray,COLORS.primary, COLORS.secondary]}
                start={[1, 0]}
                end ={[0,1]}
                style={styles.linearGradient}
            >
                <TouchableOpacity onPress={()=>{navigation.push("ItemDetail")}}>
                    <View
                        style={styles.container}
                    >
                    <Image
                            source={images.plate1}
                            style={styles.landingImage}

                        />    
                    </View>  
                </TouchableOpacity>  
                <View
                    style={{
                        paddingTop:40
                    }}
                >
                    <Text 
                        style={{
                            ...FONTS.largeTitle,
                            color: COLORS.white,
                            textAlign:'center'
                        }}
                    >
                        {title}
                    </Text>
                </View>
                <View
                    style={{
                        paddingTop:10
                    }}
                >
                    <Text 
                        style={{
                            ...FONTS.p,
                            color: COLORS.white,
                            textAlign:'center'
                        }}
                    >
                        {subTitle}
                    </Text>
                </View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 10,
      alignItems:'center'
    },
    landingImage: {
      width: 200,
      height: 200,
      resizeMode: 'cover',
    },
    linearGradient: {
        width: '100%',
        height: '100%',
        opacity: 0.95,
        justifyContent: 'center',
        alignItems: 'center'
      },
  });



export default Welcome;