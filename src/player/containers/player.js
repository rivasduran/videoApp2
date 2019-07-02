import React, { Component } from 'react';
import { Video } from 'expo';

//ESTILOS DEL VIDEO
import {
	StyleSheet,
	ActivityIndicator,
	Text
} from 'react-native';

import Layout from '../components/layout';

import ControlLayout from '../components/control-layout';
import PlayPause from '../components/play-pause';

class Player extends Component {
	state = {
		loading: true,
		paused: false,
	}
	onBuffer = ({ isBuffering }) => {
		this.setState({
			loading: isBuffering
		})
	}
	onLoad = () => {
		this.setState({
			loading: false
		})
	}
	playPause = () => {
		this.setState({
			paused: !this.state.paused
		})
	}
	render(){
		return(
			<Layout
				loading={this.state.loading}
				video={
					<Video
						source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
						//CREAMOS LA REFERENCIA DEL VIDEO
						ref={(ref) => {
							this.player = ref
						}}
						style={ styles.video}
						resizeMode='contain'
						//ONBUFFER ES PARA CUANDO EL VIDEO ESTA CARGANDO
						onBuffer={this.onBuffer}
						//SI EL VIDEO  YA CARGO SE EJECUTA ESTA ACCION
						onLoad={this.onLoad}
						shouldPlay
						isLooping
					/>
				}
				loader={
					<ActivityIndicator color="red" />
				}
				controls={
					<ControlLayout>
						<PlayPause 
							onPress={this.playPause}
							paused={this.state.paused}
						/>

						<Text>progress bar | </Text>
						<Text>time left | </Text>
						<Text>fullscreen 1| </Text>
					</ControlLayout>
				}
			/>
		)
	}
}

const styles = StyleSheet.create({
	video: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
		top: 0,
	}
})

export default Player;