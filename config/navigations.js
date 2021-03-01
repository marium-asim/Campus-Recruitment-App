import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Dashboard from '../screens/Dashboard';
import Profile from '../screens/StudentProfile';
import RecruiterDashboard from '../screens/RecruiterDashboard';
import Jobs from '../screens/jobs.js';
import AdminDashboard from '../screens/AdminDashboard';
import Notifications from '../screens/Notifications';
import Updates from '../screens/Updates';
import Offers from '../screens/Offers';
import Applications from '../screens/Applications';
import StudentApplications from '../screens/studentapps';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Student Dashboard" component={Dashboard} />
        <Stack.Screen name="My Profile" component={Profile} />
        <Stack.Screen name="Recruiter Dashboard" component={RecruiterDashboard} />
        <Stack.Screen name="Post Jobs" component={Jobs} />
        <Stack.Screen name="Admin Dashboard" component={AdminDashboard} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Latest Notifications" component={Updates} />
        <Stack.Screen name="Available Offers" component={Offers} />
        <Stack.Screen name="Student Applications" component={Applications} />
        <Stack.Screen name="Applications For Recruitment" component={StudentApplications} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;