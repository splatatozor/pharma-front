import React, { Component } from 'react'
import { Card, Button } from 'react-native-elements'
import { Text } from 'react-native';




export default class CardComponent extends Component {

  render() {
    const {drug} = this.props
    return (
      <Card title={drug.label}>
        <Text style={{marginBottom: 5}}>
          {drug.release}
        </Text>
        <Text style={{marginBottom: 5}}>
          {drug.company}
        </Text>
        <Text style={{marginBottom: 5}}>
          {drug.type}
        </Text>
        <Text style={{marginBottom: 5}}>
          {drug.way}
        </Text>
        <Button
        buttonStyle={styles.button}
        title='Find shop'
        onPress={ () => {
          this.props.navigation.navigate('Home', {drug});
        }}
        />
      </Card>
    )
  }
}

const styles = {
  button: {
    backgroundColor:"#03A9F4",
  },
}