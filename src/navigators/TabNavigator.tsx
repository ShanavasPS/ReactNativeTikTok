import {Image} from 'react-native';
import Activity from '../screens/Activity';
import Bookmarks from '../screens/Bookmarks';
import Discover from '../screens/Discover';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TikTokImages from '../theme/TikTokImages';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {backgroundColor: 'black'}, // Set the background color of the tab bar
        tabBarActiveTintColor: 'white',
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: 'SF Pro Rounded',
          fontWeight: '500',
        },
        tabBarIcon: ({color, size}) => {
          let iconSource;

          if (route.name === 'Home') {
            iconSource = TikTokImages.home;
          } else if (route.name === 'Discover') {
            iconSource = TikTokImages.discover;
          } else if (route.name === 'Activity') {
            iconSource = TikTokImages.activity;
          } else if (route.name === 'Bookmarks') {
            iconSource = TikTokImages.bookmarks;
          } else if (route.name === 'Profile') {
            iconSource = TikTokImages.profile;
          }
          return (
            <Image
              source={iconSource}
              style={{tintColor: color, width: size, height: size}}
            />
          );
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="Discover"
        component={Discover}
        listeners={{
          tabPress: e => {
            // Prevent default action
            e.preventDefault();
          },
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        listeners={{
          tabPress: e => {
            // Prevent default action
            e.preventDefault();
          },
        }}
      />
      <Tab.Screen
        name="Bookmarks"
        component={Bookmarks}
        listeners={{
          tabPress: e => {
            // Prevent default action
            e.preventDefault();
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        listeners={{
          tabPress: e => {
            // Prevent default action
            e.preventDefault();
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
