import { StyleSheet, Button } from "react-native";

export function AllergySelectionButton({
  allergy,
  handleAllergySelectionButtonPress,
}) {
  return (
    <Button
      title={allergy}
      onPress={() => handleAllergySelectionButtonPress(allergy)}
    ></Button>
  );
}

const styles = StyleSheet.create({});
