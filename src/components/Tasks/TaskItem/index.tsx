import { TouchableOpacity, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Check } from './Check';
import { styles } from './styles';

type TaskProps = {
  isChecked: boolean;
  content: string;
  onDelete: () => void;
  onPress: () => void;
};

export const TaskItem = ({ isChecked, content, onPress, onDelete }: TaskProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.5}>
      <Check isChecked={isChecked} />

      <Text style={isChecked ? styles.markedText : styles.text}>{content}</Text>

      <TouchableOpacity style={styles.button} onPress={onDelete}>
        <Feather name='trash-2' style={styles.buttonText} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
