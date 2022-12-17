import { StyleSheet } from 'react-native';
import colors from '@styles/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    marginLeft: 8,
    paddingVertical: 2,
    paddingHorizontal: 8,
    fontWeight: 'bold',
    fontSize: 12,
    color: colors.gray[200],
    backgroundColor: colors.gray[400],
    borderRadius: 10,
    textAlign: 'center',
  },
  created: {
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: 14,
  },
  completed: {
    color: colors.purple,
    fontWeight: 'bold',
    fontSize: 14,
  },
});
