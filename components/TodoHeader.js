import { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from './redux/taskSlice';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function TodoHeader() {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);


  const onSubmitTask = () => {
    if (todo.trim().length === 0) {
      Alert.alert("Nhập task di");
      setTodo(" ");
      return;
    };

    dispatch(
      addTask({
        task: todo

      })
    );

    setTodo(" ");
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: '500' }}>Todo app!</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder='Nhập'
        onChangeText={(text) => setTodo(text)}
        value={todo}
      />
      <TouchableOpacity
        style={styles.btnAdd}
        onPress={onSubmitTask}
      >
        <Text style={{ textAlign: 'center', color: '#20B2AA', fontSize: 16, fontWeight: '600' }}>
          New Task
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: windowWidth,
    marginTop: 36,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputStyle: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: '100%',
    borderRadius: 10,
  },
  btnAdd: {
    width: '100%',
    backgroundColor: '#AFEEEE',
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    margin: 10,
    borderRadius: 10
  }
});
