import { View, Text } from 'react-native';
import { styles } from './styles';

type InfoProps = {
  completedTasksAmount: number;
  createdTasksAmount: number;
};

export const Info = ({ createdTasksAmount, completedTasksAmount }: InfoProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.created}>Criadas</Text>
        <Text style={styles.badge}>{createdTasksAmount}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.completed}>Completadas</Text>
        <Text style={styles.badge}>{completedTasksAmount}</Text>
      </View>
    </View>
  );
};
