import { chapter, chapter2, chapter3 } from './chapter'
import { Course } from './model'

export const course: Course = {
  title: 'Python for everyone',
  description:
    'Learn one of the most in-demand programing language the fun way',
  chapters: [chapter, chapter2, chapter3],
}
export const course2: Course = {
  title: 'Solving Equation',
  description:
    'Learn one of the most in-demand programing language the fun way',
  chapters: [chapter, chapter, chapter],
}

export const Courses: Record<string, Course> = {
  course1: course,
  course2: course2,
}
