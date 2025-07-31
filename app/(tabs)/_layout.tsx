import {Ionicons} from "@expo/vector-icons";
import {Tabs} from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor:"red",
            tabBarInactiveTintColor:"green",
            tabBarStyle:{
                backgroundColor:"#f0f0ff",
                borderTopWidth: "1",
                borderTopColor:"black",
                paddingTop:"3"
            },
            tabBarLabelStyle: {
                fontSize:12,
                fontWeight:"bold"
            },
            headerShown:false


        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title:"Todos",
                    tabBarIcon:({color, size})=>(
                        <Ionicons name={'flash-outline'}  size={size} color={color}/>
                    )
                }}
                />
            <Tabs.Screen
                name="Settings"
                options={{
                    title:"Settings",
                    tabBarIcon:({color, size})=>(
                        <Ionicons name={'settings'} size={size} color={color}/>
                    )
                }}
            />
        </Tabs>
    );
}

