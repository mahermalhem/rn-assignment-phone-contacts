
import React from 'react';
import { FlatList, Image, Linking, Text, TouchableOpacity, View, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { setFavList } from '../../redux/reducer/fav/actions';

function ContactDetails({ navigation, route }) {
  const {item}=route.params;
  const favlist = useSelector(state=>state.fav.favList)
  const dispatch=useDispatch();

  const call=(phone)=>{
    Linking.openURL(`tel:${phone}`)
  }

  const mailTo=(email)=>{
    Linking.openURL(
      `mailto:${email}?subject=From Maher App&body=This is custom mail`,
    )
  }
  
  return (
    <View style={{margin:5,flex:1}}>
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <View style={styles.thumpNailCont}>
          {item?.hasThumbnail && item?.thumbnailPath
            ? <Image resizeMode='contain' style={styles.thumpNailImg} source={{uri:item.thumbnailPath}}/>
            : <Text style={styles.innertxt}>{item?.displayName[0]}</Text>
          }
        </View>
        <Text style={styles.txt}>{item?.displayName}</Text>
        <View style={styles.divider}/>
        {!!item.phoneNumbers && item.phoneNumbers.map(phone=>{
          return ( 
          <TouchableOpacity onPress={()=>call(phone.number)} key={phone.id} style={styles.element}>
            <Text key={phone.id} style={styles.phonetxt}>{phone.number}</Text>
            <Icon name="phone" size={25} color="green"/> 
          </TouchableOpacity>
          )
        })}

        {!!item.emailAddresses && item.emailAddresses.map(email=>{
          return ( 
          <TouchableOpacity 
            onPress={()=>mailTo(email.email)} 
            key={email.id} style={styles.element}>

            <Text key={email.id} style={styles.phonetxt}>{email.email}</Text>
            <Icon name="envelope" size={25} color="green"/> 

          </TouchableOpacity>
          )
        })}

        {Object.entries(item).map(([key, val] = item)=>{
          if(!Array.isArray(val)){
            return(
              <View key={key.toString()} style={{flexDirection:'row',width:'50%',justifyContent:'space-between'}}>
                <Text>{key} : </Text>
                <Text>{`${val}`}</Text>
              </View>
            )
          }
        })}

        
        
      </View>
    </View>
  )
}

export default ContactDetails;
