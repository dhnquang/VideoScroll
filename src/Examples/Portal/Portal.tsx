/* eslint-disable react-native/no-inline-styles */
import {
  BlurMask,
  Canvas,
  DiscretePathEffect,
  Group,
  Image,
  Paint,
  Path,
  Skia,
  useTiming,
} from '@shopify/react-native-skia';
import React from 'react';
import {Dimensions, ImageBackground} from 'react-native';

const path = Skia.Path.MakeFromSVGString(
  'M30,500a180,180 0 1,0 360,0a180,180 0 1,0 -360,0',
)!;
export const Portal = () => {
  const progress = useTiming({to: 1, duration: 2000});
  const img = require('../../assets/alley.jpeg');
  const img2 = require('../../assets/alley2.jpeg');
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  return (
    <ImageBackground source={img} style={{flex: 1}}>
      <Canvas style={{flex: 1}}>
        <Paint style="stroke" strokeWidth={10}>
          <BlurMask sigma={10} style="normal" />
          <DiscretePathEffect deviation={6} length={3} />
        </Paint>
        <Path path={path} color={'#FF7800'} end={() => progress.value} />
        <Group clipPath={path}>
          {progress.value ? (
            <></>
          ) : (
            <Image
              source={img2}
              fit="contain"
              x={0}
              y={0}
              width={width}
              height={height}
            />
          )}
        </Group>
      </Canvas>
    </ImageBackground>
  );
};
