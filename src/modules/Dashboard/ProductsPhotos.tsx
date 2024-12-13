import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View,Image, Text, TouchableOpacity} from 'react-native';
import { AuthScreenNavigationProp } from '../navigation/types';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  image: {
    width: 350,
    height: 350,
  },
  content:{
fontWeight:'bold',
marginTop:10,
  },
});

  const ProductsPhotos = () => {
      const navigation = useNavigation<AuthScreenNavigationProp>();
  return (<>
    <View >
      <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('ProductView')}>
      <Image 
        source={require('../../../assets/image1.jpeg')}
        style={styles.image}
      />
      </TouchableOpacity>
    </View>
      <Text style={styles.content} >Urban Classics vintage flared jeans in midstone washed </Text>
      <View >
      <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('ProductView')}>
      <Image 
        source={require('../../../assets/image2.jpeg')}
        style={styles.image}
      />
      </TouchableOpacity>
    </View>
      <Text style={styles.content} >Urban Classics vintage flared jeans in midstone washed </Text>
      </>
  );
};

export default ProductsPhotos;
