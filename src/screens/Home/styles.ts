import { StyleSheet } from 'react-native';
import colors from '@styles/colors';

const page = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[600],
    alignItems: 'center',
  },
});

const header = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[700],
    height: 173,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 36,
    resizeMode: 'contain',
  },
});

const newTask = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: -27,
    marginBottom: 32,
    paddingHorizontal: 24,
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: colors.gray[500],
    color: colors.gray[100],
    borderRadius: 8,
    borderColor: colors.gray[700],
    borderWidth: 1,
    padding: 16,
    fontSize: 16,
    marginRight: 4,
  },
  button: {
    width: 54,
    height: 54,
    borderRadius: 8,
    backgroundColor: colors.blue_dark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.gray[100],
    fontSize: 18,
  },
});

export const styles = { ...page, header, newTask };
