import React, { Component } from 'react';

import {
	View,
	Text,
	FlatList
} from 'react-native';

import Layout from '../components/category-list-layout';
import Empty from '../components/empty.js';
import Separator from '../../sections/components/horizontal-separator';
import Suggestion from '../components/suggestion.js';
import Categoryss from '../components/category.js';

class CategoryList extends Component {
	keyExtractor	= item => item.id.toString()
	renderEmpty 	= () => <Empty text="No hay sugerencias :(" />
	itemSeparator 	= () => <Separator />
	renderItem		= ({item}) => {
		return(
			<Categoryss {...item} />
		)
	}
	render() {
		return(
			<Layout
				title="Categorias"
			>
				<FlatList 
					horizontal={true}
					keyExtractor={this.keyExtractor}
					data={this.props.list}
					ListEmptyComponent={this.renderEmpty}
					ItemSeparatorComponent={this.itemSeparator}
					renderItem={ this.renderItem }
				/>
			</Layout>
		)
	}
}


export default CategoryList;