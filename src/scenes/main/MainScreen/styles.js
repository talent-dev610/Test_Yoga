import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors';
import {hScaleRatio} from '../../../utils/scailing';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    flexDirection: 'column',
  },
  tab: {
    height: hScaleRatio(80),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default styles;
