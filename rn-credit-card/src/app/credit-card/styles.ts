import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 200,
    backgroundColor: '#cecece',
    borderRadius: 12,
    padding: 24,
    justifyContent: 'space-between',
  },
  front: {
    backgroundColor: '#DAE1E7',
    backfaceVisibility: 'hidden',
    position: 'absolute',
  },
  back: {
    backgroundColor: '#bac1c7',
    backfaceVisibility: 'hidden',
  },
  circle:{
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  logo:{
    backgroundColor: '#8795a0'
  },
  name:{
    fontSize: 16,
    fontWeight: 'bold'
  },
  header:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  footer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flag:{
    flexDirection: 'row',
    gap: -12
  },
  red:{
    backgroundColor: 'red'
  },
  orange:{
    backgroundColor: 'orange'
  },
  label:{
    fontSize: 14,
    color: '#4F5F64'
  },
  value:{
    fontSize: 16,
    fontWeight: 'bold'
  }
});