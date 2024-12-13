import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {responsiveHeight} from '../../../utils/helpers';
import {Colors} from '../../common/Styles';
import Button from '../../packages/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {AuthScreenNavigationProp} from '../navigation/types';

const isTablet = DeviceInfo.isTablet();

const styles = StyleSheet.create({
  overAll: {
    backgroundColor: Colors.GRAY_95,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtn: {
    height: isTablet ? responsiveHeight(7) : 50,
  },
});

const MainScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationProp>();
  return (
    <View style={styles.overAll}>
      <Button
        title={'DigitalProducts'}
        onPress={() => navigation.navigate('DigitalProducts')}
        textColor={Colors.WHITE}
        backgroundColor={Colors.PRIMARY_COLOR}
      />
      <Button
        title={'About'}
        onPress={() => navigation.navigate('AboutScreen')}
        textColor={Colors.WHITE}
        backgroundColor={Colors.PRIMARY_COLOR}
      />
    </View>
  );
};

export default MainScreen;
