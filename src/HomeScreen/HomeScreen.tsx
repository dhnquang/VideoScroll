import React from 'react';
import {StyleSheet, View} from 'react-native';

import {HomeScreenButton} from './HomeScreenButton';

export const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <HomeScreenButton
        title="Shapes"
        description="Shapes examples"
        route="Shapes"
      />
      <HomeScreenButton
        title="Portal"
        description="Doctor Strange Portal"
        route="Portal"
      />
      <HomeScreenButton
        title="TikTok"
        description="Video Sroll"
        route="TikTok"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
