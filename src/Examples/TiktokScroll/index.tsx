/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Dimensions, FlatList} from 'react-native';
import {VideoItem} from './components/video-item';
import {data} from './data';
// import {HomeHeaderBar} from './components/header-bar/header-bar';

export const TikTok = () => {
  const {height} = Dimensions.get('screen');
  const [videosLoaded, setVideoLoaded] = useState<any[]>([]);
  const [paddingTop, setPaddingTop] = useState<number>(0);
  const [enabled, setEnabled] = useState<boolean>(true);
  const scrollRef = useRef<any>(null);
  const prePosition = useRef<number>(0);
  console.log(videosLoaded);

  // function
  const onMomentumScrollEnd = useCallback(
    ({nativeEvent: {contentOffset}}) => {
      if (
        contentOffset.y > prePosition.current &&
        prePosition.current > height * 2 &&
        videosLoaded[videosLoaded.length - 1].id < data.length
      ) {
        setPaddingTop(paddingTop + height);
        setVideoLoaded([
          ...videosLoaded.slice(1, 5),
          data[+videosLoaded[4]?.id],
        ]);
      }
      if (contentOffset.y < prePosition.current && videosLoaded[0].id > 1) {
        setPaddingTop(paddingTop - height);
        setVideoLoaded([
          data[+videosLoaded[0]?.id - 2],
          ...videosLoaded.slice(0, 4),
        ]);
      }
      setEnabled(true);
      prePosition.current = contentOffset.y;
    },
    [paddingTop, videosLoaded],
  );

  const onMomentumScrollBegin = useCallback(() => {
    setEnabled(false);
  }, []);

  const keyExtractor = useCallback(item => {
    return `${item?.id}`;
  }, []);

  const renderItem = useCallback(({item}) => {
    return <VideoItem data={item} />;
  }, []);

  // effect
  useEffect(() => {
    setVideoLoaded(data?.slice(0, 5));
  }, []);

  // const renderHeader = () => {
  //   return <HomeHeaderBar backArrow title="Home" />;
  // };

  // render
  return (
    <FlatList
      ref={scrollRef}
      data={videosLoaded}
      // StickyHeaderComponent={renderHeader}
      // stickyHeaderIndices={[0]}
      initialNumToRender={3}
      onMomentumScrollEnd={onMomentumScrollEnd}
      onMomentumScrollBegin={onMomentumScrollBegin}
      contentContainerStyle={{flexGrow: 1, paddingTop: paddingTop}}
      disableIntervalMomentum
      decelerationRate={'fast'}
      showsVerticalScrollIndicator={false}
      removeClippedSubviews={false}
      keyExtractor={keyExtractor}
      scrollEventThrottle={16}
      snapToInterval={height}
      renderItem={renderItem}
      bounces={false}
      scrollEnabled={enabled}
    />
  );
};
