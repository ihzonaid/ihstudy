import { useAppDispatch, useAppSelector } from 'app/services/hooks/hook'
import { Chapter } from 'app/services/storage/model'
import { updateChapterTitle } from 'app/store/editCourse'
import React, { useState } from 'react'
import { View, Pressable, Text } from 'app/design/styled'
import EditAbleText from './EditableText'
import { SubChapterItem, subLessonState } from './SubChapterItem'
import { SubChapterType } from 'app/services/storage/user/User'

interface ChapterItemProps {
  courseId: string
  index: number
  chapter: Chapter
}

export const ChapterItem: React.FC<ChapterItemProps> = ({
  index,
  chapter,
  courseId,
}) => {
  const [expanded, setExpanded] = useState(false)
  const { courses } = useAppSelector((state) => state.offlineUser)

  const handlePress = () => {
    setExpanded(!expanded)
  }

  const getState = (i: number) => {
    // console.log('curseId', courseId, 'chpate', index, 'subchater', i)
    const course = courses[courseId]

    if (course) {
      const chapter = course.chapters[index]
      if (chapter) {
        const subChpater = chapter.subchapters[i]
        if (subChpater) {
          // active subchpater and completed subchpater
          if (chapter.activeSubchapter == i && subChpater.completed) {
            return subLessonState.completed
          }
          if (subChpater.completed) {
            return subLessonState.completed
          }

          // console.log(chapter.activeSubchapter, '==', i)
          if (chapter.activeSubchapter == i) {
            return subLessonState.current
          }
          // if (subChpater.subChapterId == i) {
          //   return subLessonState.current
          // }
          // if (i == 0) return subLessonState.current
          // else if (i < 0) return subLessonState.completed
          return subLessonState.notCompleted
        } else {
          if (i == 0) return subLessonState.current
          // else if (i < 0) return subLessonState.completed
          return subLessonState.notCompleted
        }
      } else {
        if (i == 0) return subLessonState.current
        // else if (i < 0) return subLessonState.completed
        return subLessonState.notCompleted
      }
    } else {
      // first time user in the course, so his default progress would be no completion of chapter
      // active chpater, subchapter, lesson would be 0
      if (i == 0) return subLessonState.current
      // else if (i < 0) return subLessonState.completed
      return subLessonState.notCompleted
    }
  }

  return (
    <View className="">
      <LessonNumber chapter={chapter} handlePress={handlePress} index={index} />
      <View>
        {expanded &&
          chapter.subChapters.map((subChapter, i) => (
            <SubChapterItem
              courseId={courseId}
              chapterId={index}
              subChapter={subChapter}
              key={i}
              id={i}
              state={getState(i)}
            />
          ))}
      </View>
      <View
        className="mb-2 h-[1px] w-full bg-slate-400"
        style={{ marginTop: expanded ? 28 : 0 }}
      />
    </View>
  )
}

type LessonNumberProps = {
  handlePress: () => void
  index: number
  chapter: Chapter
}
const LessonNumber: React.FC<LessonNumberProps> = ({
  handlePress,
  index,
  chapter,
}) => {
  const dispatch = useAppDispatch()
  return (
    <Pressable onPress={handlePress} className="w-full py-7">
      <View className="flex flex-row items-center justify-between  px-2">
        <View className="flex flex-row items-center">
          <View className="mx-5 flex h-20 w-20 items-center justify-center rounded-lg bg-zinc-300">
            <Text className="text-3xl font-bold">{index + 1}</Text>
          </View>
          <Text className="text-2xl font-bold">{chapter.title}</Text>
          {/* <EditAbleText
            className="text-2xl font-bold"
            onSave={(title) =>
              dispatch(updateChapterTitle({ id: index, title }))
            }
          >
            {chapter.title}
          </EditAbleText> */}
        </View>
      </View>
    </Pressable>
  )
}
