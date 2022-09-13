import { Text, View, StyleSheet, Image } from "react-native";
export function HeaderProfile() {
  return (
    <>
      <View style={styles.ioncPlace}>
        <Image
          style={styles.iconHeader}
          source={require("./../assets/menu.png")}
        ></Image>
        <Image
          style={styles.iconHeader}
          source={require("./../assets/search.png")}
        ></Image>
      </View>
      <View style={styles.profile}>
        <View>
          <Text style={styles.profileTitle}>Your Progress</Text>
          <View>
            <View style={styles.profileProgressBarCard}>
              <View style={styles.profileProgressBar}></View>
            </View>
            <Text style={styles.profileProgressBarDescription}>
              Wached episode 10 of 110
            </Text>
          </View>
        </View>
        <Image style={styles.avatar} source={require("./../assets/avatar.png")}></Image>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  ioncPlace: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    flex: 2,
    paddingHorizontal: 16,
  },
  iconHeader: {
    width: 40,
    height: 40,
  },
  profile: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    flex: 2,
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  profileTitle: {
    fontSize: 32,
    width: "80%",
    fontWeight: "bold",
  },
  profileProgressBarCard: {
    backgroundColor: "#e4e6f3",
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 8,
    height: 4,
  },
  profileProgressBar: {
    width: "40%",
    backgroundColor: "#ff9049",
    height: 4,
    borderRadius: 8,
  },
  profileProgressBarDescription: {
    color: "#9ca2b1",
    fontWeight: "500",
  },
  avatar:{
    with:100,
    height:100
  },
});
