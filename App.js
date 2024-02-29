import { View } from "react-native";
import fotoinsta from "./src/assets/fotoinsta.jpg";
import InfoProfile from "./src/componentes/InfoProfile";



export default function App() {
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
    </View>
  );
}

