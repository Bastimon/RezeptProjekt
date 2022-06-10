/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  useColorScheme,
  View,
} from 'react-native';

import { Switch } from 'react-native-switch';

import { CSSProperties } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { RezeptGenerator } from './rezeptGenerator';
import { foodEmojis } from './data/foodEmojis';

const Generator = new RezeptGenerator();

const App = () => {
  let isVegan = false;
  const [displayRecipe, setRecipe] = useState('');
  const [displayTitle, setTitle] = useState('');
  const [displayZutatenListe, setZutatenListe] = useState('');

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const sectionTitle: StyleProp<TextStyle> = {
    fontSize: 24,
    fontWeight: '600',
  };

  const sectionDescription: StyleProp<TextStyle> = {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  };

  const myStyles: CSSProperties = {
    position: 'absolute',
  };

  /**
   * handleGenerate
   */
  function handleGenerate(): void {
    Generator.init(isEnabled);
    let title = Generator.generateTitle();
    let zutatenListe = Generator.generateZutatenliste();
    let recipe = Generator.generateRezept();
    setTitle(title);
    setZutatenListe(zutatenListe);
    setRecipe(recipe);
    setButtonEmoji(foodEmojis[Math.floor(Math.random() * foodEmojis.length)]);
  }
  const [isEnabled, setIsEnabled] = useState(false);
  const [buttonEmoji, setButtonEmoji] = useState('🥙');
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    console.log('ToggleSwitch: ' + isEnabled);
    isVegan = isEnabled;
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Switch
            backgroundActive={'green'}
            backgroundInactive={'gray'}
            circleActiveColor={'#30a566'}
            circleInActiveColor={'#000000'}
            onValueChange={toggleSwitch}
            value={isEnabled}
            activeText={'🌱'}
            inActiveText={'🥩'}
          />
        </View>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>

          <Button title={buttonEmoji} onPress={handleGenerate}></Button>
          <Text style={sectionTitle}>{displayTitle}</Text>
          <Text style={sectionDescription}>{displayZutatenListe}</Text>
          <Text style={sectionDescription}>{displayRecipe}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
