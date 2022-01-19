import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

export const useVideoStyle = () => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const styles = StyleSheet.create({
    container: {
      width: width,
      height: height,
    },
    videoContainer: {
      width: width,
      height: height,
      position: 'absolute',
      backgroundColor: 'black',
    },
    username: {
      fontSize: 20,
      color: '#ffff',
      fontWeight: '800',
    },
    socialBox: {
      marginTop: 100,
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
