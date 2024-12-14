import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Text from '../../packages/Text/Text';
import {Colors} from '../../common/Styles';
import {useNavigation} from '@react-navigation/native';
import {AuthScreenNavigationProp} from '../navigation/types';
import SvgBack from '../../icons/SvgBack';
import Button from '../../packages/Button/Button';
import SvgProfilePic from '../../icons/SvgProfilePic';
import AreYouSureModal from '../../common/AreYouSureModalnew';

const styles = StyleSheet.create({
  overAll: {
    flex: 1,
    backgroundColor: Colors.GRAY_95,
  },
  container: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  buyButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  price: {
    backgroundColor: Colors.BLACK,
    color: Colors.WHITE,
    width: 80,
    height: 30,
    borderRadius: 4,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 10,
  },
  image: {
    width: 400,
    height: 200,
  },
  backButton: {
    marginLeft: 20,
    width: 32,
    height: 32,
    borderRadius: 30,
    backgroundColor: Colors.GRAY_90,
    marginVertical:10,
  },
});

const LoginScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationProp>();
  const [openModal, setModal] = useState(false);

  return (
    <>
      <AreYouSureModal
        open={openModal}
        handleNo={() => setModal(false)}
        handleYes={() => navigation.navigate('MainScreen')}
        title={'Are You Sure to Purchase'}
      />
      <View style={styles.overAll}>
      <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <SvgBack />
          </TouchableOpacity>
        <Image
          source={require('../../../assets/image3.jpg')}
          style={styles.image}
        />
        <View style={styles.container}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <SvgProfilePic />
            <Text style={{marginLeft: 20}}>Amos Burton</Text>
          </View>
          <View
            style={{
              marginTop: 10,
              borderColor: Colors.GRAY_90,
              borderWidth: 1,
            }}>
            <Text style={{marginTop: 10}}> Wedding photographer in london</Text>
            <Text style={styles.price}> $1495.00</Text>
            <Text style={{marginTop: 10}}>
              {' '}
              I have worked with several lovely couples getting married in the
              past, and I always put my heart...
            </Text>
          </View>
          <View
            style={{
              borderColor: Colors.GRAY_90,
              borderWidth: 1,
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text> Aerial drone footage</Text>
            <Text style={{fontWeight: 'bold'}}> Yes</Text>
          </View>
          <View
            style={{
              borderColor: Colors.GRAY_90,
              borderWidth: 1,
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text> Express turnaround time</Text>
            <Text style={{fontWeight: 'bold'}}> 14 days</Text>
          </View>
          <Text style={{marginVertical: 10, fontWeight: 'bold'}}>
            {' '}
            Benefits
          </Text>
          <Text
            style={{padding: 4, borderColor: Colors.GRAY_90, borderWidth: 1}}>
            {' '}
            Actionable tips: I give you actionable tips & teach you how to do
            SEO.
          </Text>
          <Text
            style={{padding: 4, borderColor: Colors.GRAY_90, borderWidth: 1}}>
            {' '}
            Learn WHY: Most SEO resources teaches you how to do things. I cover
            both HOW and WHY.
          </Text>
          <Text
            style={{padding: 4, borderColor: Colors.GRAY_90, borderWidth: 1}}>
            {' '}
            From Beginner to Advanced SEO: I cover SEO activities both for
            beginners and advanced SEO.
          </Text>
          <View style={styles.buyButton}>
            <Button
              title={'Buy for $199'}
              onPress={() => setModal(true)}
              textColor={Colors.WHITE}
              backgroundColor={Colors.PRIMARY_COLOR}
            />
          </View>
          </View>
      </View>
    </>
  );
};

export default LoginScreen;
