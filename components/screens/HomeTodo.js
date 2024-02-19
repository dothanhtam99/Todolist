import { SafeAreaView } from 'react-native'
import React from 'react'
import TodoHeader from '../TodoHeader'
import TodoList from '../TodoList'

const HomeTodo = () => {
  return (
    <SafeAreaView>
        <TodoHeader />
        <TodoList />
    </SafeAreaView>
  )
}

export default HomeTodo

