import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Text from '../../packages/Text/Text';
import {Colors} from '../../common/Styles';
import SvgBack from '../../icons/SvgBack';
import {useNavigation} from '@react-navigation/native';
import {AuthScreenNavigationProp} from '../navigation/types';
import ProductsPhotos from './ProductsPhotos';

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
    marginRight: 100,
    width: 32,
    height: 32,
    borderRadius: 30,
    backgroundColor: Colors.GRAY_90,
  },
});

const DigitalProducts = () => {
  const navigation = useNavigation<AuthScreenNavigationProp>();

  return (
    <View style={styles.overAll}>
      <View style={styles.title}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <SvgBack />
        </TouchableOpacity>
        <Text> Digital Products </Text>
      </View>
      <ScrollView>
        <ProductsPhotos />
      </ScrollView>
    </View>
  );
};

export default DigitalProducts;
