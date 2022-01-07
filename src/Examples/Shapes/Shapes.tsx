/* eslint-disable react-native/no-inline-styles */
import {
  Canvas,
  Circle,
  Group,
  PaintStyle,
  Path,
  Skia,
  useTiming,
} from '@shopify/react-native-skia';
import React from 'react';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const SIZE = width;
const scale = 0.59;
const center = {x: SIZE / 2, y: SIZE / 2};
const basePaint = Skia.Paint();
basePaint.setAntiAlias(true);
basePaint.setColor(Skia.Color('#61DAFB'));

const strokePaint = basePaint.copy();
strokePaint.setStyle(PaintStyle.Stroke);
strokePaint.setStrokeWidth(15);
strokePaint.setPathEffect(Skia.PathEffect.MakeDiscrete(10, 4, 0));
const path = Skia.Path.Make();
path.moveTo(128, 0);
path.lineTo(168, 80);
path.lineTo(256, 93);
path.lineTo(192, 155);
path.lineTo(207, 244);
path.lineTo(128, 202);
path.lineTo(49, 244);
path.lineTo(64, 155);
path.lineTo(0, 93);
path.lineTo(88, 80);
path.lineTo(128, 0);
path.close();

export const Shapes = () => {
  const progress = useTiming({to: 1, duration: 2000});
  return (
    <Canvas style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Group>
        <Circle c={center} r={200} color="red" />
        <Circle c={center} r={160} color="#C0C0C0" />
        <Circle c={center} r={120} color="red" />
        <Circle c={center} r={80} color="#00008B" />
        <Group transform={[{translateX: 138}, {translateY: 136}, {scale}]}>
          <Path path={path} color={'#D3D3D3'} end={() => progress.value} />
        </Group>
      </Group>
    </Canvas>
  );
};
