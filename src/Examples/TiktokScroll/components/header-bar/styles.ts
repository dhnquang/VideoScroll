import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const useStyleHomeHeaderBar = () => {
  const insets = useSafeAreaInsets();
  const styles = StyleSheet.create({
    shadow: {
      backgroundColor: '#ffff',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.03,
      shadowRadius: 6,

      elevation: 3,
    },
    header: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: 65,
    },
    headerBox: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      justifyContent: 'space-between',
    },
    titleBox: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      marginRight: 20,
    },
    image: {
      marginLeft: 20,
    },
    backArrow: {
      marginLeft: 20,
    },
    title: {
      marginLeft: 20,
      fontSize: 24,
      color: '#ffff',
    },
  });
  return {styles, insets};
};
