/* eslint-disable react-native/no-inline-styles */
import CryptoJS from 'crypto-js';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DocumentPicker, { types } from 'react-native-document-picker';
import RNFS from 'react-native-fs';
import { FlatList } from 'react-native-gesture-handler';
import {
  checkMultiple,
  PERMISSIONS,
  requestMultiple,
} from 'react-native-permissions';
import Icons from '../../assets/icons';
import styles from './styles';
const TabFilesScreen = ({ navigation }) => {
  const [fileResponse, setFileResponse] = useState([]);
  const [permiss, setPermiss] = useState(false);
  const [baseData, setBaseData] = useState('');
  const handleDocumentSelection = async () => {
    try {
      const response = await DocumentPicker.pickSingle({
        presentationStyle: 'fullScreen',
        type: [
          types.audio,
          types.doc,
          types.csv,
          types.docx,
          types.pdf,
          types.images,
          types.plainText,
        ],
        mode: 'open',
      });
      setFileResponse(response);
      const encryptFolder = RNFS.ExternalDirectoryPath + '/Encrypt';
      RNFS.mkdir(encryptFolder).then(() => {
        console.log('folder');
      });
      const decryptFolder = RNFS.ExternalDirectoryPath + '/Decrypt';
      RNFS.mkdir(decryptFolder).then(() => {
        console.log('folder');
      });

      RNFS.readFile(response.uri, 'base64')
        .then(item => {
          let encryptFile = CryptoJS.AES.encrypt(item, '123').toString();
          const path =
            RNFS.ExternalDirectoryPath + '/Encrypt' + `/${response.name}`;
          RNFS.writeFile(path, encryptFile, 'base64')
            .then(success => {
              console.log(item);
              setBaseData([...baseData, response]);
              Alert.alert('File Successfully encrypted');
            })
            .catch(() => {
              Alert.alert(`File can't be encrypted`);
            });
        })
        .catch(e => {
          Alert.alert(`File can't be encrypted`);
        });
      Platform.OS !== 'ios'
        ? RNFS.readDir(`${RNFS.ExternalDirectoryPath}/Encrypt`).then(item => {
            setBaseData(item);
          })
        : null;
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    Platform.OS !== 'ios'
      ? RNFS.readDir(`${RNFS.ExternalDirectoryPath}/Encrypt`).then(item => {
          setBaseData(item);
        })
      : null;
  }, []);
  useEffect(() => {
    Platform.OS !== 'ios'
      ? checkMultiple([
          PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
          PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
        ]).then(res => {
          if (res.DENIED === 'denied') {
            requestMultiple([
              PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
              PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
            ]).then(setPermiss(true));
          }
        })
      : null;
  }, []);
  const decryptFunction = filename => {
    console.log(RNFS.ExternalDirectoryPath);
    const path = `${RNFS.ExternalDirectoryPath}/Encrypt/${filename}`;
    console.log(path);
    RNFS.readFile(path, 'base64')
      .then(item => {
        let decryptFile = CryptoJS.AES.decrypt(item, '123').toString(
          CryptoJS.enc.Utf8,
        );

        RNFS.writeFile(
          `${RNFS.ExternalDirectoryPath}/Encrypt/${filename}`,
          decryptFile,
          'base64',
        )
          .then(success => {
            Alert.alert('File Successfully Decrypted');
          })
          .catch(() => {
            Alert.alert(`File can't be Decrypted`);
          });
      })
      .catch(e => {
        Alert.alert(`File can't be Decrypted`);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Files</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={baseData}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <View style={styles.fileViewContainer}>
              <Text
                style={styles.text}
                numberOfLines={1}
                ellipsizeMode="middle">
                {item?.name}
              </Text>
              <TouchableOpacity
                style={styles.imageContainer}
                onPress={() => {
                  decryptFunction(item.name);
                }}>
                <Image source={Icons.decryption} style={styles.image} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => handleDocumentSelection()}>
        <Image source={Icons.addVault} style={styles.addIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default TabFilesScreen;
