import { DateWiseScoreType } from './UserScore'

export type LessonType = {
  lessonId: number
}

function generateDefaultLessonType(lessId: number): LessonType {
  const newLesson = {
    lessonId: lessId,
  }
  return newLesson
}

export type SubChapterType = {
  subChapterId: number
  lessons: Record<number, LessonType>
  activeLesson: number
  completed: boolean
}

function generateDefaultSubChapterType(
  subId: number,
  lessId: number
): SubChapterType {
  return {
    subChapterId: subId,
    activeLesson: lessId,
    completed: false,

    lessons: { [lessId]: generateDefaultLessonType(lessId) },
  }
}
// console.log(generateDefaultSubChapterType())

export type ChapterType = {
  chapterId: number
  subchapters: Record<number, SubChapterType>
  activeSubchapter: number
}

function generateDefaultChapterType(
  chapId: number,
  subId: number,
  lessId: number
): ChapterType {
  return {
    chapterId: chapId,
    activeSubchapter: subId,
    subchapters: { [subId]: generateDefaultSubChapterType(subId, lessId) },
  }
}
// console.log(generateDefaultChapterType())

export type CourseType = {
  courseId: string // courseId as a string
  chapters: Record<number, ChapterType>
  activeChapter: number
}
function generateDefaultCourseType(
  courId: string,
  chapId: number,
  subId: number,
  lessId: number
): CourseType {
  return {
    activeChapter: chapId,
    chapters: { [chapId]: generateDefaultChapterType(chapId, subId, lessId) },
    courseId: courId,
  }
}

export type UserType = {
  info: {
    name: string
  }
  courses: Record<string, CourseType> // courseId as a string
  activeCourse: string
  score: {
    total: number
    dateWise: DateWiseScoreType
  }
  test: Record<number, LessonType>
}

// Method to get all user courses
function getUserCourses(user: UserType): string[] {
  return Object.keys(user.courses)
}

// Method to get all chapters for a specific course
function getChaptersForCourse(user: UserType, courseId: string): number[] {
  const course = user.courses[courseId]
  if (course) {
    return Object.keys(course.chapters).map(Number)
  }
  return []
}

// Method to get all subchapters for a specific chapter within a course
function getSubchaptersForChapter(
  user: UserType,
  courseId: string,
  chapterId: number
): number[] {
  const course = user.courses[courseId]
  if (course) {
    const chapter = course.chapters[chapterId]
    if (chapter) {
      return Object.keys(chapter.subchapters).map(Number)
    }
  }
  return []
}

// Method to get all lessons for a specific subchapter within a chapter within a course
function getLessonsForSubChapter(
  user: UserType,
  courseId: string,
  chapterId: number,
  subChapterId: number
): number[] {
  const course = user.courses[courseId]
  if (course) {
    const chapter = course.chapters[chapterId]
    if (chapter) {
      const subChapter = chapter.subchapters[subChapterId]
      if (subChapter) {
        return Object.keys(subChapter.lessons).map(Number)
      }
    }
  }
  return []
}

export {
  getChaptersForCourse,
  getLessonsForSubChapter,
  getSubchaptersForChapter,
  getUserCourses,
  generateDefaultChapterType,
  generateDefaultCourseType,
  generateDefaultLessonType,
  generateDefaultSubChapterType,
}
