import React from 'react'
import { Text , StyleSheet } from 'react-native'

export default Menu = ({ menu , selectMenu }) => {
    return (
        <Text 
          style={styles.menu}
          onPress={() => selectMenu(menu)}
        >
          {menu}
        </Text>
    )
}

const styles = StyleSheet.create({
    menu : {
      color : 'white',
      fontWeight : '500',
      fontSize : 17.5
    }
  });