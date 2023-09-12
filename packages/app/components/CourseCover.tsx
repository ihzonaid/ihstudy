import { Text, View, Pressable } from 'app/design/styled'
import AppButton from './AppButton'
import { Link } from 'solito/link'
import { Courses, course } from 'app/services/storage/course'
import {
  getTotalNumberOfLesson,
  getTotalNumberOfUserCompletedLesson,
} from 'app/services/storage/utils/course'
import { useAppSelector } from 'app/services/hooks/hook'
import { getContentScreenUrl } from 'app/utils/slug'

interface CourseCoverProps {
  hasButton?: boolean
  courseId: string
}

const CourseCover = ({ hasButton, courseId }: CourseCoverProps) => {
  // redux data
  const { courses: userCourses } = useAppSelector((state) => state.offlineUser)
  const courseInfo = Courses[courseId]!
  const activeChapterId = userCourses[courseId]?.activeChapter!
  const activeSubchapterId =
    userCourses[courseId]?.chapters[activeChapterId]?.activeSubchapter!
  const activeLessonId =
    userCourses[courseId]?.chapters[activeChapterId]?.subchapters[
      activeChapterId
    ]?.activeLesson!

  const url = getContentScreenUrl(
    courseId,
    activeChapterId,
    activeChapterId,
    activeLessonId
  )

  const totalLesson = getTotalNumberOfLesson(courseInfo)
  const totalCompletedLesson = getTotalNumberOfUserCompletedLesson(
    userCourses,
    courseId
  )

  return (
    <View className="max-w-sm rounded-md border-2 border-slate-300 p-5">
      <Link href={`/course/${courseId}/`}>
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
      </Link>

      <Link href={typeof url == 'string' ? url : '#'}>
        {hasButton && <AppButton content="Resume course" />}
      </Link>
    </View>
  )
}

export default CourseCover
