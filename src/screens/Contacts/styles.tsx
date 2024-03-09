import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainCont:{flex:1,margin:2},
  favCont:{margin:2,padding:2,paddingVertical:5,borderBottomColor:'blue',borderBottomWidth:0.2},
  txt:{fontWeight:'bold',fontSize:13,color:'black',alignSelf:'center'},
  favItemCont:{flex:1,justifyContent:'center',alignItems:'center',marginHorizontal:10},
  thumpNailCont:{borderRadius:30,width:60,height:60,borderWidth:0.6,borderColor:'red',backgroundColor:'skyblue',justifyContent:'center',alignItems:'center',},
  thumpNailImg:{overflow:'hidden',width:'100%',height:'100%',borderRadius:30},
  
});

export default styles;
