import { ContentType, Lesson } from '../model'

export const pythonVariablesDataTypesLesson: Lesson = {
  title: 'Python Variables and Data Types',
  contents: [
    {
      type: ContentType.info,
      content: {
        text: 'In this lesson, we will dive deeper into Python variables and the various data types available in Python.',
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
        text: '- Declaring and initializing variables in Python.',
      },
    },
    {
      type: ContentType.info,
      content: {
        text: '- Numeric data types such as integers and floats.',
      },
    },
    {
      type: ContentType.info,
      content: {
        text: '- Textual data type: strings.',
      },
    },
    {
      type: ContentType.question,
      content: {
        mcq: {
          question:
            'Which of the following is NOT a valid data type in Python?',
          options: ['Integer', 'Float', 'Boolean', 'Character'],
          correctOptions: [3],
          explaination:
            'Python does not have a data type called "Character." Valid data types include Integer, Float, Boolean, and more.',
        },
      },
    },
  ],
}
