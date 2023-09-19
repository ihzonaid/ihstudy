import CourseCover from 'app/components/CourseCover'
import Nav from 'app/components/web/NavBar'
import { View, Text, Pressable } from 'app/design/styled'
import { Platform } from 'react-native'

import { Courses, course } from 'app/services/storage/course'

export function AllCourseScreen() {
  return (
    <>
      {Platform.OS === 'web' ? <Nav /> : null}
      <View className="web:mx-auto max-w-5xl px-2 md:p-10">
        <Text className="my-4 text-left  text-2xl font-bold">
          All the Courses
        </Text>
        <View className="flex flex-col justify-between md:flex-row">
          {Object.keys(Courses).map((courseId, idx) => (
            <CourseCover key={idx} courseId={courseId} hasButton={true} />
          ))}
        </View>
        {/* </View> */}
      </View>
    </>
  )
}
