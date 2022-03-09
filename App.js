
import React from 'react';

import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import FlatListSample from './src/listSample/FlatListSample';
import TemplateSample1 from './src/templateSample/TemplateSample1';
import TouchableSample from './src/touchableSample/TouchableSample';



const App = () => {

  return (
   <SafeAreaView style={{flex:1}}>
     <TemplateSample1></TemplateSample1>
     {/* <FlatListSample></FlatListSample> */}
   </SafeAreaView>
  );
};


export default App;
