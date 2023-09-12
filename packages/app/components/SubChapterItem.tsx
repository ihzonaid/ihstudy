import { useAppDispatch } from 'app/services/hooks/hook'
import { SubChapter } from 'app/services/storage/model'
import { updateSubChapterTitle } from 'app/store/editCourse'
import { View, Pressable, Text } from 'app/design/styled'
import EditAbleText from './EditableText'
import { HeroOutline } from '@nandorojo/heroicons'
import { Link } from 'solito/link'
import { createSlug, getContentScreenUrl } from 'app/utils/slug'
import { Courses } from 'app/services/storage/course'

export enum subLessonState {
  'completed',
  'current',
  'notCompleted',
}

interface LessonItemProps {
  subChapter: SubChapter
  state: subLessonState
  id: number
  chapterId: number
  courseId: string
}

export const SubChapterItem: React.FC<LessonItemProps> = ({
  courseId,
  id,
  subChapter,
  state,
  chapterId,
}) => {
  const dispatch = useAppDispatch()
  const subchapterSlug = createSlug(subChapter.title)

  const url = getContentScreenUrl(courseId, chapterId, id)

  const UI: React.FC = () => {
    if (state == subLessonState.completed) {
      return (
        <View
          className="mr-5 flex 
          h-16 w-16 items-center justify-center 
          rounded-md bg-blue-500"
        >
          <HeroOutline.Check width={35} color={'white'} />
        </View>
      )
    } else if (state == subLessonState.current) {
      return (
        <View className="ml-[-10px]">
          <View className="mb-[-3px]">
            <Text className="ml-[-5px] w-24 rounded-sm bg-blue-500 py-1 text-center  text-base text-slate-100">
              Continue
            </Text>
            <View className=" ml-7 mt-[-2px] w-10">
              <HeroOutline.ArrowDown color="blue" width={30} />
            </View>
          </View>
          <View className="flex flex-row items-center p-2">
            <View className="mr-5 rounded-md border-4  border-blue-500 p-1">
              <Pressable className="flex h-16 w-16  items-center justify-center rounded-md border-b-4 bg-slate-700">
                <HeroOutline.Play color={'white'} width={30} />
              </Pressable>
            </View>
            <EditAbleText
              className="text-base"
              onSave={(title) =>
                dispatch(updateSubChapterTitle({ chapterId, id, title }))
              }
            >
              {subChapter.title}
            </EditAbleText>
          </View>
        </View>
      )
    } else state == subLessonState.notCompleted
    return (
      <Pressable className="mr-5 flex h-16 w-16 items-center justify-center rounded-md border-b-4 bg-slate-400">
        <HeroOutline.LockClosed width={30} />
      </Pressable>
    )
  }
  return (
    <View className="pl-7">
      <View className="sm ml-10 h-6 w-1 bg-slate-400" />

      <Link href={typeof url == 'string' ? url : '#'}>
        <View className="flex flex-row items-center p-2">
          <UI />
          {state !== subLessonState.current ? (
            <EditAbleText
              className="text-base"
              onSave={(title) =>
                dispatch(updateSubChapterTitle({ chapterId, id, title }))
              }
            >
              {subChapter.title}
            </EditAbleText>
          ) : null}
        </View>
      </Link>
    </View>
  )
}
