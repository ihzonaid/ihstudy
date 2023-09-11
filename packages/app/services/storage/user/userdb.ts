import { UserType } from './UserCourse'
export const user: UserType = {
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
              activeLesson: 2,
              subChapterId: 2,
              lessons: {
                3: {
                  lessonId: 3,
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
    total: 0,
    dateWise: {},
  },
}
