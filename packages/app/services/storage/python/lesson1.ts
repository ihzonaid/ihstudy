import { ContentType, Lesson } from '../model'

export const introToPythonLesson: Lesson = {
  title: 'Introduction to Python Programming',
  contents: [
    {
      type: ContentType.info,
      content: {
        text: 'Welcome to the first lesson of the "Intro to something" subChapter. In this lesson, we will provide you with a brief introduction to Python programming.',
      },
    },
    {
      type: ContentType.info,
      content: {
        text: 'Python is a high-level programming language known for its simplicity and readability. It is widely used for web development, data analysis, artificial intelligence, and more.',
      },
    },
    {
      type: ContentType.info,
      content: {
        text: 'In this lesson, you will learn:',
      },
    },
    {
      type: ContentType.info,
      content: {
        text: '- What Python is and its history.',
      },
    },
    {
      type: ContentType.info,
      content: {
        text: '- Advantages and use cases of Python.',
      },
    },
    {
      type: ContentType.info,
      content: {
        text: '- How to install Python on your computer.',
      },
    },
    {
      type: ContentType.question,
      content: {
        mcq: {
          question: 'What is Python primarily known for?',
          options: [
            'Complexity',
            'Low performance',
            'Simplicity and readability',
            'Limited applications',
          ],
          correctOptions: [2],
          explaination:
            'Python is primarily known for its simplicity and readability, making it an ideal choice for beginners and professionals alike.',
        },
      },
    },
  ],
}
