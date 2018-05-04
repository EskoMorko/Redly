import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import _ from 'lodash'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {key: 'Terve 1', content: 'Lorem ipsum dolor sit amet 1', selected: false},
        {key: 'Terve 2', content: 'Lorem ipsum dolor sit amet 1', selected: false},
        {key: 'Terve 3', content: 'Lorem ipsum dolor sit amet 1', selected: false},
        {key: 'Terve 4', content: 'Lorem ipsum dolor sit amet 1', selected: false},
        {key: 'Terve 5', content: 'Lorem ipsum dolor sit amet 1', selected: true},
        {key: 'Terve 6', content: 'Lorem ipsum dolor sit amet 1', selected: false},
        {key: 'Terve 7', content: 'Lorem ipsum dolor sit amet 1', selected: false},
        {key: 'Terve 8', content: 'Lorem ipsum dolor sit amet 1', selected: false},
        {key: 'Terve 9', content: 'Lorem ipsum dolor sit amet 1', selected: false},
        {key: 'Terve 10', content: 'Lorem ipsum dolor sit amet 1', selected: false},
        {key: 'Terve 11', content: 'Lorem ipsum dolor sit amet 1', selected: false},
        {key: 'Terve 12', content: 'Lorem ipsum dolor sit amet 1', selected: false},
        {key: 'Terve 13', content: 'Lorem ipsum dolor sit amet 1', selected: false},
        {key: 'Terve 14', content: 'Lorem ipsum dolor sit amet 1', selected: false},
        {key: 'Terve 15', content: 'Lorem ipsum dolor sit amet 1', selected: false},
        {key: 'Terve 16', content: 'Lorem ipsum dolor sit amet 1', selected: false},
        {key: 'Terve 17', content: 'Lorem ipsum dolor sit amet 1', selected: false},
        {key: 'Terve 18', content: 'Lorem ipsum dolor sit amet 1', selected: false},
      ],
      refreshing: false
    }
  }

  toggleSelected = (item) => {
    const items = this.state.items
    const selected = _.find(items, {key: item.key})
    selected.selected = !selected.selectedconsole.log(selected)
    this.setState({items})
  }

  refresh = () => {
    this.setState({refreshing: true})
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
        data={this.state.items}
        onRefresh={this.refresh}
        refreshing={this.state.refreshing}
        renderItem = {({item}) => {
          return <Text style={item.selected ? styles.textSelected : styles.text} onPress={() => this.toggleSelected(item)}>{`${item.key} - ${item.content}`}</Text>
        }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#F00',
    fontSize: 30
  },
  textSelected: {
    color: '#0F0',
    fontSize: 30
  }
});
