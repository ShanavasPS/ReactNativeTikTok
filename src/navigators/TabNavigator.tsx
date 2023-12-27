import { Image } from "react-native"
import Activity from "../screens/Activity"
import Bookmarks from "../screens/Bookmarks"
import Discover from "../screens/Discover"
import Home from "../screens/Home"
import Profile from "../screens/Profile"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: 'black' }, // Set the background color of the tab bar
        tabBarActiveTintColor: 'white', // Set the active tab text color
        tabBarLabelStyle: {
          color: 'white',
          fontSize: 10,
          fontFamily: 'SF Pro Rounded',
          fontWeight: '500',
        },
        tabBarIcon: ({ color, size }) => {
          let iconSource;

          if (route.name === 'Home') {
            iconSource = require('../assets/home.png');
          } else if (route.name === 'Discover') {
            iconSource = require('../assets/discover.png');
          } else if (route.name === 'Activity') {
            iconSource = require('../assets/activity.png');
          } else if (route.name === 'Bookmarks') {
            iconSource = require('../assets/bookmarks.png');
          } else if (route.name === 'Profile') {
            iconSource = require('../assets/profile.png');
          }

          return <Image source={iconSource} style={{ tintColor: color, width: size, height: size }} />;
        },
        })}
      >
          <Tab.Screen 
            name="Home" 
            component={Home}
            ></Tab.Screen>
          <Tab.Screen name="Discover" component={Discover}></Tab.Screen>
          <Tab.Screen name="Activity" component={Activity}></Tab.Screen>
          <Tab.Screen name="Bookmarks" component={Bookmarks}></Tab.Screen>
          <Tab.Screen name="Profile" component={Profile}></Tab.Screen>
      </Tab.Navigator>
    )
  }

  export default TabNavigator;