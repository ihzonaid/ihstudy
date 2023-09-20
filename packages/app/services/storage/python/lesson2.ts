import { ContentType, Lesson } from '../model'

export const pythonEnvironmentLesson: Lesson = {
  title: 'Setting Up Your Python Environment',
  contents: [
    {
      type: ContentType.info,
      content: {
        text: 'In this lesson, we will guide you through the process of setting up your Python development environment.',
      },
    },
    {
      type: ContentType.info,
      content: {
        text: 'A proper development environment is essential for writing and running Python code effectively.',
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
        text: '- How to download and install Python on your computer.',
      },
    },
    {
      type: ContentType.info,
      content: {
        text: '- Installing and using a code editor or integrated development environment (IDE).',
      },
    },
    {
      type: ContentType.info,
      content: {
        text: '- Writing and running your first Python program.',
      },
    },
    {
      type: ContentType.question,
      content: {
        mcq: {
          question:
            'Which of the following is NOT part of setting up a Python development environment?',
          options: [
            'Downloading Python',
            'Choosing a code editor or IDE',
            'Writing Python code',
            'Running Python code',
          ],
          correctOptions: [2],
          explaination:
            'Setting up a Python development environment includes downloading Python, choosing a code editor or IDE, and writing and running Python code.',
        },
      },
    },
  ],
}
