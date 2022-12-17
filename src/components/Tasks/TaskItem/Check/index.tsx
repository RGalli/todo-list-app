import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';

type CheckProps = {
  isChecked: boolean;
};

export const Check = ({ isChecked }: CheckProps) => {
  return (
    <View style={styles.container}>
      {isChecked ? (
        <Text style={styles.checked}>
          <Feather name='check' style={styles.checkedText} />
        </Text>
      ) : (
        <Text style={styles.unchecked}></Text>
      )}
    </View>
  );
};
