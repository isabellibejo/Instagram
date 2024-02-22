import { View, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import Logo from "../../assets/instagram-logo.png";

export default  function header() {
    return (
        <View
            style={{
                flex: 1,
                marginVertical: 32,
                marginHorizontal: 16,
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    alignItems: "center",
                }}
            >
                <Image style={{ width: 150, height: 50 }} source={Logo} />
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity>
                        <Feather name="heart" size={32} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: 8 }}>
                        <Feather name="message-circle" size={32} color="black" />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}