import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    Button
} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';
import {BsThreeDotsVertical, BsHeartFill} from 'react-icons/bs';
import {IoIosArrowBack} from 'react-icons/io';
import {AiFillPlusCircle, AiFillMinusCircle} from 'react-icons/ai';

import { images, icons, COLORS, FONTS, SIZES } from '../constants';

const title = "Forest Cake";
const subTitle = "with rosemerry, nuts and blueberries";



const ItemDetail =()=>{
    
    var pressedValue = 0;
    const checkValue = (value)=>{
        pressedValue = value;
    }
    
    const textValue = (index)=>{
        console.log(index);
        switch(index){
            case 1:
            return(
                <Text style={{color:COLORS.white}}>
                    It is not only packed with the blueberries on the inside, but it is also filled with homemade blueberry juice inside. So you kinda get the marriage between two flavors.
                </Text>
            );
            case 2:
            return(
                <Text style={{color:COLORS.white}}>
                    Blueberries, Rosemerry, Baked eggs and nuts.
                </Text>
            ); 
            case 3:
            return(
                <Text style={{color:COLORS.white}}>
                    Nothing yet.
                </Text>
            ); 
            default:
            return(
                <Text style={{color:COLORS.white}}>
                    It is not only packed with the blueberries on the inside, but it is also filled with homemade blueberry juice inside. So you kinda get the marriage between two flavors.
                </Text>
            );    
        }
    }
    return(
        <View
            style={{
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
                <View
                 style={{
                    top:0,
                    position:"absolute",
                    flex:1,
                    flexDirection:"row",
                    backgroundColor: "rgba(0,0,0,0.5)",
                    height: 55,
                    width:"100%",
                    justifyContent:"flex-start",
                    borderBottomEndRadius:25,
                    borderBottomStartRadius:25
                 }}
                >
                    <IoIosArrowBack
                        style={{
                            color:"#fff",
                            marginTop:15,
                            width:20,
                            height:20,
                            left:20,
                            position:"absolute"
                        }}
                    />
                    <BsThreeDotsVertical
                        style={{
                            color:"#fff",
                            marginTop:15,
                            width:20,
                            height:20,
                            right:20,
                            position:"absolute"
                        }}
                    />
                </View>
                <View
                style={{
                    paddingTop:0,
                    position:"absolute",
                    top:70
                }}
                >
                    <Text 
                        style={{
                            ...FONTS.h1,
                            color: COLORS.white,
                            textAlign:'center'
                        }}
                    >
                        {title}
                    </Text>
                </View>
                <View
                    style={styles.container}
                >
                <Image
                        source={images.plate2}
                        style={styles.landingImage}
                    />    
                </View>
                <View
                    style={{
                        flexDirection:"row",
                        height: 20,
                        width:"100%",
                        justifyContent:"flex-end",
                        right:60,
                        top:90,
                        marginTop:0
                     }}
                >
                    <BsHeartFill
                        style={{
                            color:"#fff",
                            height:20,
                            width:20
                        }}
                    />
                </View>
                
               
                <View
                style={{
                    paddingTop:10,
                    marginTop:15,
                    top: 80
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
                <View
                    style={{
                        flexDirection:"row",
                        justifyContent:"center",
                        marginTop:10,
                        top: 100,
                    }}
                >
                    <TouchableOpacity 
                        style={{margin:10}} 
                        onPress={()=>{checkValue(1);}}>
                        <Text style={styles.buttonPressed}>Description</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{margin:10}} 
                        onPress={()=>{checkValue(2);}}>
                        <Text style={styles.buttonNormal}>Ingredients</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{margin:10}} 
                        onPress={()=>{checkValue(3);}}>
                        <Text style={styles.buttonNormal}>Reviews</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width:"80%", height:100, alignItems:"center", top:100}}>
                    {textValue(pressedValue)}
                </View>
                <View 
                    style={{
                        top:90,
                        flexDirection:"row",
                        justifyContent:'center',
                    }}>
                    <AiFillPlusCircle  style={{
                            color:COLORS.lightGray,
                            height:30,
                            width:30
                        }}/>
                    <Text style={{
                        color:"#fff",
                        paddingTop:2,
                        marginLeft:10,
                        marginRight:10,
                        ...FONTS.body3
                    }}>
                        1
                    </Text>
                    <AiFillMinusCircle  style={{
                            color:COLORS.lightGray,
                            height:30,
                            width:30
                        }}/>
                </View>
                <View
                style={{
                    top:100,
                    flexDirection:"row",
                    justifyContent:'center',
                }}
                >
                    <Text
                        style={{color:"#fff",marginTop:4, ...FONTS.body3}}
                    >$</Text>
                    <Text
                        style={{color:"#fff", ...FONTS.h2}}
                    >
                        13.24
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection:"row",
                        justifyContent:"center",
                        marginTop:10,
                        top: 120,
                    }}
                >
                    <TouchableOpacity 
                        style={{margin:10}} 
                        onPress={()=>{checkValue(3);}}>
                        <Text style={styles.buttonPressed}>Add Cart</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 0,
      alignItems:'center',
      position:"absolute",
      top:120,
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
    buttonPressed:{
        color:COLORS.lightGray,
        borderColor: COLORS.lightGray, 
        borderRadius:15,
        borderWidth: 0.5,
        padding:5, 
        width:120, 
        textAlign:"center"
    },
    buttonNormal:{
        color:COLORS.lightGray,
        borderColor: COLORS.lightGray, 
        padding:5, width:120, 
        textAlign:"center"
    },
  });



export default ItemDetail;