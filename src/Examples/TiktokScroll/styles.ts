import {StyleSheet} from 'react-native';

export const useStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    videoContainer: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      backgroundColor: 'black',
    },
    username: {
      fontSize: 20,
      color: '#ffff',
      fontWeight: '800',
    },
    socialBox: {
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    text: {
      color: '#ffff',
      marginLeft: 20,
      marginTop: 10,
      fontSize: 16,
    },
  });
  return {styles};
};
