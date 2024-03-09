
import React, { useCallback, useEffect, useState } from 'react';
import { Image, Linking, Platform, SafeAreaView, Text, TouchableOpacity, View, VirtualizedList} from 'react-native';
import Contacts from 'react-native-contacts';
import { checkContactsPermission } from '../../Helpers/permissions';
import ContactCard from './Helper/ContactCard';
import { IContactCard } from './Helper/types';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { setFavList } from '../../redux/reducer/fav/actions';
import { FlatList } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';

function ContactsScreen(props) {

  const [contacts, setContacs]=useState();
  const favlist = useSelector(state=>state.fav.favList)
  
  const dispatch=useDispatch();

  const getItem = (_data: IContactCard, index: number): IContactCard => _data[index];
  const getItemCount = (_data: IContactCard) => contacts?.length;

  const onFavPress = (item)=>{
    let arr=[...favlist];
    const itemFound=arr.find((element)=>element.rawContactId === item.rawContactId)
    if(!itemFound){
      arr.push(item)
      console.log("item need to be added")
    }else{
      console.log("item shell be removed from cashed")
      arr = arr.filter((element)=>element.rawContactId !== item.rawContactId)
    }
    dispatch(setFavList(arr))
  }

  const renderItem = ({ item, index }: { item: IContactCard; index: number }) => {
    return <ContactCard key={index} item={item} onFavPress={onFavPress} />
  };

  const onFavIconPress=(phone)=>{
    Linking.openURL(`tel:${phone}`)
  }

  const renderFavItem = ({ item, index }: { item: IContactCard; index: number }) => {
    return (
      <TouchableOpacity onPress={()=>onFavIconPress(item.phoneNumbers[0].number)} style={styles.favItemCont}>
          <View style={styles.thumpNailCont}>
            {item?.hasThumbnail && item?.thumbnailPath
              ? <Image resizeMode='contain' style={styles.thumpNailImg} source={{uri:item.thumbnailPath}}/>
              : <Text style={styles.txt}>{item?.displayName[0]}</Text>
            }
          </View>
          <Text style={styles.txt}>{item?.displayName.slice(0,10)}</Text>
      </TouchableOpacity>
  )};
  
  const checkCachedFavList = (sortedContacts)=>{  
      //get faves from native
      let favsFromNartive = sortedContacts.filter((item,index)=>item.isStarred === true)
      
      let arr=[...favlist];
      favsFromNartive.forEach(item => {
        const itemFound=arr.find((element)=>element.rawContactId === item.rawContactId)
        if(!itemFound){
          arr.push(item)
          console.log("item need to be added")
        }
      });
      dispatch(setFavList(arr))
  }

  const checkContactsIfHasFavFromCache = (sortedContacts)=>{  
    
    // Replace objects in the mainArray with objects from subArray
    const updatedArray = sortedContacts.map((mainItem) => {
      const matchingSubItem = favlist.find((subItem) => subItem.rawContactId === mainItem.rawContactId);
      // If a matching subItem is found, replace the mainItem, otherwise keep the mainItem
      return matchingSubItem ? { ...mainItem, isStarred:true } : mainItem;
    });
    setContacs(updatedArray)
  }

  useFocusEffect(useCallback(()=>{
    if(checkContactsPermission()){
      Contacts.getAll().then(contacts => {
        // setContacs(contacts)
        //sort numbers alphabetically
        const sortedContacts = [...contacts].sort((a, b) => a.displayName.localeCompare(b.displayName));
        //merge favs from native device with merge from the app 
        checkCachedFavList(sortedContacts)
        //get the contacts and check weather it's fav or not
        checkContactsIfHasFavFromCache(sortedContacts)
      }).catch((err)=>{
        console.log("err",err)
      })
    }
  },[]))


 return (
   <SafeAreaView style={styles.mainCont}>
      {!!favlist && !!favlist?.length && (
        <View style={styles.favCont}>
          <FlatList
            data={favlist}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderFavItem}
          />
        </View>
      )}
      {!!contacts && !!contacts?.length && (
        <VirtualizedList
          data={contacts}
          style={styles.mainCont}
          renderItem={renderItem}        
          keyExtractor={(item,index)=>`${index}`}
          getItemCount={getItemCount}
          getItem={getItem}
        />
      )}
      {contacts?.length === 0 && (
        <Text>No Contacts</Text>
      )}
   </SafeAreaView>
 )
}

export default ContactsScreen;
