import { View, ScrollView } from "react-native";
import Header from "../componentes/Header";
import Stories from "../componentes/Stories";
import Post from "../componentes/Post";
import Fake from "../assets/fotoinsta.jpg";
import postImage from "../assets/post-example.png";


export default function Home() {
  return (
    <ScrollView
      style={{
        flex: 1,
        marginVertical: 32,
        marginHorizontal: 16,
      }}
    >
      <Header />
      <Stories />

      <Post
      profileImage={Fake}
      postImage={postImage}
      profileName="Isabelli"
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking"
      />

      <Post
      profileImage={Fake}
      postImage={postImage}
      profileName="Isabelli"
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking"
      />

      <Post
      profileImage={Fake}
      postImage={postImage}
      profileName="Isabelli"
      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking"
      />

    </ScrollView>
  );
}

