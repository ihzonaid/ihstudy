import { NavigationContainer } from '@react-navigation/native'
import { MyTabs } from 'app/navigation/native/tab'
import * as Linking from 'expo-linking'
import { useMemo } from 'react'

export function NavigationProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NavigationContainer
      linking={useMemo(
        () => ({
          prefixes: [Linking.createURL('/')],
          config: {
            initialRouteName: 'home',
            screens: {
              home: '',
              'user-detail': 'user/:id',
              'course-detail': 'course/:course',
              test: 'test/:id',
              'content-page': 'course/:course/:chapter/:subchapter/:lesson',
            },
          },
        }),
        []
      )}
    >
      {children}
    </NavigationContainer>
  )
}
