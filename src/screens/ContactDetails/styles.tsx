import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainCont:{flex:1,margin:2},
  favCont:{margin:2,padding:2,paddingVertical:5,borderBottomColor:'blue',borderBottomWidth:0.2},
  txt:{fontWeight:'bold',fontSize:20,color:'black',alignSelf:'center'},
  favItemCont:{flex:1,justifyContent:'center',alignItems:'center',marginHorizontal:10},
  thumpNailCont:{borderRadius:30,width:120,height:120,borderWidth:0.6,borderColor:'red',backgroundColor:'skyblue',justifyContent:'center',alignItems:'center',},
  thumpNailImg:{overflow:'hidden',width:'100%',height:'100%',borderRadius:30},
  divider:{borderWidth:0.5,borderColor:'red',width:"100%",marginVertical:10},
  phonetxt:{fontWeight:'bold',fontSize:15,color:'purple',},
  element:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'80%'},
  innertxt:{color:'white',fontSize:25}
});

export default styles;
