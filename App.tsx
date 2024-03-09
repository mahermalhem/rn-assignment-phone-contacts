import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import NavStart from './src/NavStart';

function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavStart/>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({

});

export default App;
