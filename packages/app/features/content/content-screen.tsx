import { use, useEffect, useRef, useState } from 'react'
import { View, Text } from 'app/design/styled'
// import { ScrollView } from 'app/design/styled'
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  Platform,
} from 'react-native'

import ContentContainer from 'app/components/content_container'
import AppButton from 'app/components/AppButton'

import {
  Content,
  ContentType,
  Lesson,
  SubChapter,
} from 'app/services/storage/model'
import {
  addContent,
  incrementContentIndex,
  resetContentIndex,
} from 'app/store/sublesson'
import { useAppSelector, useAppDispatch } from 'app/services/hooks/hook'
import { incrementLessonIdx } from 'app/store/lessons'
import ProgressHeader from 'app/components/ProgressHeader'
import CardQuiz from 'app/components/CardQuiz'
import Prompt from 'app/components/Prompt'
import EditAbleText from 'app/components/EditableText'
import { updateLessonTitle } from 'app/store/editLesson'
import AddContent from 'app/components/AddContent'
import { Hint } from 'app/components/Hint'

import {
  updateLessonCompletion,
  updateUserProgressState,
  updateUserScore,
} from 'app/store/userOfflineStore'
import { AllIds } from 'app/utils/slug'
import { useMemo } from 'react'
import Congratulation from 'app/components/Congratulation'

type ContentScreenProps = {
  subChapter: SubChapter
  ids: AllIds
}

export function ContentScreen({ subChapter, ids }: ContentScreenProps) {
  const [showButton, setShowButton] = useState(true)
  const [showHint, setHint] = useState(true)
  const [completed, setCompleted] = useState(false)
  const [score, setScore] = useState(0)
  const scrollViewRef = useRef<ScrollView>(null)
  const { contentIdx } = useAppSelector((state) => state.subLesson)
  const { lessonIdx } = useAppSelector((state) => state.lesson)
  const dispatch = useAppDispatch()
  const { edible } = useAppSelector((state) => state.editLesson)

  const { chapterId, courseId, subChapterId, lessonId } = ids

  // new implementation
  // const subchapter = chapter.subChapters[parseInt(subchapterId)]!

  const [onePageLesson, lessonsLength] = useMemo(() => {
    const subchapter = subChapter
    const lessons = subchapter.lessons
    return [lessons[lessonIdx]!, lessons.length]
  }, [lessonIdx, subChapter])

  // useEffects
  useEffect(() => {
    return () => {
      if (onePageLesson.contents[contentIdx]!.type === ContentType.info) {
        const newContent = onePageLesson.contents[contentIdx]!
        dispatch(addContent(newContent))
      }
    }
  }, [contentIdx])

  useEffect(() => {
    // dispatch(changeLesson(lessonIdx))
    dispatch(
      updateUserProgressState({
        chapterId,
        courseId,
        subChapterId,
        lessonId: lessonIdx,
      })
    )
    dispatch(resetContentIndex())
  }, [lessonIdx])

  // Functions
  function toggleHint() {
    setHint(!showHint)
  }

  function onPress() {
    if (edible) {
      if (lessonIdx >= lessonsLength - 1) {
        // Download the json
      }
      dispatch(incrementLessonIdx())
      return
    }

    if (contentIdx >= onePageLesson.contents.length - 1) {
      // Handle lessons completion
      if (lessonIdx >= lessonsLength - 1) {
        setCompleted(true)
        // Update user score
        dispatch(updateUserScore({ score })) // need persist to test
        // Update user progress lesson completion
        dispatch(updateLessonCompletion({ courseId, chapterId, subChapterId }))
        return
      }
      dispatch(incrementLessonIdx())
      return
    }
    dispatch(incrementContentIndex())

    scrollViewRef.current?.scrollToEnd({ animated: true })
    toggleHint()
  }

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent
    const isHide =
      contentOffset.y + layoutMeasurement.height > contentSize.height - 100
    setShowButton(isHide)
  }

  function closeHint(): void {
    setHint(false)
  }

  if (completed) {
    return <Congratulation />
  }

  return (
    <>
      <View className="fixed top-0 z-10  w-full">
        <ProgressHeader />
      </View>
      <ScrollView
        style={[Platform.OS === 'web' ? { paddingBottom: 250 } : null]}
        className=" bg-slate-100 pb-80"
        onScroll={handleScroll}
        ref={scrollViewRef}
        scrollEventThrottle={20}
      >
        <View className="flex-1 items-center !justify-center  px-2">
          <View className="mx-auto w-full   sm:w-2/3 md:w-2/3 lg:w-1/2">
            {/* <View className="mx-auto max-w-5xl bg-red-100"> */}

            {/* {showHint && <Hint close={closeHint} />} */}

            <View className="web:mt-20 mb-3 ml-2">
              <EditAbleText
                className="text-2xl font-bold"
                // onSave={(data) =>
                //   dispatch(updateLessonTitle({ lid: lessonIdx, title: data })
                //   )
                // }
              >
                {onePageLesson.title}
              </EditAbleText>
            </View>

            {/* <YoutubeVideo /> */}
            {edible
              ? onePageLesson.contents.map((item, idx) => {
                  return (
                    <RenderContent
                      key={idx}
                      cid={idx}
                      index={contentIdx}
                      item={item}
                      lessonIdx={lessonIdx}
                    />
                  )
                })
              : onePageLesson.contents.slice(0, contentIdx).map((item, idx) => {
                  return (
                    <RenderContent
                      key={idx}
                      cid={idx}
                      index={contentIdx}
                      item={item}
                      lessonIdx={lessonIdx}
                    />
                  )
                })}

            {edible ? <AddContent lid={lessonIdx} /> : null}

            <View className="hidden w-24  px-2 sm:flex">
              <AppButton content="Continue" onPress={onPress} />
            </View>
          </View>
        </View>
        {/* {showButton && (
          <View className="fixed bottom-2 w-full bg-blue-100 px-2 sm:hidden">
            <AppButton content="Continue" onPress={onPress} />
          </View>
        )} */}
      </ScrollView>

      {/*This button works for cross web and native*/}
      {showButton && (
        <View className="fixed bottom-2 w-full  px-2 sm:hidden">
          <AppButton content="Continue" onPress={onPress} />
        </View>
      )}
    </>
  )
}
type RenderContentProps = {
  item: Content
  cid: number
  index: number
  lessonIdx: number
}
const RenderContent: React.FC<RenderContentProps> = ({
  cid,
  item,
  index,
  lessonIdx,
}) => {
  if (item.type == ContentType.info) {
    return (
      <ContentContainer
        content={item.content.text}
        cid={index}
        lid={lessonIdx}
      />
    )
  } else if (item.type == ContentType.question) {
    return <CardQuiz question={item.content} cid={cid} lid={lessonIdx} />
  } else if (item.type == ContentType.prompt) {
    return <Prompt prompt={item.content} ids={{ cid, lid: lessonIdx }} />
  } else return <Text>no content</Text>
}
