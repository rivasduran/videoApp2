import React from 'react';
import {
	TouchableHighlight,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Text,
	StyleSheet
} from 'react-native';

function PlayPause (props) {
	return (
		<TouchableHighlight
			onPress={props.onPress}
			style={styles.container}
			underlayColor="red"
			//PARA TENER UN MAYOR ESPACIO SELECCIONABLE EN EL BOTON ES:
			hitSlop={{
				left: 5,
				top: 5,
				bottom: 5,
			}}
		>
		{
			props.paused ?
			<Text style={styles.button}>Play</Text>
			:
			<Text style={styles.button}>PAUSE</Text>
		}
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	
})
export default PlayPause;