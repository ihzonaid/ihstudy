import { ContentType, Lesson } from '../model'

export const pythonFunctionsLesson: Lesson = {
  title: 'Functions in Python',
  contents: [
    {
      type: ContentType.info,
      content: {
        text: 'In this lesson, we will explore functions in Python, which are reusable blocks of code that perform a specific task.',
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
        text: '- Defining and calling functions in Python.',
      },
    },
    {
      type: ContentType.info,
      content: {
        text: '- Function parameters and return values.',
      },
    },
    {
      type: ContentType.info,
      content: {
        text: '- Writing and using your own functions in Python programs.',
      },
    },
    {
      type: ContentType.question,
      content: {
        mcq: {
          question: 'What is the purpose of a function in programming?',
          options: [
            'To store data',
            'To perform a specific task and promote code reusability',
            'To print messages',
            'To create loops',
          ],
          correctOptions: [1],
          explaination:
            'The purpose of a function in programming is to perform a specific task and promote code reusability by encapsulating that task into a reusable block of code.',
        },
      },
    },
  ],
}
