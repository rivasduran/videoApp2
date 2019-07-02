import React from 'react';
import {
	View,
	Image,
	StyleSheet,
	SafeAreaView,
	Text
} from 'react-native';

function Header(props){
	return(
		<View>
			<SafeAreaView>
				<View style={styles.container}>
					<Image 
						source={require('../../../assets/logo.png')}
						style={styles.logo}
					/>
					<View style={styles.right}>
						{props.children}
					</View>
				</View>
			</SafeAreaView>
		</View>
	)
}


export default Header;

const styles = StyleSheet.create({
	logo: {
		width: 80,
		height: 26,
		resizeMode: 'contain'
	},
	container: {
		padding: 20,
		paddingVertical: 20,
		paddingHorizontal: 10,
		flexDirection: 'row',
	},
	right: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end'

	}
})