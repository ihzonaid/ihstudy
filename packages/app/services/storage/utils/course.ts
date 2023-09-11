import { chapter } from '../chapter'
import { Course } from '../model'
import { ChapterType, CourseType, SubChapterType } from '../user/User'

function getTotalNumberOfSubChapter(course: Course): number {
  let totalLessons = 0

  for (const chapter of course.chapters) {
    totalLessons += chapter.subChapters.length
  }

  return totalLessons
}

function getTotalNumberOfLesson(course: Course): number {
  let totalLessons = 0

  for (const chapter of course.chapters) {
    for (const subchpater of chapter.subChapters) {
      totalLessons += subchpater.lessons.length
    }
  }

  return totalLessons
}

function getTotalNumberOfUserCompletedLesson(
  courses: Record<string, CourseType>,
  courseId: string
): number {
  const course = courses[courseId]
  if (!course) {
    return 0 // Course not found
  }

  let totalLessons = 0

  for (const chapterId of Object.keys(course.chapters)) {
    const chapter = course.chapters[parseInt(chapterId)]
    if (chapter)
      for (const subChapterId of Object.keys(chapter.subchapters)) {
        const subChapter = chapter.subchapters[parseInt(subChapterId)]
        if (subChapter) totalLessons += Object.keys(subChapter.lessons).length
      }
  }

  return totalLessons
}

export {
  getTotalNumberOfLesson,
  getTotalNumberOfSubChapter,
  getTotalNumberOfUserCompletedLesson,
}
