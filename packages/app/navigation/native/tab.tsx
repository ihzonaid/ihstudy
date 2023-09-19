import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CourseScreen } from 'app/features/course/course-screen'
import { HomeScreen } from 'app/features/home/screen'
import { TestScreen } from 'app/features/test'
import { HeroOutline } from '@nandorojo/heroicons'
import { UserDetailScreen } from 'app/features/user/detail-screen'
import { ContentVerify } from 'app/features/content/content-verify'
import { AllCourseScreen } from 'app/features/course/all-course-screen'

const Tab = createBottomTabNavigator<{
  home: undefined
  'user-detail': {
    id: string
  }
  'course-detail': {
    course: string
  }
  course: undefined
  'content-page': {
    course: string
    chater: string
    subchapter: string
    lesson: string
  }
  test: { id: string }
}>()

export function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size }) => <HeroOutline.Home color={color} />,
        }}
      />
      <Tab.Screen
        name="course-detail"
        component={CourseScreen}
        options={{
          tabBarLabel: 'Course',
          tabBarIcon: ({ color, size }) => (
            <HeroOutline.BookOpen color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="course"
        component={AllCourseScreen}
        options={{
          tabBarLabel: 'Courses',
          tabBarIcon: ({ color, size }) => (
            <HeroOutline.BookOpen color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="content-page"
        component={ContentVerify}
        options={{
          tabBarLabel: 'Content',
          tabBarIcon: ({ color, size }) => (
            <HeroOutline.QuestionMarkCircle color={color} />
          ),
        }}
      />
      <Tab.Screen name="test" component={UserDetailScreen} />
    </Tab.Navigator>
  )
}
