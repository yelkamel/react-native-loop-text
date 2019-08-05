/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import LoopText from './src/LoopText';
import LoopTextClass from './src/LoopTextClass';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body}>
        <View>
          <Text>== Smooth Text Animation ==</Text>
          <View style={styles.row}>
            <Text>Functionnal Component :</Text>
            <LoopText textArray={['test sample 1', 'test sample 2', 'test sample 3']} />
          </View>
          <View style={styles.row}>
            <Text >Class Component :</Text>
            <LoopTextClass textArray={['test sample 1', 'test sample 2']} />
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
