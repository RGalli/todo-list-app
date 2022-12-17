import { StyleSheet } from 'react-native';
import colors from '@styles/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.gray[500],
    padding: 12,
    borderWidth: 1,
    borderColor: colors.gray[400],
    borderRadius: 8,
    marginBottom: 8,
  },
  text: {
    flex: 1,
    color: colors.gray[100],
    fontSize: 14,
    marginHorizontal: 8,
    textAlign: 'justify',
  },
  markedText: {
    flex: 1,
    color: colors.gray[300],
    fontSize: 14,
    marginHorizontal: 8,
    textAlign: 'justify',
    textDecorationLine: 'line-through',
  },
  button: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: colors.gray[300],
  },
});
