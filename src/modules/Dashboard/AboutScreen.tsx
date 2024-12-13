import React, {useState} from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {responsiveHeight} from '../../../utils/helpers';
import {Colors} from '../../common/Styles';
import {useNavigation} from '@react-navigation/native';
import {AuthScreenNavigationProp} from '../navigation/types';
import SvgBack from '../../icons/SvgBack';
import InputText from '../../packages/InputText/InputText';
import Button from '../../packages/Button/Button';
import AddPhotos from './AddPhotos';

const styles = StyleSheet.create({
  overAll: {
    flex: 1,
    backgroundColor: Colors.GRAY_95,
    marginHorizontal: 24,
    marginTop: 24,
  },
  title: {
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 120,
    width: 32,
    height: 32,
    borderRadius: 30,
    backgroundColor: Colors.GRAY_90,
  },
  coverPhotos: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  nextButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const LoginScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationProp>();
  const [isName, setName] = useState('');
  const [isDescription, setDescription] = useState('');
  const [isPrice, setPrice] = useState('');

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.overAll}>
        <View style={styles.title}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <SvgBack />
          </TouchableOpacity>
          <Text> About </Text>
        </View>
        <InputText
          placeholder="Name"
          height={40}
          value={isName}
          onChangeText={setName}
        />
        <InputText
          height={80}
          value={isDescription}
          onChangeText={setDescription}
          placeholder="Description"
        />
        <View style={styles.coverPhotos}>
          <View>
            <Text style={styles.bold}>Cover</Text>
            <Text style={styles.bold}>Photos</Text>
          </View>
          <Text style={{paddingLeft: 64}}>(Upload upto 5 photos)</Text>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 24}}>
          <AddPhotos />
          <AddPhotos />
          <AddPhotos />
          <AddPhotos />
          <AddPhotos />
        </View>
        <View style={{marginVertical: 24}}>
          <Text style={styles.bold}>Price</Text>
          <InputText
            placeholder="$0.00"
            height={80}
            value={isPrice}
            onChangeText={setPrice}
          />
        </View>
        <View style={styles.nextButton}>
          <Button
            title={'Next'}
            onPress={() => navigation.navigate('Additionaldetails')}
            textColor={Colors.WHITE}
            backgroundColor={Colors.PRIMARY_COLOR}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
