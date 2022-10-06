import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import styles from './styles';
import HomeTabItem from '../../../components/HomeTabItem';
import DailyFuelScreen from '../dailyFuel/DailyFuelScreen';
import JourneyScreen from '../journey/JourneyScreen';
import CareScreen from '../care/CareScreen';
import GrowScreen from '../grow/GrowScreen';
import MeScreen from '../me/MeScreen';
import YogaStatusBar from '../../../components/YogaStatusBar';

const HomeTabs = {
  DailyFuel: 'DailyFuel',
  Journey: 'Journey',
  Care: 'Care',
  Grow: 'Grow',
  Me: 'Me',
};

const MainScreen = props => {
  const [tab, setTab] = useState(HomeTabs.Journey);

  const onDailyFuelPressed = () => {
    console.log('onDailyFuelPressed');
    setTab(HomeTabs.DailyFuel);
  };

  const onJourneyPressed = () => {
    setTab(HomeTabs.Journey);
  };

  const onCarePressed = () => {
    setTab(HomeTabs.Care);
  };

  const onGrowPressed = () => {
    setTab(HomeTabs.Grow);
  };

  const onMePressed = () => {
    setTab(HomeTabs.Me);
  };

  return (
    <View style={styles.container}>
      <YogaStatusBar />
      <View style={{flex: 1}}>
        {tab === HomeTabs.DailyFuel && (
          <DailyFuelScreen navigation={props.navigation} />
        )}
        {tab === HomeTabs.Journey && (
          <JourneyScreen navigation={props.navigation} />
        )}
        {tab === HomeTabs.Care && <CareScreen navigation={props.navigation} />}
        {tab === HomeTabs.Grow && <GrowScreen navigation={props.navigation} />}
        {tab === HomeTabs.Me && <MeScreen navigation={props.navigation} />}
      </View>

      <View style={styles.tab}>
        <HomeTabItem
          image={require('../../../../assets/images/sun.png')}
          isSelected={tab === HomeTabs.DailyFuel}
          onPress={onDailyFuelPressed}
        />
        <HomeTabItem
          image={require('../../../../assets/images/journey.png')}
          isSelected={tab === HomeTabs.Home}
          onPress={onJourneyPressed}
        />
        <HomeTabItem
          image={require('../../../../assets/images/heart1.png')}
          isSelected={tab === HomeTabs.Care}
          onPress={onCarePressed}
        />
        <HomeTabItem
          image={require('../../../../assets/images/grow.png')}
          isSelected={tab === HomeTabs.Grow}
          onPress={onGrowPressed}
        />
        <HomeTabItem
          image={require('../../../../assets/images/man.png')}
          isSelected={tab === HomeTabs.Me}
          onPress={onMePressed}
        />
      </View>
    </View>
  );
};

export default MainScreen;
