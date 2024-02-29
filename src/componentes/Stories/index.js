import { StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native"
import Imagem from "../../assets/imagem.jpg";
import Story from "../Story";

export default function Stories() {
    return (
        <ScrollView
            contentContainerStyle={styles.container}
            horizontal
            style={{ flexDirection: "row" }}
            showsHorizontalScrollIndicator={false}
        >
            <Story image={imagem}/>
            <Story image={imagem}/>
            <Story image={imagem}/>
            <Story image={imagem}/>
            <Story image={imagem}/>
            <Story image={imagem}/>
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 8,
        height: 100,
    },
    story: { width: 100, height: 100, borderRadius: 50 },
})    