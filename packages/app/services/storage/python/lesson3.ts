import { ContentType, Lesson } from '../model'

export const firstPythonProgramLesson: Lesson = {
  title: 'Your First Python Program',
  contents: [
    {
      type: ContentType.info,
      content: {
        text: 'In this lesson, you will write and run your very first Python program. This is an exciting step on your Python learning journey!',
      },
    },
    {
      type: ContentType.info,
      content: {
        text: 'You will learn how to use Python to display a simple "Hello, World!" message on your screen.',
      },
    },
    {
      type: ContentType.info,
      content: {
        text: 'By the end of this lesson, you will be able to:',
      },
    },
    {
      type: ContentType.info,
      content: {
        text: '- Write Python code using a code editor or IDE.',
      },
    },
    {
      type: ContentType.info,
      content: {
        text: '- Execute Python code and view the output.',
      },
    },
    {
      type: ContentType.info,
      content: {
        text: '- Understand the structure of a basic Python program.',
      },
    },
    {
      type: ContentType.question,
      content: {
        mcq: {
          question:
            'What will be the output of your first Python program, which displays "Hello, World!"?',
          options: [
            'Goodbye, World!',
            'Hello, World!',
            'No output',
            'Error message',
          ],
          correctOptions: [1],
          explaination:
            'Your first Python program will display "Hello, World!" as the output.',
        },
      },
    },
  ],
}
