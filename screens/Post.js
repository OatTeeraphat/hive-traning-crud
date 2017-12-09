import React, { Component } from 'react'
import { Text, View , Button , StyleSheet , TextInput } from 'react-native'

export default class Post extends Component {
  state = {
      status : null,
      name : '',
      tel : '',
      desc : '',
  }

  fetchMethodPost = () => {
    this.props.changeLoading
    fetch('https://us-central1-testcrud-b0e56.cloudfunctions.net/api/', {
        method: 'POST',
        headers: new Headers ({
            'Content-Type':'application/json'
        }),
        body: JSON.stringify({
            name : this.state.name,
            tel : this.state.tel,
            desc : this.state.desc,
        })
      })
      .then((res) => {
        this.setState({
            status : res.status ,
            name : '',
            tel : '',
            desc : '',
        })
        this.props.changeLoading
      })
    }

  render() {
    return (
      <View>
        <Text style={styles.topic}> METHOD : POST </Text>
        <View style={styles.postButton}>
            <Text style={styles.intro}>Try to post data :  </Text>
            <Button
                onPress={this.fetchMethodPost}
                title={this.props.isLoading ? 'Loading...' : 'Post Data'}
                color="red"
                accessibilityLabel="Fired XMLHttpRequest Method Get"
                disabled={this.props.isLoading || this.state.name === '' || this.state.tel === '' || this.state.desc === ''}
                editable = {true}
            />
        </View>
        <Text style={styles.payload}>
            Data Payload     
        </Text>
        <View style={styles.textInputWrapper}>
            <Text style={styles.textInputTopic}>Name  :     </Text>
            <TextInput
                style={styles.textInput}
                onChangeText={(name) => this.setState({name})}
                value={this.state.name}
            />
        </View>
        <View style={styles.textInputWrapper}>
            <Text style={styles.textInputTopic}>Tel.      :     </Text>
            <TextInput
                style={styles.textInput}
                onChangeText={(tel) => this.setState({tel})}
                value={this.state.tel}
            />
        </View>
        <View style={styles.textInputWrapper}>
            <Text style={styles.textInputTopic}>desc    :     </Text>
            <TextInput
                style={styles.textInput}
                onChangeText={(desc) => this.setState({desc})}
                value={this.state.desc}
            />
        </View>
        <Text style={styles.status}>
            {'Respone Status : ' + this.state.status}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    topic : {
      paddingTop : 20,
      paddingLeft : 30,
      fontSize : 30,
      fontWeight : 'bold',
    },
    postButton : {
        alignItems: 'center',
        paddingTop : 30,
        flexDirection: 'row',
    },
    intro : {
        paddingLeft : 37,
        fontSize : 20,
      },
    status : {
       paddingTop : 30,
       paddingLeft : 38,
       fontSize : 20,
    } , 
    payload : {
        paddingTop : 30,
        paddingLeft : 38,
        fontSize : 20, 
    },
    textInput : {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        width: 400,
    },
    textInputWrapper : {
       paddingTop : 30,
       alignItems: 'center',
       flexDirection: 'row',
    },
    textInputTopic : {
       paddingLeft : 38,
       fontSize : 20,
    }
  });