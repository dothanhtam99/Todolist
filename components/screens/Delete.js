import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';


const Delete = () => {

    const deletedTasks = useSelector((state) => state.tasks.deletedTasks);

  return (
    <View>
      <Text>Delete</Text>
       {/* {deletedTasks.map((item) => (
                <View key={item.id}>
                    <Text>{item.name}</Text>
                </View>
            ))} */}
    </View>
  )
}

export default Delete

const styles = StyleSheet.create({})