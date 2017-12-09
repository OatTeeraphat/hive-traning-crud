import React, { Component } from 'react'
import { Text, View , Button , StyleSheet } from 'react-native'

export default Get = props => {
    return (
        <View>
            <Text style={styles.topic}> METHOD : GET </Text>
            <View style={styles.fetchButton}>
                <Text style={styles.intro}>Try to get data :  </Text>
                <Button
                    onPress={props.fetchMethodGet}
                    title={props.isLoading ? 'Loading...' : 'Get Data'}
                    color="red"
                    accessibilityLabel="Fired XMLHttpRequest Method Get"
                    disabled={props.isLoading}
                />
            </View>
            <View style={styles.fetchButton}>
                <Text style={styles.intro}>
                    {props.object.length === 0 ? 'Object was Empty' : 'Object was get : '}
                </Text>
                {
                    props.object.length !== 0 &&
                    <Button
                        onPress={props.clearObject}
                        title='Clear Data'
                        color="red"
                        accessibilityLabel="Clear State"
                    />
                }
            </View>
            <Text style={styles.json}>
                {'Respone Data  : '+ JSON.stringify(props.object)}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    fetchButton : {
      alignItems: 'center',
      paddingTop : 30,
      flexDirection: 'row',
    },
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
    json : {
      paddingTop : 30,
      paddingLeft : 38,
      fontSize : 20,
    }
  });