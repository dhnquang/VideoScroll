import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {useButtonSocialStyle} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Ionicons';
import Share from 'react-native-vector-icons/FontAwesome5';

export const ButtonSocial = () => {
  const {styles} = useButtonSocialStyle();

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Image
          source={require('../../../../assets/avatar.png')}
          resizeMode="contain"
          style={styles.image}
        />
        <View style={styles.plusBox}>
          <Icon name="plus" color="#ffff" size={14} />
        </View>
        <View style={styles.spacer} />
        <Icon name="heart" color="red" size={35} />
        <Text style={styles.text}>33,1k</Text>
        <View style={styles.spacer} />
        <Icons name="chatbubble-ellipses" size={35} color="#ffff" />
        <Text style={styles.text}>300</Text>
        <View style={styles.spacer} />
        <Share name="share" size={35} color="#ffff" />
        <Text style={styles.text}>300</Text>
      </View>
    </View>
  );
};
