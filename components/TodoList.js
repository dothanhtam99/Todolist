import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setTasks, deleteTask, completeTask } from './redux/taskSlice';



const TodoList = () => {

    const todos = useSelector(state => state.tasks.tasks);
    console.log(todos, "todooooo");
    const dispatch = useDispatch();

    const storeData = async (tasks) => {
        try {
          const jsonValue = JSON.stringify(tasks);
          await AsyncStorage.setItem('my-key', jsonValue);
        } catch (e) {
          //error
        }
      };
      const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('my-key');
          if (value !== null) {
            //your data
          }
        } catch (e) {
          //error
        }
      };

    const deleteItem = (id) => {
        dispatch(deleteTask({ id }));
    };

    const completeItem = (id) => {
        dispatch(completeTask({ id }));
    };

    const renderItem = ({ item }) => {

        const iconColor = item.completed ? '#00FFFF' : 'gray';

        return (
            <View style={styles.todoView}>
                <TouchableOpacity>
                    <AntDesign name="checkcircle" size={24} color={iconColor} onPress={() => completeItem(item.id)} />

                </TouchableOpacity>

                <Text style={{ color: item.completed ? '#00FFFF' : 'black' }}> {item.name} </Text>

                <TouchableOpacity
                    style={{}}
                    onPress={() => deleteItem(item.id)}
                >
                    <AntDesign name="delete" size={24} color="#FF4500" />
                </TouchableOpacity>

            </View>

        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={todos}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default TodoList;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10
    },
    todoView: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
        margin: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5
    }
});
