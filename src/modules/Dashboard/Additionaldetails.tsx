import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {responsiveHeight} from '../../../utils/helpers';
import {Colors} from '../../common/Styles';
import {useNavigation} from '@react-navigation/native';
import {AuthScreenNavigationProp} from '../navigation/types';
import SvgBack from '../../icons/SvgBack';
import InputText from '../../packages/InputText/InputText';
import SvgBin from '../../icons/SvgBin';
import Button from '../../packages/Button/Button';
import DropDown from '../../packages/DropDown/DropDown';

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
  nextButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:40,
    verticalAlign:'bottom',
  },
});

const LoginScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationProp>();

  return (
    <View style={styles.overAll}>
      <View style={styles.title}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <SvgBack />
        </TouchableOpacity>
        <View>
          <Text> Additional </Text>
          <Text> Details </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>Benefits</Text>
        <TouchableOpacity style={{}}>
          <Text style={{color: Colors.PRIMARY_COLOR}}>+ Add</Text>
        </TouchableOpacity>
      </View>
      <View>
        <InputText height={40} value={''} onChangeText={() => ''} disabled placeholder={'Avoid talking about politics'} />
        <InputText height={40} value={''} onChangeText={() => ''} disabled placeholder={'Avoid talking about religion'}/>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>Additional details</Text>
        <TouchableOpacity style={{}}>
          <Text style={{color: Colors.PRIMARY_COLOR}}>+ Add</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',marginVertical:10,}}>
        <View style={{width:'45%',marginRight:10}}>
      <InputText height={40} value={''} onChangeText={() => ''} />
      </View>
      <View style={{width:'50%',marginLeft:10,}}>
      <InputText icon height={40} value={''} onChangeText={() => ''} />
      </View>
      </View>
      <DropDown
       placeholder={'Category'} 
       open={false} 
       value={undefined} 
       items={[]} 
       setOpen={function (prop: any): void {
        throw new Error('Function not implemented.');
      } } 
      setValue={function (prop: any): void {
        throw new Error('Function not implemented.');
      } } />
      <View style={styles.nextButton}>
        <Button
          title={'Next'}
          onPress={() => navigation.navigate('Additionaldetails')}
          textColor={Colors.WHITE}
          backgroundColor={Colors.PRIMARY_COLOR}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
