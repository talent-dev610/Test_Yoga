import React, {useState, useEffect} from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {ProgressBar, MD3Colors} from 'react-native-paper';
import BreathWorkPanel from '../../../../components/BreathWorkPanel';
import styles from './styles';

const JourneyScreen = props => {
  const [fill, setFill] = useState(30);
  return (
    <ScrollView style={styles.mainBackground}>
      <ImageBackground
        style={styles.headerStyle}
        source={require('../../../../../assets/images/header.png')}>
        <View style={styles.headerSubView}>
          <Text style={styles.lessStyle}>Less Stress Journey</Text>
          <TouchableOpacity>
            <Image
              style={styles.refreshImg}
              source={require('../../../../../assets/images/refresh.png')}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.subTxt}>
          Working on wellbeing skills: Needs & Boundaries
        </Text>
      </ImageBackground>
      <View style={styles.card}>
        <View>
          <AnimatedCircularProgress
            size={80}
            width={6}
            fill={fill}
            tintColor="#95C28C"
            backgroundColor="#F6F6F6">
            {fill => <Text>{fill}</Text>}
          </AnimatedCircularProgress>
          <Text style={styles.daysLeft}>Days Left</Text>
        </View>
        <View>
          <AnimatedCircularProgress
            size={80}
            width={6}
            fill={fill}
            tintColor="#F5D786"
            backgroundColor="#F6F6F6">
            {fill => <Text>{fill}</Text>}
          </AnimatedCircularProgress>
          <Text style={styles.daysLeft}>Days Left</Text>
        </View>
        <View>
          <AnimatedCircularProgress
            size={80}
            width={6}
            fill={fill}
            tintColor="#DF836F"
            backgroundColor="#F6F6F6">
            {fill => <Text>{fill}</Text>}
          </AnimatedCircularProgress>
          <Text style={styles.daysLeft}>Days Left</Text>
        </View>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity style={styles.todayBtn}>
          <Text style={styles.todayText}>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.allButton}>
          <Text style={styles.allText}>Today</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bodyView}>
        <Text style={styles.day}>Day 2</Text>
        <BreathWorkPanel />
        <View style={styles.walkView}>
          <View style={styles.subWalkView}>
            <Text style={styles.walkViewText}> Go for a 20 minute walk</Text>
            <TouchableOpacity style={styles.completeBtn}>
              <Text style={styles.completeTxt}>Complete</Text>
            </TouchableOpacity>
          </View>
        </View>
        <BreathWorkPanel />
      </View>
    </ScrollView>
  );
};

export default JourneyScreen;
