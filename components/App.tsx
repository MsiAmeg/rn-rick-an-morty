import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

import {CharacterScreen} from '../screens/CharacterScreen';
import {LocationScreen} from '../screens/LocationScreen';
import {EpisodeScreen} from '../screens/EpisodeScreen';

import {GhostIcon} from '../assets/GhostIcon.tsx';
import {PlanetIcon} from '../assets/PlanetIcon.tsx';
import {TvIcon} from '../assets/TvIcon.tsx';
import {StyleSheet} from 'react-native';
import {colors} from '../constants/colors.ts';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

const Tab = createBottomTabNavigator();

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: colors.accent.indigo,
            tabBarInactiveTintColor: colors.grayBase.gray1,
            tabBarLabelStyle: styles.tabBarLabelStyle,
            tabBarItemStyle: styles.tabBarItemStyle,
            tabBarActiveBackgroundColor: colors.grayBase.gray5,
            tabBarInactiveBackgroundColor: colors.grayBase.gray5,
          }}>
          <Tab.Screen
            options={{
              tabBarIcon: ({color}) => <GhostIcon color={color} />,
            }}
            name="Character"
            component={CharacterScreen}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({color}) => <PlanetIcon color={color} />,
            }}
            name="Location"
            component={LocationScreen}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({color}) => <TvIcon color={color} />,
            }}
            name="Episode"
            component={EpisodeScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  tabBarLabelStyle: {
    fontWeight: '500',
    letterSpacing: 0.16,
    lineHeight: 11.76,
  },
  tabBarItemStyle: {
    paddingBottom: 2,
    paddingTop: 5,
  },
});
