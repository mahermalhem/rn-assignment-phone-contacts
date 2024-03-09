import React, { memo, type FC, useState } from "react";
import type { ISalonRenderItemProps } from "./salons.types";
import SalonDetailListCard from "../../../components/SalonDetailListCard";
import { Button, Image, Linking, Text, TouchableOpacity, View } from "react-native";
import { t } from "i18next";
import { IContactCard } from "./types";
import Icon from 'react-native-vector-icons/FontAwesome';

const ContactCard: FC<IContactCard> = ({item, onFavPress, onMorePress }:{item: IContactCard, onFavPress: void, onMorePress:void}) => {
  
  const [isFav,setIsFav] = useState(item?.isStarred)
  
  const onPressFav = ()=>{
    setIsFav(!isFav)
    onFavPress(item)
  }

  const onElementPress=(phone)=>{
    Linking.openURL(`tel:${phone}`)
  }

  return (
    <View style={styles.Cont}>
      <TouchableOpacity onPress={()=>onElementPress(item?.phoneNumbers[0]?.number)} style={styles.nameCont}>
        <View style={styles.thumpNailCont}>
          {item?.hasThumbnail && item?.thumbnailPath
            ? <Image resizeMode='contain' style={styles.thumpNailImg} source={{uri:item?.thumbnailPath}}/>
            : <Text style={styles.innertxt}>{item?.displayName[0]}</Text>
          }
        </View>
        <View style={{justifyContent:'center',alignItems:'flex-start',marginHorizontal:5}}>
          <Text style={styles.txt}>{item?.displayName}</Text>
          <Text style={styles.phonetxt}>{item?.phoneNumbers[0]?.number}</Text>
        </View>
      </TouchableOpacity>
      <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'flex-end',marginHorizontal:5}}>
       <TouchableOpacity onPress={onPressFav} style={{marginHorizontal:4}}>
        {isFav
          ?  <Icon name="star" size={25} color="green"/> 
          :  <Icon name="star-o" size={25} color="green"/> 
        }
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>onMorePress(item)} style={{marginHorizontal:4}}>
        <Icon name="th-list" size={22} color="purple" /> 
      </TouchableOpacity>        
      </View>
    </View>
  );
};

export default memo(ContactCard);

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Cont:{flex:1,
    flexDirection:'row',
    paddingVertical:10,
    paddingHorizontal:5,
    margin:1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.24,
    elevation: 1.5,
  },
  mainCont:{flex:1,margin:2},
  favCont:{margin:2,padding:2,paddingVertical:5,borderBottomColor:'blue',borderBottomWidth:0.2},
  txt:{fontWeight:'bold',fontSize:15,color:'black',},
  phonetxt:{fontWeight:'bold',fontSize:13,color:'gray',},
  innertxt:{fontWeight:'bold',fontSize:13,color:'white',alignSelf:'center'},
  favItemCont:{flex:1,justifyContent:'center',alignItems:'center',marginHorizontal:10},
  thumpNailCont:{borderRadius:30,width:60,height:60,borderWidth:0.6,borderColor:'red',backgroundColor:'purple',justifyContent:'center',alignItems:'center',},
  thumpNailImg:{overflow:'hidden',width:'100%',height:'100%',borderRadius:30},
  nameCont:{flex:1.5,flexDirection:'row'},
});
