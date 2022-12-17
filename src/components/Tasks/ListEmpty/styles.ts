import { StyleSheet } from 'react-native';
import colors from '@styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    borderTopColor: colors.gray[400],
    borderTopWidth: 2,
    paddingHorizontal: 24,
    paddingVertical: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 80,
    color: colors.gray[400],
    marginBottom: 16,
  },
  text: {
    fontSize: 14,
    color: colors.gray[300],
  },
});
