import { cLesson1, cLesson2, cLesson3 } from './c'
import { Chapter } from './model'
import {
  lesson1,
  lesson2,
  lesson3,
  lesson4,
  lesson5,
  lesson6,
  lesson7,
  lesson8,
  lesson9,
} from './python'

export const chapter: Chapter = {
  title: 'Python Basics',
  subChapters: [
    { title: 'Intro to Python', lessons: [lesson1, lesson2, lesson3] },
    { title: 'Data Type', lessons: [lesson4, lesson5, lesson6] },
    { title: 'Conditional', lessons: [lesson7, lesson8, lesson9] },
  ],
}

export const chapter2: Chapter = {
  title: 'Python Class',
  subChapters: [
    { title: 'Intro to something', lessons: [cLesson1, cLesson2, cLesson3] },
    { title: 'Basic of something', lessons: [cLesson1, cLesson2, cLesson3] },
    { title: 'Application python', lessons: [cLesson1, cLesson2, cLesson3] },
    { title: 'Map memory', lessons: [cLesson1, cLesson2, cLesson3] },
  ],
}

export const chapter3: Chapter = {
  title: 'OOP in python',
  subChapters: [
    { title: 'Intro to something', lessons: [cLesson1, cLesson2, cLesson3] },
    { title: 'Basic of something', lessons: [cLesson1, cLesson2, cLesson3] },
    { title: 'Application python', lessons: [cLesson1, cLesson2, cLesson3] },
    { title: 'Map memory', lessons: [cLesson1, cLesson2, cLesson3] },
  ],
}
