import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import Icon from 'react-native-vector-icons/AntDesign';
import {useStyleHomeHeaderBar} from './styles';
import {HomeHeaderBarProps} from './types';

export const HomeHeaderBar = (props: HomeHeaderBarProps) => {
  const {styles, insets} = useStyleHomeHeaderBar();
  const navigation = useNavigation();

  const container = StyleSheet.flatten([
    props.safeAreaTop && {paddingTop: insets.top},
    props.enableShadow ? styles.shadow : {},
  ]);

  return (
    <View style={container}>
      <View style={styles.header}>
        <View style={styles.headerBox}>
          <View style={styles.titleBox}>
            {/* Back Arrow */}
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={styles.backArrow}>
              <Icon name="arrowleft" size={24} color="#ffff" />
            </TouchableOpacity>

            {/* Header Title */}
            <Text style={styles.title}>{props.title}</Text>
          </View>
          {/* Right Icon */}
          <TouchableOpacity onPress={props.onPressSearch}>
            <Icon name="search1" size={24} color="#ffff" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
