import {
  getChaptersForCourse,
  getLessonsForSubChapter,
  getSubchaptersForChapter,
  getUserCourses,
} from '../User'
import {
  DateWiseScoreType,
  addScoreForDate,
  formatDate,
  getTotalScoreLast30Days,
  getTotalScoreLast7Days,
} from '../UserScore'
import { DemoUser as user } from '../userdb'
// Call addScoreForDate to add a score for a specific date
addScoreForDate(user, '2023-09-10', 10) // Add a score of 10 for September 10, 2023

// You can add scores for other dates as needed
addScoreForDate(user, '2023-09-11', 15)

// Example usage:
// Get all user courses
const allCourses = getUserCourses(user)
console.log('User Courses:', allCourses)

// Get all chapters for a specific course
const courseId = 'course1'
const chaptersForCourse = getChaptersForCourse(user, courseId)
console.log(`Chapters for ${courseId}:`, chaptersForCourse)

// Get all subchapters for a specific chapter within a course
const chapterId = 1
const subchaptersForChapter = getSubchaptersForChapter(
  user,
  courseId,
  chapterId
)
console.log(
  `Subchapters for Chapter ${chapterId} in ${courseId}:`,
  subchaptersForChapter
)

// Get all lessons for a specific subchapter within a chapter within a course
const subChapterId = 1
const lessonsForSubChapter = getLessonsForSubChapter(
  user,
  courseId,
  chapterId,
  subChapterId
)
console.log(
  `Lessons for SubChapter ${subChapterId} in Chapter ${chapterId} in ${courseId}:`,
  lessonsForSubChapter
)

console.log('The total Score oflast 7 dy', getTotalScoreLast7Days(user))
