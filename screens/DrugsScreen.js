import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Searchbar from '../components/Searchbar';
import CardComponent from '../components/Card';
import services from '../services/api'

export default class DrugScreen extends React.Component {
  static navigationOptions = {
    title: 'Drugs',
  };
  state = {
    drugs: [],
  }

  _renderDrugs() {
    return (
      this.state.drugs.map(res => {
        return (
          <CardComponent 
            style={styles.card}
            drug={res}
            key={res.id}
            navigation={this.props.navigation}
          />
        )
      })
    )
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Searchbar 
          callback={this.onSearchBarChange}
          style={styles.searchbar}
        />
        { this.state.drugs && this._renderDrugs() }
      </ScrollView>
    );
  }

  onSearchBarChange = async (value) => {
      const drugs = await services.getDrugs(value);
      this.setState({drugs})
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchbar: {
    position: "absolute",
    width: '100%',
    top: 0,
    backgroundColor:"rgba(0, 0, 0, 0)",
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },
  card: {
    paddingTop: 50,
  },
});
