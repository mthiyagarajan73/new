import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import SvgBin from '../../icons/SvgBin';
import { Colors } from '../../common/Styles';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection:'row',
    backgroundColor: '#fff',
    marginBottom: 20,
    borderColor: Colors.GRAY_90,
    borderWidth: 1,
    borderRadius: 6,
    shadowColor: '#000', // iOS
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2, // iOS
    shadowRadius: 3.5, // iOS
    elevation: 5, // Android
  },
  input: {
    fontSize: 16,
  },
  lengthTxt:{
    fontSize: 16,
    // position:'absolute',
    // marginTop:-10,
    // marginLeft:-40,
    // marginRight:-100,
  },
});

type Props = {
  onChangeText: (prop: any) => void;
  icon?: boolean;
  value: string;
  height: number;
  maxLength?: number;
  disabled?: boolean;
  placeholder?: string;
};
const InputText = ({placeholder,maxLength, icon, onChangeText,value,height,disabled}: Props) => {
  return (
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input,{height:height}]} // Adjust padding if icon is present
          placeholder={placeholder}
          onChangeText={onChangeText}
          placeholderTextColor="#aaa"
          maxLength={maxLength}
          textAlignVertical="top"
          value={value}
          editable={!disabled}
        />{icon && (
              <TouchableOpacity style={{paddingTop:8,paddingLeft:90}}>
                  <SvgBin />
                  </TouchableOpacity>)}
                {maxLength && ( 
          <Text style={styles.lengthTxt}>{maxLength}</Text>
        )}
          </View>
  );
};

export default InputText;