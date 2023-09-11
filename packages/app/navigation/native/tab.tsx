import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ContentScreen } from 'app/features/content'
import { CourseScreen } from 'app/features/course/course-screen'
import { HomeScreen } from 'app/features/home/screen'
import { TestScreen } from 'app/features/test'
import { HeroOutline } from '@nandorojo/heroicons'

const Tab = createBottomTabNavigator()

export function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <HeroOutline.Home color={color} />,
        }}
      />
      <Tab.Screen name="course" component={CourseScreen} />
      <Tab.Screen name="content" component={ContentScreen} />
      <Tab.Screen name="test" component={TestScreen} />
    </Tab.Navigator>
  )
}
