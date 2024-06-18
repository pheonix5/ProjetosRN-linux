import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32
  },
  image:{
    width: 160,
    height: 160,
    borderRadius: 32
  },
  background:{
    width: '100%',
    height: 500,
    backgroundColor: "#000",
    borderRadius: 18
  },
  company:{
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold'
  },
  id:{
    color: '#FFF',
    fontSize: 16,
  },
  header:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
    paddingTop: 54,
  },
  content:{

  },
  name:{
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 24,
  },
  email:{
    color: '#CECECE',
    fontSize: 16,
  }

});