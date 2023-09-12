import { Courses } from 'app/services/storage/course'

export function createSlug(inputString: string): string {
  const slug = inputString.toLowerCase().replace(/\s+/g, '-')
  return slug
}

export function getContentScreenUrl(
  courseId: string,
  chapterId: number,
  subChapterId: number,
  lessonId?: number
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
  const lesson = subChapter.lessons[lessonId ? lessonId : 0]
  if (!lesson) {
    return Error('Lesson not found', {
      cause: 'Lesson with this id not found',
    })
  }
  function addSlugWithId(id: number, slug: string) {
    return `${id}-${slug}`
  }

  const chpaterSlug = addSlugWithId(chapterId, createSlug(chapter.title))
  const subchpaterSlug = addSlugWithId(
    subChapterId,
    createSlug(subChapter.title)
  )

  return `/course/${courseId}/${chpaterSlug}/${subchpaterSlug}/${
    lessonId ? lessonId : 0
  }`
}
