import { Alert, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Tasks } from '@components/Tasks';
import { Task } from '@models/Task';
import { useState } from 'react';
import { styles } from './styles';
import colors from '@styles/colors';
import Logo from '@assets/logo.png';

export const Home = () => {
  const [taskContent, setTaskContent] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = () => {
    if (!taskContent) {
      return;
    }

    if (tasks.some((task) => task.content === taskContent)) {
      return Alert.alert('Tarefa existe!', 'Já existe um item na lista com o conteúdo idêntico a este.');
    }

    const task: Task = {
      id: `task-uuid-${tasks.length}`,
      content: taskContent,
      isChecked: false,
    };

    setTasks((prevState) => [...prevState, task]);
    setTaskContent('');
  };

  const handlePressTask = (taskId: string) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex((task) => task.id === taskId);

    newTasks[taskIndex].isChecked = !newTasks[taskIndex].isChecked;

    setTasks(newTasks);
  };

  const handleTaskDelete = (taskId: string) => {
    Alert.alert('Remover', 'Deseja realmente remover essa tarefa?', [
      {
        text: 'Sim',
        onPress: () => setTasks((prevState) => prevState.filter((task) => task.id !== taskId)),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header.container}>
        <Image source={Logo} style={styles.header.logo} />
      </View>

      <View style={styles.newTask.container}>
        <TextInput
          style={styles.newTask.input}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor={colors.gray[300]}
          onChangeText={setTaskContent}
          value={taskContent}
        />
        <TouchableOpacity style={styles.newTask.button} onPress={handleAddTask}>
          <Feather name='plus-circle' style={styles.newTask.buttonText} />
        </TouchableOpacity>
      </View>

      <Tasks list={tasks} onPressTask={handlePressTask} onTaskDelete={handleTaskDelete} />
    </View>
  );
};
