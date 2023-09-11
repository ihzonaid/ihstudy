import { Text, View, Pressable } from 'app/design/styled'
import AppButton from './AppButton'
import { Link } from 'solito/link'
import { Courses, course } from 'app/services/storage/course'
import {
  getTotalNumberOfLesson,
  getTotalNumberOfUserCompletedLesson,
} from 'app/services/storage/utils/course'
import { useAppSelector } from 'app/services/hooks/hook'

interface CourseCoverProps {
  hasButton?: boolean
  courseId: string
}

const CourseCover = ({ hasButton, courseId }: CourseCoverProps) => {
  const { courses } = useAppSelector((state) => state.offlineUser)
  const courseInfo = Courses[courseId]!
  const totalLesson = getTotalNumberOfLesson(courseInfo)
  const totalCompletedLesson = getTotalNumberOfUserCompletedLesson(
    courses,
    courseId
  )
  courses[courseId]?.chapters

  function resumeCourse(): void {
    // route the page
  }

  return (
    <Link href="/content">
      <Pressable className="max-w-sm rounded-md border-2 border-slate-300 p-5">
        <View className="h-[150px] bg-slate-500">
          {/* <Image
          className="w-full"
          source={require('/assets/images/favicon.png')}
          style={{ width: 120, height: 120 }}
        /> */}
        </View>
        <Text className="mt-2 text-sm">
          {courseInfo.title} . Lesson {totalCompletedLesson} of {totalLesson}
        </Text>
        <Text className="my-2 text-base font-bold">{courseInfo.title}</Text>
        <Text className="text-sm">{courseInfo.description}</Text>
        <View className="my-4 h-2 bg-blue-200">
          <View className="h-2 w-4 bg-blue-500" />
        </View>

        {hasButton && (
          <AppButton onPress={resumeCourse} content="Resume course" />
        )}
      </Pressable>
    </Link>
  )
}

export default CourseCover
