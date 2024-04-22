import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text, View, StyleSheet} from 'react-native';
import {RootStackParamList} from '../App';
import React from 'react';

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = ({ route }: DetailsScreenProps) => {
  const { task } = route.params;

  return (
    <View style={styles.view}>
      <Text>Nome da Tarefa: {task.name}</Text>
      <Text>Criada em: {task.createdAt.toLocaleTimeString()} No Dia: {task.createdAt.toLocaleDateString()}</Text>
      <Text>Finalizada: {task.isFinished ? 'Sim' : 'Não'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical:15,
    borderWidth: 3,
    borderColor: "#DEB887",
    borderRadius: 4,
    marginHorizontal:12
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


export default Details;