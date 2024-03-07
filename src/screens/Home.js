import { View } from "react-native";
import Header from "../componentes/Header";
import Stories from "../componentes/Stories";


export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        marginVertical: 32,
        marginHorizontal: 16,
      }}
    >
      <Header />
      <Stories />
    </View>
  );
}

