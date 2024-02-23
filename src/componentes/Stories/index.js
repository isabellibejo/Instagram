import { StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native"
import Imagem from "../../assets/imagem.jpg";

export default function Stories() {
    return (
        <ScrollView
            contentContainerStyle={styles.container}
            horizontal
            style={{ flexDirection: "row" }}
            showsHorizontalScrollIndicator={false}
        >
            <TouchableOpacity>
                <Image
                    style={styles.story}
                    source={{
                        uri: "https://i.pinimg.com/550x/98/43/1a/98431a96f44d5e42094cab4db691901a.jpg",
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    style={styles.story}
                    source={{
                        uri: "https://i.pinimg.com/550x/98/43/1a/98431a96f44d5e42094cab4db691901a.jpg",
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    style={styles.story}
                    source={{
                        uri: "https://i.pinimg.com/550x/98/43/1a/98431a96f44d5e42094cab4db691901a.jpg",
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    style={styles.story}
                    source={{
                        uri: "https://i.pinimg.com/550x/98/43/1a/98431a96f44d5e42094cab4db691901a.jpg",
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    style={styles.story}
                    source={{
                        uri: "https://i.pinimg.com/550x/98/43/1a/98431a96f44d5e42094cab4db691901a.jpg",
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    style={styles.story}
                    source={{
                        uri: "https://i.pinimg.com/550x/98/43/1a/98431a96f44d5e42094cab4db691901a.jpg",
                    }}
                />
            </TouchableOpacity>
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