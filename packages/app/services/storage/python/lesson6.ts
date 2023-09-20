import { ContentType, Lesson } from '../model'

export const basicPythonOperatorsLesson: Lesson = {
  title: 'Basic Python Operators',
  contents: [
    {
      type: ContentType.info,
      content: {
        text: 'In this lesson, we will explore the basic operators available in Python for performing various operations.',
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
        text: '- Arithmetic operators for mathematical calculations.',
      },
    },
    {
      type: ContentType.info,
      content: {
        text: '- Comparison operators to compare values.',
      },
    },
    {
      type: ContentType.info,
      content: {
        text: '- Logical operators for combining conditions.',
      },
    },
    {
      type: ContentType.question,
      content: {
        mcq: {
          question: 'What is the result of 5 + 3 in Python?',
          options: ['8', '53', '15', 'Error'],
          correctOptions: [0],
          explaination: 'The result of 5 + 3 in Python is 8.',
        },
      },
    },
  ],
}
