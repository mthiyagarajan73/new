import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  textColor: string;
  backgroundColor: string;
};
const CustomButton = ({
  title, onPress, backgroundColor, textColor, disabled
}: Props) => {

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: disabled ? '#d9d9d9' : backgroundColor },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.buttonText, { color: disabled ? '#aaa' : textColor }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width:200 //need to change 
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

