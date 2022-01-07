import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './src/HomeScreen';
import {Shapes} from './src/Examples/Shapes';
import {Portal} from './src/Examples/Portal';
import {TikTok} from './src/Examples/TiktokScroll';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '🎨 Skia',
          }}
        />
        <Stack.Screen
          name="Shapes"
          component={Shapes}
          options={{
            title: 'Shapes !!!',
          }}
        />
        <Stack.Screen
          name="Portal"
          component={Portal}
          options={{
            title: 'Doctor Strange Portal',
          }}
        />
        <Stack.Screen
          name="TikTok"
          component={TikTok}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
