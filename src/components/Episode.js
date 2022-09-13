import { Text, View, StyleSheet } from "react-native";
import moment from "moment";
import { ImageEpisode } from "./ImageEpisode";
export function Episode({ episode }) {
  const { id, name, characters, created } = episode;
  return (
    <View
      style={styles.card}
      onPress={() => {
        console.log("click");
      }}
    >
      <Text style={styles.id}> {id}</Text>
      <Text style={styles.title}> {name}</Text>
      <ImageEpisode episode={characters[characters.length - 1]}></ImageEpisode>
      <Text style={styles.created}>Created: {moment(created).fromNow()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f5f6fc",
    width: "45%",
    marginHorizontal: 4,
    marginTop: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  title: {
    color: "#2e2e2e",
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 4,
  },
  id: {
    paddingTop: 8,
    fontSize: 12,
    color: "#8f97aa",
    paddingLeft: 4,
    fontWeight: "light",
  },
  created: {
    paddingTop: 8,
    paddingBottom: 8,
    fontSize: 12,
    color: "#8f97aa",
    fontWeight: "light",
    width: "100%",
    textAlign: "center",
  },
});
