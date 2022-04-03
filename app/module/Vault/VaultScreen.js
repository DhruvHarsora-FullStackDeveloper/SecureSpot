import React, { useState } from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
  View,
  Text,
} from 'react-native';
import Icons from '../../assets/icons';
import Card from '../../components/Card/Card';
import { ModalView } from './ModalComp';
import styles from './styles';

const VaultScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [floatingButtonVisibility, setFloatingButtonVisibility] =
    useState(true);
  const addDetails = value => {
    setData([...data, value]);
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Vault</Text>
      </View>
      <FlatList
        data={data}
        ListEmptyComponent={() => (
          <Text style={styles.noDataFoundStyle}>No Data Found....!!</Text>
        )}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Card
              note={item.noteValue}
              email={item.emailValue}
              password={item.passwordValue}
            />
          );
        }}
        keyExtractor={item => item.a}
        onScrollBeginDrag={() => setFloatingButtonVisibility(false)}
        onScrollEndDrag={() => setFloatingButtonVisibility(true)}
        onScrollToTop
      />
      {floatingButtonVisibility ? (
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setModalVisible(!modalVisible)}>
          <Image source={Icons.addVault} style={styles.addIcon} />
        </TouchableOpacity>
      ) : (
        <></>
      )}

      <ModalView visible={modalVisible} title="Save" onAdd={addDetails} />
    </SafeAreaView>
  );
};

export default VaultScreen;
