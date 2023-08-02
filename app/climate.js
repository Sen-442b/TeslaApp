import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  Pressable,
  Image,
} from "react-native";
import {
  MaterialIcons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import climate from "../assets/images/climate.png";
const ClimateScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={climate} style={styles.image} resizeMode="cover" />
      <Pressable style={styles.button}>
        <MaterialIcons name="keyboard-arrow-left" size={30} color="gray" />
      </Pressable>
      <Text style={styles.heading}>Interior 74°F- Exterior 66°F</Text>
      <View style={styles.temperatureControls}>
        <View style={styles.power}>
          <FontAwesome5 name="power-off" size={40} color="#eee" />
          <Text style={styles.powerText}>On</Text>
        </View>
        <View style={styles.temperature}>
          <MaterialIcons name="keyboard-arrow-left" size={60} color="gray" />
          <Text style={styles.temperatureText}> 68°</Text>
          <MaterialIcons name="keyboard-arrow-right" size={60} color="gray" />
        </View>
        <View style={styles.vent}>
          <MaterialCommunityIcons name="car-door" size={40} color="#eee" />
          <Text style={styles.ventText}>Vent</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 24,
    backgroundColor: "#161818",
    color: "white",
  },
  image: {
    width: "100%",
    height: "80%",
    marginTop: -40,
    position: "relative",
  },
  button: {
    backgroundColor: "#2f3030",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,

    position: "absolute",
    top: 60,
    left: 30,
  },
  heading: {
    color: "gray",
    textAlign: "center",
    marginTop: 16,
    marginBottom: 16,
    fontSize: 18,
    fontWeight: "bold",
  },
  temperatureControls: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  power: {
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  powerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#eee",
  },
  temperature: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
  },
  temperatureText: {
    fontSize: 60,
    textAlign: "justify",
    color: "#eee",
  },
  vent: {
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  ventText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#eee",
  },
});
export default ClimateScreen;
