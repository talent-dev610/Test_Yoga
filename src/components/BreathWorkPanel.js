import React, {memo, useState, useRef} from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  Animated,
} from 'react-native';
import colors from '../theme/colors';
import {hScaleRatio, wScale} from '../utils/scailing';
import {ProgressBar, MD3Colors} from 'react-native-paper';

export default memo(() => {
  const [completeScrollBarwidth, setCompleteScrollBarWidth] = useState(1);
  const [visibleScrollBarWidth, setVisibleScrollBarWidth] = useState(0);

  const scrollIndicator = useRef(new Animated.Value(0)).current;

  const scrollIndicatorSize =
    completeScrollBarwidth > visibleScrollBarWidth
      ? (visibleScrollBarWidth * visibleScrollBarWidth) / completeScrollBarwidth
      : visibleScrollBarWidth;

  const difference =
    visibleScrollBarWidth > scrollIndicatorSize
      ? visibleScrollBarWidth - scrollIndicatorSize
      : 1;

  const scrollIndicatorPosition = Animated.multiply(
    scrollIndicator,
    visibleScrollBarWidth / completeScrollBarwidth,
  ).interpolate({
    inputRange: [0, difference],
    outputRange: [0, difference],
    extrapolate: 'clamp',
  });

  return (
    <View style={defStyle.breathingCard}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={width => {
          setCompleteScrollBarWidth(width);
        }}
        onLayout={({
          nativeEvent: {
            layout: {width},
          },
        }) => {
          setVisibleScrollBarWidth(width);
        }}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollIndicator}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}>
        <Image
          source={require('../../assets/images/breathing.png')}
          style={defStyle.breathingImg}
        />
        <View style={defStyle.textView}>
          <View style={defStyle.cardSubView}>
            <Text style={defStyle.breathingTxt}>Breath Works 1 :</Text>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/star.png')}
                style={defStyle.star}
              />
            </TouchableOpacity>
          </View>
          <Text style={defStyle.desc}>
            This breathing technique is great for relaxing your mind
          </Text>
          <View style={defStyle.iconsView}>
            <View style={defStyle.iconSubView}>
              <Image
                style={defStyle.heart}
                source={require('../../assets/images/heart.png')}
              />
              <Text>Care</Text>
            </View>
            <View style={defStyle.iconSubView}>
              <Image
                style={defStyle.time}
                source={require('../../assets/images/time.png')}
              />
              <Text>7 mins</Text>
            </View>
            <View style={defStyle.iconSubView}>
              <Text>level :</Text>
              <Image
                style={defStyle.circle}
                source={require('../../assets/images/circle.png')}
              />
              <Image
                style={defStyle.circle}
                source={require('../../assets/images/circle.png')}
              />
              <Image
                style={defStyle.circle}
                source={require('../../assets/images/circle.png')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          marginTop: 21,
          width: '100%',
          height: 6,
          backgroundColor: '#D9D9D9',
          borderRadius: 8,
        }}>
        <Animated.View
          style={{
            height: 6,
            borderRadius: 8,
            backgroundColor: '#997A92',
            width: scrollIndicatorSize,
            transform: [{translateX: scrollIndicatorPosition}],
          }}
        />
      </View>
    </View>
  );
});

const defStyle = StyleSheet.create({
  circle: {
    marginHorizontal: 2,
    height: 8,
    width: 8,
  },
  breathingImg: {
    height: 95,
    width: 105,
  },
  textView: {
    paddingHorizontal: 15,
    width: '70%',
  },
  breathingTxt: {
    fontSize: 16,
    fontWeight: '500',
    color: '#222222',
  },
  star: {
    height: 17,
    width: 17,
  },
  cardSubView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  breathingCard: {
    padding: 15,
    backgroundColor: 'white',
    marginTop: 25,
    borderRadius: 16,
  },
  iconSubView: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  desc: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6D768E',
    marginTop: 10,
    width: '90%',
  },
  iconsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  subContent: {
    flexDirection: 'row',
  },
});
