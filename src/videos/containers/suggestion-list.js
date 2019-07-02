import React, { Component } from 'react';
import {
	FlatList,
	Text,
} from 'react-native';

import Layout from '../components/suggestion-list-layout.js';
import Empty from '../components/empty.js';
import Separator from '../components/vertical-separator.js';
import Suggestion from '../components/suggestion.js';

class SuggestionList extends Component {
	keyExtractor	= item => item.id.toString()
	renderEmpty 	= () => <Empty text="No hay sugerencias :(" />
	itemSeparator 	= () => <Separator />
	renderItem		= ({item}) => {
		return(
			<Suggestion {...item} />
		)
	}
	render(){
		/*
		const list = [
			{
				title: 'Advengers',
				key: '1'
			},
			{
				title: 'Pokemon',
				key: '2'
			}
		]
		*/
		return(
			<Layout
				title="Recomendado para ti"
			>
				<FlatList 
					//data={list}
					keyExtractor={this.keyExtractor}
					data={this.props.list}
					//ListEmptyComponent={() => <Text>No hay elementos en la lista</Text>}
					ListEmptyComponent={this.renderEmpty}
					ItemSeparatorComponent={this.itemSeparator}
					//renderItem={({ item }) => <Text>{item.title}</Text> }
					renderItem={ this.renderItem }
				/>
			</Layout>
		)
	}
}


export default SuggestionList;