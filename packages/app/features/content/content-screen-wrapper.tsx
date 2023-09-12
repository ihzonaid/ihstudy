import { P } from 'app/components/Themed'
import { ContentScreen } from 'app/features/content/content-screen'
import { useAppDispatch, useAppSelector } from 'app/services/hooks/hook'
import { setLessonIndex, setLessonIndexId } from 'app/store/lessons'
import { useEffect } from 'react'
import { createParam } from 'solito'

const { useParam } = createParam<{
  course: string
  chapter: string
  subchapter: string
  lesson: string
}>()

export function ContentScreenWrapper() {
  const [courseId] = useParam('course', { initial: 'course1' })
  const [chapterId] = useParam('chapter', { initial: '1' })
  const [subchapterId] = useParam('subchapter', { initial: '0' })
  const [lessonId, setLessonId] = useParam('lesson', { initial: '0' })

  const { lessonIdx } = useAppSelector((state) => state.lesson)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setLessonIndexId(parseInt(lessonId)))
  }, [])

  useEffect(() => {
    setLessonId(lessonIdx.toString(), { webBehavior: 'push' })
  }, [lessonIdx])

  if (courseId && chapterId && subchapterId && lessonId) {
    return (
      <ContentScreen
        chapterId={chapterId}
        courseId={courseId}
        subchapterId={subchapterId}
      />
    )
  } else return <div>{`${courseId} ${chapterId} ${subchapterId}`}</div>
}
