import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icons from '../../assets/icons';
import Card from '../../components/Card/Card';
import { InsertData, showData } from '../../SQLite/sqlite';
import { ModalView } from './ModalComp';
import styles from './styles';

const TabHomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState();
  const [floatingButtonVisibility, setFloatingButtonVisibility] =
    useState(true);
  const addDetails = value => {
    InsertData(value.noteValue, value.emailValue, value.passwordValue);
    setModalVisible(false);
    showData(setData);
  };
  const onCancel = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    showData(setData);
  }, []);

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
              id={item.id}
              note={item.note}
              email={item.email}
              password={item.password}
              showData={showData}
              setData={setData}
            />
          );
        }}
        keyExtractor={item => item.id}
        onScrollBeginDrag={() => setFloatingButtonVisibility(false)}
        onScrollEndDrag={() => setFloatingButtonVisibility(true)}
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

      <ModalView
        visible={modalVisible}
        title="Save"
        onAdd={addDetails}
        onCancel={onCancel}
      />
    </SafeAreaView>
  );
};

export default TabHomeScreen;
