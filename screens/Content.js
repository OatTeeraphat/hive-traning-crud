import React, { Component } from 'react'
import { Text , View , StyleSheet } from 'react-native'
import Get from './Get'
import Post from './Post'
import Put from './Put'

export default content = (props) => {
  return (
    <View style={styles.content}>
      {
          props.menu === 'GET' ?
          <Get 
            object = {props.object}
            fetchMethodGet = {props.fetchMethodGet}
            clearObject = {props.clearObject}
            isLoading = {props.isLoading}
          /> :
          props.menu === 'POST' ?
          <Post 
            isLoading = {props.isLoading}
            changeLoading = {props.changeLoading}
          /> :
          props.menu === 'PUT' ?
          <Put 
            object = {props.object}
            changeLoading = {props.changeLoading}
            fetchMethodGet = {props.fetchMethodGet}
            fetchMethodPut = {props.fetchMethodPut}
            isLoading = {props.isLoading}
          />  :
          <Text>DELETE</Text> 
      }
    </View>
  )
}

const styles = StyleSheet.create({
    content : {
      flex : 2.8
    },
  })