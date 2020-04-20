import React,{useState} from 'react';
import { StyleSheet,Text,View,Modal,Alert} from 'react-native';
import {TextInput,Button} from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const CreateEmployee=()=>{
    const [Name,setName]=useState("")
    const [phone,setPhone]=useState("")
    const [email,setEmail]=useState("")
    const [salary,setSalary]=useState("")
    const [picture,setPicture]=useState("")
    const [modal,setModal]=useState("")

    const pickFromGallary = async()=>{
        const {granted}= await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if(granted){
            let data = await ImagePicker.launchImageLibraryAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                aspect:[1,1],
                quality:0.5
            })
            if(!data.cancelled){
                let newfile={
                    uri:data.uri,
                    type:`test/${data.uri.split(",")[1]}`,
                    name:`test.${data.uri.split(",")[1]}`
                }
                handleUpoad(newfile)}
        }else{
            Alert.alert("Permission Required. Please Try Again")

        }
    }

    const pickFromCamera = async()=>{
        const {granted}= await Permissions.askAsync(Permissions.CAMERA)
        if(granted){
            let data = await ImagePicker.launchCameraAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                aspect:[1,1],
                quality:0.5
            })
            if(!data.cancelled){
                let newfile={
                    uri:data.uri,
                    type:`test/${data.uri.split(",")[1]}`,
                    name:`test.${data.uri.split(",")[1]}`
                }
                handleUpoad(newfile)
        }else{
            Alert.alert("Permission Required. Please Try Again")

        }
    }}

    const handleUpoad=(image)=>{
        const data = new FormData()
        data.append('file',image)
        data.append('upload_preset','employeeapps')
        data.append('cloud_name',"muhammad041")

        fetch("https://api.cloudinary.com/v1_1/muhammad041/image/upload",{
            method:"post",
            body:data
        }).then(res=>res.json()).then(data=>{
            setPicture(data.url)
            setModal(false)
            
        })
    }

    return(
        <View style={styles.root}>
            <TextInput
                label='Name'
                value={Name}
                theme={theme}
                mode="outlined"
                onChangeText={text=>setName(text)}
            />
            <TextInput
                label='Phone'
                value={phone}
                theme={theme}
                keyboardType='number-pad'
                mode="outlined"
                onChangeText={text=>setPhone(text)}
            />
            <TextInput
                label='Email'
                value={email}
                theme={theme}
                mode="outlined"
                onChangeText={text=>setEmail(text)}
            />
            <TextInput
                label='Salary'
                value={salary}
                theme={theme}
                mode="outlined"
                onChangeText={text=>setSalary(text)}
            />
            <Button
                style={styles.inputStyle}
                icon={picture==""?"upload":"check"}
                mode="contained"
                theme={theme}
                onPress={()=> setModal(true)}>
                    Upload Image
            </Button>

            <Button
            style={styles.inputStyle}
            icon="content-save"
            mode="contained"
            theme={theme}
            onPress={()=> console.log("Saved")}>
                save
            </Button>

            <Modal
            animationType="slide"
            transparent={true}
            visible={modal}
            onRequestClose={()=>{
                setModal(false)
            }}
            >
                <View style={styles.modalView}>
                    <View style={styles.modalButtonView}>
                        <Button 
                        icon="camera" 
                        mode="contained" 
                        theme={theme}
                        onPress={()=> pickFromCamera()}>
                            Camera

                        </Button>
                        <Button 
                        icon="image" 
                        mode="contained" 
                        theme={theme}
                        onPress={()=> pickFromGallary()}>
                            Galary

                        </Button>
                    </View>
                    <Button 
                    icon="camera"
                    theme={theme}  
                    onPress={()=> setModal(false)}>
                            Cancel

                        </Button>
                </View>
            
            </Modal>
        </View>
    )

        

}
const theme={
    colors:{
        primary:"#006aff"
        
    }
}   
const styles= StyleSheet.create({
    root:{
        flex:1,
        padding:10

    },
    modalView:{
        position:"absolute",
        bottom:1,
        width:"100%",
        backgroundColor:"white",
        

    },
    modalButtonView:{
        flexDirection:"row",
        justifyContent:"space-around",
        padding:10

    },
    inputStyle:{
        margin:5,
        padding:10
    }
})

export default CreateEmployee