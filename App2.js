import { View } from "react-native";
import Header from "./src/componentes/Header";
import Stories from "./src/componentes/Stories";


export default function App() {
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

