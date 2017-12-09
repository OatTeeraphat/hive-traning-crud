import React, { Component } from 'react'
import { Text, View , Button , StyleSheet , FlatList , TextInput } from 'react-native'

export default Put = props => {
    return (
      <View>
        <Text style={styles.topic}> METHOD : PUT </Text>
        {
            props.object.length === 0 ? (
                <View style={styles.fetchButton}>
                    <Text style={styles.intro}>Data was empty, Try to get data :  </Text>
                    <Button
                        onPress={props.fetchMethodGet}
                        title={props.isLoading ? 'Loading...' : 'Get Data'}
                        color="red"
                        accessibilityLabel="Fired XMLHttpRequest Method Get"
                        disabled={props.isLoading}
                    />
                </View>
            ) : (
                <View>
                    <Text style={styles.payload}>
                        Data Table
                    </Text>
                    <View style={{paddingLeft : 165,flexDirection: 'row'}}>
                        <TextInput
                            style={styles.informationTopic}
                            underlineColorAndroid='white'
                            value='Name'
                        />
                        <TextInput
                            style={styles.informationTopic}
                            underlineColorAndroid='white'
                            value='Tel.'
                        />
                        <TextInput
                            style={styles.informationTopic}
                            underlineColorAndroid='white'
                            value='Desc'
                        />
                    </View>
                    <FlatList
                        data={props.object}
                        keyExtractor={ ({_id}) => _id }
                        renderItem={ ({item}) => 
                            <List 
                                item={item} 
                                fetchMethodPut={props.fetchMethodPut} 
                            />
                        }
                    />
                </View>
            )
        }
      </View>
    )
}

class List extends Component {
    state = {
        name : this.props.item.name,
        tel : this.props.item.tel,
        desc : this.props.item.desc,
    }

 
  render() {
    return (
        <View style={{paddingLeft : 38}}>
            <View style={styles.fetchButton}>
                <Button
                    onPress={() => this.props.fetchMethodPut(this.props.item._id,this.state.name,this.state.tel,this.state.desc)}
                    title={this.state.isLoading ? 'Loading...' : 'Edit Data'}
                    color="red"
                    accessibilityLabel="Fired XMLHttpRequest Method Put"
                    disabled={this.state.isLoading}
                />
                <View style={{paddingLeft : 38,flexDirection: 'row'}}>
                    <TextInput
                        style={styles.information}
                        onChangeText={(name) => this.setState({name})}
                        value={this.state.name}
                    />
                    <TextInput
                        style={styles.information}
                        onChangeText={(tel) => this.setState({tel})}
                        value={this.state.tel}
                    />
                    <TextInput
                        style={styles.information}
                        onChangeText={(desc) => this.setState({desc})}
                        value={this.state.desc}
                    />
                </View>
            </View> 
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
    intro : {
        paddingLeft : 37,
        fontSize : 20,
      },
    informationTopic : { 
        fontSize : 18,
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        width: 130, 
    },
    information : { 
        fontSize : 18,
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        width: 130, 
    },
    fetchButton : {
        alignItems: 'center',
        paddingTop : 30,
        flexDirection: 'row',
    },
    putButton : {
        alignItems: 'center',
        flexDirection: 'row',
    },
    payload : {
        paddingTop : 15, 
        paddingLeft : 38,
        fontSize : 20, 
    },
  });