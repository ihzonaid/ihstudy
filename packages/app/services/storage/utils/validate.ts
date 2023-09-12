import { Courses } from '../course'

export function validateDataExist(
  courseId: string,
  chapterId: number,
  subChapterId: number,
  lessonId: number
) {
  const course = Courses[courseId]
  if (!course) {
    return Error('Course not found', {
      cause: 'Course with this id not exist',
    })
  }
  const chapter = course.chapters[chapterId]
  if (!chapter) {
    return Error('Chapter not found', {
      cause: 'Chapter with this id not found',
    })
  }

  const subChapter = chapter.subChapters[subChapterId]
  if (!subChapter) {
    return Error('SubChapter not found', {
      cause: 'SubChapter with this id not found',
    })
  }
  const lesson = subChapter.lessons[lessonId]
  if (!lesson) {
    return Error('Lesson not found', {
      cause: 'Lesson with this id not found',
    })
  }

  return subChapter
}
