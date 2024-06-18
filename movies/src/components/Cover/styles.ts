import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350,
  },
  gradient: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 24
  },
  classification:{
    color: "#FFF",
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: "#FE7300",
    width: 32,
    height: 32,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 5,
    margin: 7
  },
  title: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: 'bold'
  },
  type: {
    color: "#c4c4c4",
    fontSize: 16,
  },
  duration: {
    color: "#FFF",
    fontSize: 16,
    marginTop: 16
  },
});