import {StyleSheet} from 'react-native';
import colors from '../../../../theme/colors';
import {hScaleRatio, width, wScale} from '../../../../utils/scailing';
import fonts from '../../../../theme/fonts';
import dimensions from '../../../../theme/dimensions';

const styles = StyleSheet.create({
  mainBackground: {
    backgroundColor: '#F5F5F5',
  },
  headerStyle: {
    height: 224,
  },
  lessStyle: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
  },
  headerSubView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 50,
  },
  refreshImg: {
    height: 16,
    width: 16,
  },
  subTxt: {
    fontWeight: '500',
    fontSize: 12,
    color: 'white',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 12,
    position: 'absolute',
    top: 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  indicator: {
    height: 80,
    width: 80,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    fontSize: 20,
    fontWeight: '700',
  },
  daysLeft: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 10,
  },
  btn: {
    backgroundColor: 'white',
    width: '90%',
    marginTop: 90,
    alignSelf: 'center',
    borderRadius: 1111,
    flexDirection: 'row',
  },
  todayBtn: {
    padding: 15,
    backgroundColor: '#997A92',
    borderRadius: 1111,
    width: '50%',
  },
  todayText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  },
  allButton: {
    padding: 15,
    borderRadius: 1111,
    width: '50%',
  },
  allText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6D768E',
    textAlign: 'center',
  },
  day: {
    fontWeight: '700',
    fontSize: 20,
    color: '#222222',
    marginTop: 25,
  },
  bodyView: {
    paddingHorizontal: 30,
  },

  subContent: {
    flexDirection: 'row',
  },

  heart: {
    width: 12,
    height: 11,
    marginHorizontal: 2,
  },
  iconSubView: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  time: {
    height: 14,
    width: 14,
    marginHorizontal: 2,
  },
  walkView: {
    backgroundColor: 'white',
    padding: 15,
    marginTop: 25,
    borderRadius: 11,
  },
  subWalkView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  walkViewText: {
    fontWeight: '500',
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  completeBtn: {
    backgroundColor: '#997A92',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf: 'center',
    borderRadius: 1111,
  },
  completeTxt: {
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
  },
});

export default styles;
