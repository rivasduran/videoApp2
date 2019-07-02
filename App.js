import React from 'react';
import { 
  Text,
  View,
  Dimensions
} from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import CategoryList from './src/videos/containers/category-list';
import API from './utils/api';

//IMPORTAMOS EL REPRODUCTOR
import Player from './src/player/containers/player';

type Props = {};

export default class App extends React.Component {
  state = {
    suggestionList : [],
    categoryList: []
  }
  //ENVIAMOS LA PETICION DE LA API
  async componentDidMount() {
    const movies      = await API.getSuggestion(10);
    const categories  = await API.getMovies();
    console.log(movies);
    console.log(categories);
    this.setState({
      suggestionList: movies,
      categoryList: categories
    })
  }

  render() {
    return (
      <Home>
        <Header />
        <Player />
        <Text>Buscador</Text>
        <Text>Categorias</Text>
        <CategoryList 
          list={this.state.categoryList}
        />

        <SuggestionList 
          list={this.state.suggestionList}
        />
      </Home>
    );
  }
}