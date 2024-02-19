import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Complete = ({ completedTodos }) => {
  return (
    <View>
      <Text>Completed Tasks:</Text>
      {/* {completedTodos.map((task) => (
        <Text key={task.id}>{task.name}</Text>
      ))} */}
    </View>
  )
}

export default Complete

const styles = StyleSheet.create({})