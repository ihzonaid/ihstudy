import { ContentScreenWrapper } from 'app/features/content/content-screen-wrapper'
import { createParam } from 'solito'
import { validateDataExist } from 'app/services/storage/utils/validate'
import { AllIds, slugParsingValidationAndIds } from 'app/utils/slug'
import { useAppDispatch } from 'app/services/hooks/hook'
import { updateUserProgressState } from 'app/store/userOfflineStore'
import { useEffect } from 'react'

const { useParam } = createParam<{
  course: string
  chapter: string
  subchapter: string
  lesson: string
}>()
export function ContentVerify() {
  const [courseId] = useParam('course')
  const [chapterSlug] = useParam('chapter')
  const [subchapterSlug] = useParam('subchapter')
  const [lessonId, setLessonId] = useParam('lesson')

  const dispatch = useAppDispatch()

  if (courseId && chapterSlug && subchapterSlug && lessonId) {
    const ids = slugParsingValidationAndIds(
      chapterSlug,
      subchapterSlug,
      lessonId
    )

    if (ids instanceof Error) {
      console.log(ids)
      return <p>Data parching faled</p>
    }
    let { parsedChapterId, parsedLessonId, parsedSubchapterId } = ids
    // decrementing 1 for database indexing from 0
    parsedChapterId = parsedChapterId - 1
    parsedSubchapterId = parsedSubchapterId - 1
    parsedLessonId = parsedLessonId - 1

    const subChapter = validateDataExist(
      courseId,
      parsedChapterId,
      parsedSubchapterId,
      parsedLessonId
    )

    if (subChapter instanceof Error) {
      console.log(subChapter)
      return <p>Data don't not exists in database</p>
    }

    const properIds: AllIds = {
      chapterId: parsedChapterId,
      courseId: courseId,
      lessonId: parsedLessonId,
      subChapterId: parsedSubchapterId,
    }

    return (
      <ContentScreenWrapper
        ids={properIds}
        subChapter={subChapter}
        lesson={{ lessonId: parsedLessonId, setLessonId }}
      />
      // <p>{`courseId: ${courseId};  chapterId: ${parsedChapterId}; subchpaterId: ${parsedSubchapterId}; lessonId: ${parsedLessonId}`}</p>
    )
  } else {
    return (
      <p>{`courseId: ${chapterSlug}; chapterId: ${chapterSlug}; subchpaterId: ${subchapterSlug}; lessonId: ${lessonId}`}</p>
    )
  }
}
