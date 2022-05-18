import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const CarItem = () => {
	return (
		<View style={styles.carContainer}>
			{/* <Header/> */}
			<Text>Settings</Text>
			<Text>IfeMobile</Text>
			<Text>Surprise</Text>
		</View>
	);
};

export default CarItem;
