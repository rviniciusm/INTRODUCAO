import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  itemText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 8,
  },
  itemIcon: {
    fontSize: 24,
    color: 'white',
  },
  itemTime: {
    color: 'white',
    fontSize: 14,
    marginLeft: 8,
  },
  itemValue: {
    color: 'white',
    fontSize: 18,
    marginLeft: 'auto',
  },
});
