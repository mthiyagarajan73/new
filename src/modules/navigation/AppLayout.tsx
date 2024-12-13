import React from 'react';
import CustomStatusBar from './CustomStatusBar';
import MainNavigator from './MainNavigator';

const AppLayout = () => {

  return (
    <>
      <CustomStatusBar
        barStyle="dark-content"
        backgroundColor={'#fff'}
      />
     <MainNavigator />
    </>
  );
};

export default AppLayout;
