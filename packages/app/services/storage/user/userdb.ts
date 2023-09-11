import { UserType } from './User'
import { formatDate } from './UserScore'
export const DemoUser: UserType = {
  info: {
    name: 'Md. Zonaid',
  },
  courses: {
    course1: {
      courseId: 'course1',
      activeChapter: 1,
      chapters: {
        1: {
          activeSubchapter: 1,
          chapterId: 1,
          subchapters: {
            1: {
              activeLesson: 1,
              subChapterId: 1,
              lessons: {
                1: {
                  lessonId: 1,
                },
                2: {
                  lessonId: 2,
                },
              },
            },
          },
        },
      },
    },
    course2: {
      activeChapter: 1,
      courseId: 'course2',
      chapters: {
        2: {
          activeSubchapter: 1,
          chapterId: 2,
          subchapters: {
            2: {
              activeLesson: 1,
              subChapterId: 2,
              lessons: {
                3: {
                  lessonId: 1,
                },
              },
            },
          },
        },
      },
    },
  },
  activeCourse: 'course2',
  score: {
    total: 90,
    dateWise: {
      '2023-09-11': 10,
      '2023-09-10': 40,
      '2023-09-8': 40,
    },
  },
}

formatDate(new Date())
