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

  const chpaterSlug = addSlugWithId(chapterId + 1, createSlug(chapter.title))
  const subchpaterSlug = addSlugWithId(
    subChapterId + 1,
    createSlug(subChapter.title)
  )

  return `/course/${courseId}/${chpaterSlug}/${subchpaterSlug}/${
    lessonId ? lessonId + 1 : 1
  }`
}

function getIdFromSlug(slug: string) {
  const parts = slug.split('-')
  if (parts.length > 0) {
    return parts[0]!
  } else {
    // Handle the case where the slug doesn't contain any hyphens
    return slug
  }
}

export type AllIds = {
  parsedChapterId: number
  parsedSubchapterId: number
  parsedLessonId: number
}

export function slugParsingValidationAndIds(
  chapSlug: string,
  subSlug: string,
  lesId: string
): Error | AllIds {
  const parsedLessonId = parseInt(lesId)
  if (!parsedLessonId) {
    return Error(`LessonId: ${lesId}  can't parsed`)
  }
  const parsedChapterId = parseInt(getIdFromSlug(chapSlug))
  if (!parsedChapterId) {
    return Error(`Chapterslug: can't parsed`)
  }

  const parsedSubchapterId = parseInt(getIdFromSlug(subSlug))
  if (!parsedSubchapterId) {
    return Error("SubChapterslug can't parsed")
  }
  return { parsedChapterId, parsedSubchapterId, parsedLessonId }
}
