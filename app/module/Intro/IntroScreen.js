import LottieView from 'lottie-react-native';
import React from 'react';
import { Text, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useDispatch } from 'react-redux';
import OnBoardAction from '../../redux/KeyRedux';
import { Colors } from '../../theme';
import styles from '../Intro/style';

const slides = [
  {
    key: '1',
    image: require('../../assets/lottie/hello.json'),
    title: ``,
  },
  {
    key: '2',
    image: require('../../assets/lottie/security_info.json'),
    title: `Keep your files Private.\nSecure them with most trusted encryption technique...`,
  },
];

const IntroScreen = () => {
  const dispatch = useDispatch();

  const renderSkipButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text style={styles.skipButtonStyle}>Skip</Text>
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text style={styles.doneButtonStyle}>Done</Text>
      </View>
    );
  };
  const renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text style={styles.nextButtonStyle}>Next</Text>
      </View>
    );
  };
  return (
    <>
      <AppIntroSlider
        renderItem={({ item }) => (
          <View style={styles.viewStyle}>
            <LottieView source={item.image} autoPlay loop />
            <View style={styles.textViewStyle}>
              <Text style={styles.textStyle}>{item.title}</Text>
            </View>
          </View>
        )}
        activeDotStyle={{ backgroundColor: Colors.themeColor }}
        data={slides}
        renderNextButton={renderNextButton}
        renderDoneButton={renderDoneButton}
        showSkipButton={true}
        renderSkipButton={renderSkipButton}
        dotStyle={styles.dotStyle}
        onDone={() => dispatch(OnBoardAction.onBoardingRequest())}
      />
    </>
  );
};

export default IntroScreen;
