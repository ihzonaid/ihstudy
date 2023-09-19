import { UserType } from './User'
import { formatDate } from './UserScore'
export const DemoUser: UserType = {
  info: {
    name: 'Md. Zonaid',
  },
  courses: {
    course1: {
      courseId: 'course1',
      activeChapter: 0,
      chapters: {
        1: {
          activeSubchapter: 0,
          chapterId: 0,
          subchapters: {
            1: {
              completed: false,
              subChapterId: 1,
              activeLesson: 1,
              lessons: { 0: { lessonId: 0 } },
            },
          },
        },
      },
    },
  },
  activeCourse: 'course1',
  score: {
    total: 90,
    dateWise: {
      '2023-09-11': 10,
      '2023-09-10': 40,
      '2023-09-8': 40,
    },
  },
  test: {},
}

formatDate(new Date())
