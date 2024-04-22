import React, { useState } from "react";
import { TextInput, FlatList, Button, View, Text, ToastAndroid } from "react-native";
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
      return
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
    <View style={{ marginTop: 20 }}>
      <TextInput onChangeText={setTaskName} value={taskName} />
      <Button title="+" onPress={addTask} />
      <Button title="Clear" onPress={clearTasks} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
        <Text onPress={() => navigation.navigate('Details', { task: item })}>
      {"Nome da Tarefa: " + item.name}
    </Text>
  )}
/>
    </View>
  );
}

export default Home

