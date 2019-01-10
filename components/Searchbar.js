import React, { Component } from 'react'
import { SearchBar } from 'react-native-elements'


export default class Searchbar extends Component {
  searchTimeout = null

  render() {
    return (
      <SearchBar
        platform="ios"
        lightTheme
        icon = {{ color: '#86939e'}}
        clearIcon
        searchIcon={true}
        onChangeText={query => {
          if (this.searchTimeout) {
            clearTimeout(this.searchTimeout)
          }
          this.searchTimeout = setTimeout( () => {
            this.props.callback(query)
            this.searchTimeout = null
          }, 700)
        }}
        placeholder='Search'
      />
    )
  }

}