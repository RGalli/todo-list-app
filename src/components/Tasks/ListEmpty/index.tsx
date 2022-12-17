import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';

export const ListEmpty = () => {
  return (
    <View style={styles.container}>
      <Feather name='clipboard' style={styles.icon} />
      <Text style={{ ...styles.text, fontWeight: 'bold' }}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.text}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  );
};
