import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const MenuOption = ({ item }) => {
  const { iconName, name } = item;
  return (
    <View style={styles.optionRow}>
      <View style={styles.optionRowChild}>
        <MaterialCommunityIcons name={iconName} size={28} color="gray" />

        <Text style={styles.optionText}>{name}</Text>
      </View>
      <MaterialIcons name="keyboard-arrow-right" size={28} color="gray" />
    </View>
  );
};

const styles = StyleSheet.create({
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  optionRowChild: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionText: {
    color: "#eee",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default MenuOption;
