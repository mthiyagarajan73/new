import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../common/Styles';
import SvgPlus from '../../icons/SvgPlus';

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    borderRadius: 4,
    backgroundColor: Colors.GRAY_90,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
});

const AddPhotos = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <SvgPlus />
    </TouchableOpacity>
  );
};

export default AddPhotos;
