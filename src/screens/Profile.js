import { View } from "react-native";
import fotoinsta from "../assets/fotoinsta.jpg";
import InfoProfile from "../componentes/InfoProfile";
import MyPosts from "../componentes/MyPosts";



export default function Profile() {
  return (
    <View
      style={{
        flex: 1,
        marginVertical: 32,
        marginHorizontal: 16,
      }}
    >
      <InfoProfile
        image={fotoinsta}
        publi={12}
        followers={945}
        following={778}
        description="paz e amor" />
      <MyPosts />
    </View>
  );
}

