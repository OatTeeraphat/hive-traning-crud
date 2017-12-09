import React from 'react'
import { StyleSheet , Text , View , StatusBar } from 'react-native'
import Menu from './screens/Menu'
import Content from './screens/Content'

export default class App extends React.Component {
  state = {
    menu : 'PUT',
    object : [] , 
    isLoading : false,
    resPut:'',
  }

  fetchMethodGet = async () => {
      this.setState({isLoading : true})
      try {
          let object = await fetch('https://us-central1-testcrud-b0e56.cloudfunctions.net/api/').then(res => res.json())
          this.setState({ object , isLoading : false  })
      } catch(e) {
          alert('Something Went Wrong')
          this.setState({isLoading : false})
      }
  }

  fetchMethodPut = async ( id , name , tel , desc) => {
    let Put = await fetch('https://us-central1-testcrud-b0e56.cloudfunctions.net/api/'+id,{
        method: 'PUT',
        headers: new Headers ({
            'Content-Type':'application/json'
        }),
        body: JSON.stringify({
            name : name,
            tel : tel,
            desc : desc,
        })
      })
      return Put.respone
    }

  clearObject = () => {
      this.setState({ object : [] })
  }

  selectMenu = menu => {
    this.setState({ menu })
  }  

  changeLoading = () => {
    this.setState({ isLoading : !this.state.isLoading})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navigator}>
          <Menu 
            menu='GET'
            selectMenu={this.selectMenu}
          />
          <Menu 
            menu='POST'
            selectMenu={this.selectMenu}
          />
          <Menu 
            menu='PUT'
            selectMenu={this.selectMenu}
          />
          <Menu 
            menu='DELETE'
            selectMenu={this.selectMenu}
          />
        </View>
        <Content 
          menu = {this.state.menu}
          object = {this.state.object}
          fetchMethodGet = {this.fetchMethodGet}
          fetchMethodPut = {this.fetchMethodPut}
          clearObject = {this.clearObject}
          isLoading = { this.state.isLoading }
          changeLoading = { this.changeLoading }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigator : {
    flex : 0.2,
    backgroundColor: 'red',
    paddingTop : StatusBar.currentHeight,
    height : 60 + StatusBar.currentHeight,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    elevation: 5,
  },
  content : {
    flex : 2.8
  },
});
