import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, InteractionManager } from 'react-native';

const styles = StyleSheet.create({
  overlay: {
    zIndex: 1000,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 7.5, 
    margin: 5, 
  },
  dot1: {
    backgroundColor: '#caf929',
  },
  dot2: {
    backgroundColor: '#FFBF00',
  },
  dot3: {
    backgroundColor: '#ff80bf',
  },
  dot4: {
    backgroundColor: '#9999ff',
  },
});

type Props = {
  testID?: string;
};

const Loader = ({ testID }: Props) => {
  const bounce1 = useRef(new Animated.Value(0)).current;
  const bounce2 = useRef(new Animated.Value(0)).current;
  const bounce3 = useRef(new Animated.Value(0)).current;
  const bounce4 = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    InteractionManager.runAfterInteractions(() => {

      Animated.loop(
        Animated.parallel([
          Animated.sequence([
            Animated.timing(bounce1, {
              toValue: 1,
              duration: 900,
              useNativeDriver: true,
            }),
            Animated.timing(bounce1, {
              toValue: 0,
              duration: 900,
              useNativeDriver: true,
            })
          ]),

          Animated.sequence([
            Animated.timing(bounce2, {
              toValue: 1,
              duration: 900,
              delay: 300,
              useNativeDriver: true,
            }),
            Animated.timing(bounce2, {
              toValue: 0,
              duration: 900,
              useNativeDriver: true,
            })
          ]),

          Animated.sequence([
            Animated.timing(bounce3, {
              toValue: 1,
              duration: 900,
              delay: 600,
              useNativeDriver: true,
            }),
            Animated.timing(bounce3, {
              toValue: 0,
              duration: 900,
              useNativeDriver: true,
            }),
          ]),

          Animated.sequence([
            Animated.timing(bounce4, {
              toValue: 1,
              duration: 900,
              delay: 900,
              useNativeDriver: true,
            }),
            Animated.timing(bounce4, {
              toValue: 0,
              duration: 900,
              useNativeDriver: true,
            })
          ]),
        ]),
        
      ).start();
    })
  };

  useEffect(() => {
    startAnimation(); 
  }, []);

  const animatedStyle = (bounce: Animated.Value, ) => ({
    transform: [
      {
        translateY: bounce.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -30], 
        }),
      },
    ],
  });

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <Animated.View style={[styles.dot, styles.dot1, animatedStyle(bounce1)]} />
        <Animated.View style={[styles.dot, styles.dot2, animatedStyle(bounce2)]} />
        <Animated.View style={[styles.dot, styles.dot3, animatedStyle(bounce3)]} />
        <Animated.View style={[styles.dot, styles.dot4, animatedStyle(bounce4)]} />
      </View>
    </View>
  );
};

export default Loader;
