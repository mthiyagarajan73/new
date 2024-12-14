import React from 'react';
import { Text, TextStyle, StyleSheet } from 'react-native';

interface CustomTextProps {
  children: React.ReactNode;  
  style?: TextStyle;  
  fontSize?: number;  
  fontFamily: 'Poppins-Regular', 
  fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'; // Optional font weight
}

const CustomText: React.FC<CustomTextProps> = ({
  children,
  style,
  fontSize = 16,
  fontWeight = 'normal',
}) => {
  return (
    <Text style={[styles.text, { fontSize, fontWeight }, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black', 
    fontFamily: 'Poppins-Regular', 
  },
});

export default Text;
