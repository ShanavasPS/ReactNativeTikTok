import Activity from "../screens/Activity"
import Bookmarks from "../screens/Bookmarks"
import Discover from "../screens/Discover"
import Home from "../screens/Home"
import Profile from "../screens/Profile"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
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