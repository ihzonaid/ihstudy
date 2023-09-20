import { ContentType, Lesson } from '../model'

export const conditionalStatementsLesson: Lesson = {
  title: 'Conditional Statements in Python',
  contents: [
    {
      type: ContentType.info,
      content: {
        text: 'In this lesson, we will explore conditional statements in Python, which allow you to make decisions in your code based on certain conditions.',
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
        text: '- The if statement and how to use it for basic conditions.',
      },
    },
    {
      type: ContentType.info,
      content: {
        text: '- Using else and elif clauses for more complex conditions.',
      },
    },
    {
      type: ContentType.info,
      content: {
        text: '- Practical examples of conditional statements in Python.',
      },
    },
    {
      type: ContentType.question,
      content: {
        mcq: {
          question:
            'Which keyword is used to define an "if" statement in Python?',
          options: ['when', 'if', 'case', 'condition'],
          correctOptions: [1],
          explaination:
            'The "if" keyword is used to define conditional statements in Python.',
        },
      },
    },
  ],
}
