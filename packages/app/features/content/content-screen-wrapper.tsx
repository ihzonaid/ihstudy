import { P } from 'app/components/Themed'
import { ContentScreen } from 'app/features/content/content-screen'
import { useAppDispatch, useAppSelector } from 'app/services/hooks/hook'
import { SubChapter } from 'app/services/storage/model'
import { setLessonIndex, setLessonIndexId } from 'app/store/lessons'
import { useEffect } from 'react'
import { createParam } from 'solito'
type ContentScreenProps = {
  subChapter: SubChapter
  lesson: {
    lessonId: number
    setLessonId: (value: string | undefined, options?: any) => void
  }
}

export function ContentScreenWrapper({
  subChapter,
  lesson,
}: ContentScreenProps) {
  const { lessonIdx } = useAppSelector((state) => state.lesson)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setLessonIndexId(lesson.lessonId))
  }, [])

  useEffect(() => {
    // setLessonId(lessonIdx.toString(), { webBehavior: 'push' })
    // To adjust router param
    lesson.setLessonId((lesson.lessonId + 1).toString())
  }, [lessonIdx])

  // if (courseId && chapterId && subchapterId && lessonId) {
  return <ContentScreen subChapter={subChapter} />
  // } else return <div>{`${courseId} ${chapterId} ${subchapterId}`}</div>
}
