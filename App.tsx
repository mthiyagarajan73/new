import React from 'react';
import {NetworkProvider} from 'react-native-offline';
import AppProvider from './src/modules/navigation/AppProvider';
import AppLayout from './src/modules/navigation/AppLayout';

const App = () => {

  return (
    <NetworkProvider>
      <AppProvider>
        <AppLayout />
      </AppProvider>
    </NetworkProvider>
  );
};

export default App;
