import {NavigationContainer} from '@react-navigation/native';
import React, {ReactNode} from 'react';
import {RootSiblingParent} from 'react-native-root-siblings';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, { persistor } from '../../redux/store';

type Props = {
  children: ReactNode;
};

const AppProvider = ({children}: Props) => {
  return (
    <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            <RootSiblingParent>
              <NavigationContainer>{children}</NavigationContainer>
            </RootSiblingParent>
          </PersistGate>
        </Provider>
    </SafeAreaProvider>
  );
};

export default AppProvider;
