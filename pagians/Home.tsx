import React, { useState } from "react";
import { TextInput, FlatList, Button, View, Text, StyleSheet } from "react-native";
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App'


export type Task = {
  name: string;
  createdAt: Date;
  isFinished: boolean;
};

const Home = ({navigation}: NativeStackScreenProps<RootStackParamList>) => {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    if(taskName.trim().length < 4 || taskName.trim().length == 0){
      alert('O nome da tarefa deve conter no minimo 4 caractéres')
      return;
    }

    const newTask: Task = {
        name: taskName,
        createdAt: new Date(), 
        isFinished: false,
      };
    setTasks([...tasks, newTask]);
    setTaskName("");
  };

  const clearTasks = () => {
    setTasks([]);
    setTaskName("");
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={setTaskName} value={taskName} />
      <Button title="Add +" onPress={addTask} color="#ADD8E6"/>
      <Button title="Clear -" onPress={clearTasks} color="#F08080"/>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
        <Text style={styles.task} onPress={() => navigation.navigate('Details', { task: item })}>
      {"Nome da Tarefa: " + item.name}
    </Text>
  )}
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  input: {
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  task: {
    marginBottom: 5,
    marginTop:5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default Home;

