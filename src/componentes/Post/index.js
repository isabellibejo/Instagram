import { View, Image, Text, StyleSheet } from "react-native";
import {
    Feather,
    FontAwesome,
    MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function Post({
    profileImage,
    postImage,
    profileName,
    description,
}) {
    return (
        <View style={{ marginTop: 16 }}>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Image
                    source={profileImage}
                    style={{ width: 60, height: 60, borderRadius: 50 }}
                />
                <Text style={{ flex: 1, marginLeft: 16 }}>{profileName}</Text>
                <Feather name="more-horizontal" size={24} color="black" />
            </View>

            <Image style={{ width: "100%", height: 300 }} source={postImage} />
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginVertical: 8,
                }}
            >
                <View style={{ flexDirection: "row", gap: 8 }}>
                    <MaterialCommunityIcons
                        name="cards-heart-outline"
                        size={28}
                        color="black"
                    />
                    <Feather name="message-circle" size={28} color="black"/>
                    <FontAwesome name="paper-plane-o" size={28} color="black"/>
                </View>
                <View>
                    <MaterialCommunityIcons 
                    name="bookmark-outline"
                    size={28}
                    color="black"
                    />
                </View>
            </View>
            <Text>{description}</Text>
        </View>
    )
}