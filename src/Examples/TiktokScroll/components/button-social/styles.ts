import {StyleSheet} from 'react-native';

export const useButtonSocialStyle = () => {
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      marginRight: 10,
      marginTop: 350,
    },
    buttons: {
      alignItems: 'center',
      width: 50,
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 25,
      borderWidth: 2,
      borderColor: '#ffff',
    },
    plusBox: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: 'red',
      bottom: 10,
    },
    text: {
      color: '#ffff',
      marginTop: 5,
    },
    spacer: {
      height: 20,
    },
  });
  return {styles};
};
