import { ContentType, Lesson } from '../model'

export const pythonSyntaxBasicsLesson: Lesson = {
  title: 'Python Syntax Basics',
  contents: [
    {
      type: ContentType.info,
      content: {
        text: 'In this lesson, we will explore the fundamental aspects of Python syntax, which are crucial for writing correct Python code.',
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
        text: '- Python statements and indentation.',
      },
    },
    {
      type: ContentType.info,
      content: {
        text: '- Variables and data types in Python.',
      },
    },
    {
      type: ContentType.info,
      content: {
        text: '- Basic operators for performing operations in Python.',
      },
    },
    {
      type: ContentType.question,
      content: {
        mcq: {
          question: 'What is the purpose of indentation in Python code?',
          options: [
            'It is optional and does not affect the code.',
            'It improves code readability and defines block structure.',
            'It indicates syntax errors.',
            'It is used for comments.',
          ],
          correctOptions: [1],
          explaination:
            'Indentation in Python is essential for defining the block structure and improving code readability.',
        },
      },
    },
  ],
}
