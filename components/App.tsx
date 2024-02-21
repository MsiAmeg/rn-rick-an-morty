import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {ApolloClient, InMemoryCache, ApolloProvider, gql} from '@apollo/client';

import {CharacterScreen} from '../screens/CharacterScreen';
import {LocationScreen} from '../screens/LocationScreen';
import {EpisodeScreen} from '../screens/EpisodeScreen';

import {GhostIcon} from '../assets/icons/navigation/GhostIcon.tsx';
import {PlanetIcon} from '../assets/icons/navigation/PlanetIcon.tsx';
import {TvIcon} from '../assets/icons/navigation/TvIcon.tsx';
import {StyleSheet} from 'react-native';
import {colors} from '../constants/colors.ts';
import {GhostIconActive} from '../assets/icons/navigation/GhostIconActive.tsx';
import {PlanetIconActive} from '../assets/icons/navigation/PlanetIconActive.tsx';
import {TvIconActive} from '../assets/icons/navigation/TvIconActive.tsx';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          characters: {
            keyArgs: ['filter'],

            merge(exsisting = {}, incoming) {
              return {
                info: incoming.info,
                results: [...(exsisting.results ?? []), ...incoming.results],
              };
            },
          },
        },
      },
    },
  }),
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
              tabBarIcon: ({focused}) =>
                focused ? <GhostIconActive /> : <GhostIcon />,
            }}
            name="Character"
            component={CharacterScreen}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({focused}) =>
                focused ? <PlanetIconActive /> : <PlanetIcon />,
            }}
            name="Location"
            component={LocationScreen}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({focused}) =>
                focused ? <TvIconActive /> : <TvIcon />,
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
