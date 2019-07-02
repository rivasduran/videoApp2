import React from 'react';

import {
	View,
	SryleSheet
} from 'react-native';

function HorizontalSeoarator(props) {
	return(
		<View 
			style={styles.separator}
		/>
	)
}

const styles = {
	separator: {
		flex: 1,
		marginHorizontal: 5
	}
}

export default HorizontalSeoarator;