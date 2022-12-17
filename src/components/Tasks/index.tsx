import { View, FlatList } from 'react-native';
import { styles } from './styles';
import { Info } from './Info';
import { TaskItem } from './TaskItem';
import { Task } from '@models/Task';
import { useMemo } from 'react';
import { ListEmpty } from './ListEmpty';

type TasksProps = {
  list: Task[];
  onTaskDelete: (taskId: string) => void;
  onPressTask: (taskId: string) => void;
};

export const Tasks = ({ list, onPressTask, onTaskDelete }: TasksProps) => {
  const completedTasksAmount = useMemo(() => list.filter((task) => task.isChecked).length, [list]);

  return (
    <View style={styles.container}>
      <Info createdTasksAmount={list.length} completedTasksAmount={completedTasksAmount} />

      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            key={item.id}
            content={item.content}
            isChecked={item.isChecked}
            onPress={() => onPressTask(item.id)}
            onDelete={() => onTaskDelete(item.id)}
          />
        )}
        ListEmptyComponent={() => <ListEmpty />}
      />
    </View>
  );
};
