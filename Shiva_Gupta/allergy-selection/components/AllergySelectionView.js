import { React, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { AllergySelectionButton } from "./AllergySelectionButton";

const allergies = [
  "Nuts",
  "Shellfish",
  "Diary",
  "Gluten",
  "Additives",
  "Vegan",
];

export function AllergySelectionView() {
  const [selectedAllergies, setSelectedAllergies] = useState([]);

  const handleAllergySelectionButtonPress = (allergy) => {
    if (selectedAllergies.includes(allergy)) {
      let selectedAllergiesCopy = [...selectedAllergies];
      let allergyToRemoveIndex = selectedAllergies.indexOf(allergy);
      selectedAllergiesCopy.splice(allergyToRemoveIndex, 1);
      setSelectedAllergies(() => [...selectedAllergiesCopy]);
    } else {
      setSelectedAllergies((selectedAllergies) => [
        ...selectedAllergies,
        allergy,
      ]);
    }

    selectedAllergies.map((element, index) => {
      console.log(index + " " + element);
    });
  };

  return (
    <View style={styles.AllergySelectionView}>
      <Text>Hello World</Text>
      <AllergySelectionButton
        allergy={allergies[0]}
        handleAllergySelectionButtonPress={handleAllergySelectionButtonPress}
      />
      <AllergySelectionButton
        allergy={allergies[1]}
        handleAllergySelectionButtonPress={handleAllergySelectionButtonPress}
      />
      <AllergySelectionButton
        allergy={allergies[2]}
        handleAllergySelectionButtonPress={handleAllergySelectionButtonPress}
      />
      <AllergySelectionButton
        allergy={allergies[3]}
        handleAllergySelectionButtonPress={handleAllergySelectionButtonPress}
      />
      <AllergySelectionButton
        allergy={allergies[4]}
        handleAllergySelectionButtonPress={handleAllergySelectionButtonPress}
      />
      <AllergySelectionButton
        allergy={allergies[5]}
        handleAllergySelectionButtonPress={handleAllergySelectionButtonPress}
      />
      <Text>{selectedAllergies}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  AllergySelectionView: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
});
