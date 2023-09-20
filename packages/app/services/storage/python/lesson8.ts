import { ContentType, Lesson } from '../model'

export const pythonLoopsLesson: Lesson = {
  title: 'Python Loops - For and While',
  contents: [
    {
      type: ContentType.info,
      content: {
        text: 'In this lesson, you will dive into loops in Python, which allow you to execute a block of code repeatedly.',
      },
    },
    {
      type: ContentType.info,
      content: {
        text: 'You will learn about:',
      },
    },
    {
      type: ContentType.info,
      content: {
        text: '- The "for" loop for iterating over sequences.',
      },
    },
    {
      type: ContentType.info,
      content: {
        text: '- The "while" loop for executing code as long as a condition is true.',
      },
    },
    {
      type: ContentType.info,
      content: {
        text: '- Practical examples of using loops in Python.',
      },
    },
    {
      type: ContentType.question,
      content: {
        mcq: {
          question:
            'Which loop is used when you want to execute a block of code repeatedly until a condition becomes false?',
          options: [
            'For loop',
            'While loop',
            'Do-while loop',
            'Repeat-until loop',
          ],
          correctOptions: [1],
          explaination:
            'The "while" loop in Python is used when you want to execute a block of code repeatedly until a condition becomes false.',
        },
      },
    },
  ],
}
