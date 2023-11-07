import { Heading, Image, Text, FlatList, Avatar } from "native-base";
import { Box, ScrollView, FormControl } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components";
import datas from "../datas";

const Home = () => {
  const navigation = useNavigation();

  

  return (
    <>
    <Box
    h="40"
    w="full"
    backgroundColor="primary.500"
    flex="row"
    flexDirection="row"
    marginTop="20"
    px="5"
    >
   
   <Avatar bg="green.500" 
   w="40%"
   h="40"
   source={{
      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }}>      </Avatar>        
    <Box
    w="60%"
    h="40"
    marginTop="25"
    marginLeft="5"
    >

        <Text>Sayur
        </Text>
        <Text>
            @gmail.com
        </Text>
        <Text>
            0651503505
        </Text>

    </Box>
    </Box>
<Box
h="20"
w="full%"
backgroundColor="amber.500"
marginTop={20}
flex="row"
flexDirection="row"
>
    <Box


    h="20"
    w="80%"
    backgroundColor="primary.500"
    p="6"
>   
       <Text>
        Edit Profile
        </Text> 
        <Text>
        aaa
        </Text>


    </Box>
    <Box
    h="20"
    backgroundColor="primary.50"
    w="20%"
    >
        <TouchableOpacity
        onPress="0,5">
        <Text>ghdhdgh</Text>

        </TouchableOpacity>
    </Box>
    
    </Box>
    <Box
h="20"
w="full%"
backgroundColor="amber.500"
flex="row"
flexDirection="row"
>
    <Box


    h="20"
    w="80%"
    backgroundColor="primary.500"
    p="6"
>   
       <Text>
        Edit Profile
        </Text> 
        <Text>
        aaa
        </Text>


    </Box>
    <Box
    h="20"
    backgroundColor="primary.50"
    w="20%"
    >
        <TouchableOpacity
        onPress="0,5">
        <Text>ghdhdgh</Text>

        </TouchableOpacity>
    </Box>
    
    </Box>

{/*aaaaaaaa  */}

<Box
h="20"
w="full%"
backgroundColor="amber.500"
flex="row"
flexDirection="row"
>
    <Box


    h="20"
    w="80%"
    backgroundColor="primary.500"
    p="6"
>   
       <Text>
        Edit Profile
        </Text> 
        <Text>
        aaa
        </Text>


    </Box>
    <Box
    h="20"
    backgroundColor="primary.50"
    w="20%"
    >
        <TouchableOpacity
        onPress="0,5">
        <Text>ghdhdgh</Text>

        </TouchableOpacity>
    </Box>
    
    </Box>

{/*  */}

<Box
h="20"
w="full%"
backgroundColor="amber.500"
flex="row"
flexDirection="row"
>
    <Box


    h="20"
    w="80%"
    backgroundColor="primary.500"
    p="6"
>   
       <Text>
        Edit Profile
        </Text> 
        <Text>
        aaa
        </Text>


    </Box>
    <Box
    h="20"
    backgroundColor="primary.50"
    w="20%"
    >
        <TouchableOpacity
        onPress="0,5">
        <Text>ghdhdgh</Text>

        </TouchableOpacity>
    </Box>
    
    </Box>

{/*  */}

<Box
h="20"
w="full%"
backgroundColor="amber.500"
flex="row"
flexDirection="row"
>
    <Box


    h="20"
    w="80%"
    backgroundColor="primary.500"
    p="6"
>   
       <Text>
        Edit Profile
        </Text> 
        <Text>
        aaa
        </Text>


    </Box>
    <Box
    h="20"
    backgroundColor="primary.50"
    w="20%"
    >
        <TouchableOpacity
        onPress="0,5">
        <Text>ghdhdgh</Text>

        </TouchableOpacity>
    </Box>
    
    </Box>




      
     
    </>
  );
};

export default Home;
