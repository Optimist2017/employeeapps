import React from 'react';
import { StyleSheet,Text,View,Image,FlatList} from 'react-native';
import {Card,FAB} from 'react-native-paper';


const Home=({navigation})=>{
    const data=[
        {id:"1",name:"musah",email:"abc@abc.com",salary:"5 lpa",phone:"123",position:"Web Developer",picture:"https://img.icons8.com/clouds/100/000000/user.png"},
        {id:"2",name:"seidu",email:"seidu@abc.com",salary:"6 lpa",phone:"456",position:"App Developer",picture:"https://img.icons8.com/clouds/100/000000/user.png"},
        {id:"3",name:"Keita",email:"keita@abc.com",salary:"7 lpa",phone:"789",position:"AI Developer",picture:"https://img.icons8.com/clouds/100/000000/user.png"},
        {id:"4",name:"muhammad",email:"muhammad@abc.com",salary:"5 lpa",phone:"147",position:"React Developer",picture:"https://img.icons8.com/clouds/100/000000/user.png"},
        
      
    ]
    const renderList= ((item)=>{
        return(
            <Card style={styles.mycard} 
                onPress={()=>navigation.navigate("Profile",{item})}
            >
              <View style={{flexDirection:"row"}}>
                <Image
                   style={{width:60,height:60,borderRadius:50/2}}
                   source={{uri:"https://img.icons8.com/clouds/100/000000/user.png"}}
                   />

                   <View style={{marginLeft:10}}>
                     <Text style={styles.text}>{item.name}</Text>
                     <Text style={styles.text}>{item.position}</Text>
                   </View>
                   
              </View>
            </Card>
        )
    })

    return(
        <View style={{flex:1}}> 
            <FlatList
              data={data}
              renderItem={({item})=>{
                  return renderList(item)
              }}
              keyExtractor={item=>`${item.id}`}
            />

                <FAB
                    style={styles.fab}
                    small="false"
                    icon="plus"
                    onPress={()=>navigation.navigate("Create")}

                />      

        </View>
    )
}

const styles = StyleSheet.create({
    
    mycard:{
        margin:5,
    
    },
    cardv:{
        flexDirection:"row",
        padding:6

                
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },
   
    text:{
        fontSize:20,
        marginLeft:10
    }


})

export default Home;