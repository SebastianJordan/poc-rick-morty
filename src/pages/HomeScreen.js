import {
  Text,
  View,
  ScrollView,
  StyleSheet,
} from "react-native";
import { API_URL } from "react-native-dotenv";
import useAxios from "axios-hooks";

import { Episode } from "../components/Episode";
import { HeaderProfile } from "../components/HeaderProfile";
export function HomeScreen({ navigation }) {
  // console.log(API_URL);
  const [{ data, loading, error }, refetch] = useAxios(`https://rickandmortyapi.com/api/episode`);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error!</Text>;
  return (
    <ScrollView>
      <HeaderProfile></HeaderProfile>
      <View style={styles.container}>
        {data.results.map((episode, index) => (
          <Episode episode={episode} key={index}></Episode>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    flex: 3,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
