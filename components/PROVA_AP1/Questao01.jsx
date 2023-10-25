import React from 'react';
import { Text, SectionList, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import data from './data'; 
import styles from './styles'; 

const Questao01 = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <IconButton
              icon={item.icon}
              color="white"
              size={24}
              style={styles.itemIcon}
            />
            <View>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemTime}>{item.time}</Text>
            </View>
            <Text style={styles.itemValue}>{item.value}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />
    </View>
  );
};

export default Questao01;
