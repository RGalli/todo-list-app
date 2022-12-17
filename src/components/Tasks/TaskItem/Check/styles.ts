import { StyleSheet } from 'react-native';
import colors from '@styles/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[500],
  },
  checked: {
    width: 24,
    height: 24,
    backgroundColor: colors.purple_dark,
    borderRadius: 25,
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedText: {
    color: colors.gray[100],
    fontSize: 16,
    textAlign: 'center',
  },
  unchecked: {
    width: 24,
    height: 24,
    borderColor: colors.blue,
    borderWidth: 2,
    borderRadius: 50,
  },
});
