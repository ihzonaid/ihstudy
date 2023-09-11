import { HeroOutline } from '@nandorojo/heroicons'
import { clsx } from 'clsx'
import { Link } from 'solito/link'

import { Pressable, Text, View } from 'app/design/styled'
import useTheme from 'app/design/theming/useTheme'
import { useAppSelector } from 'app/services/hooks/hook'

interface IconButtonProps {
  name: string
  web?: boolean
  style?: string
}

function ProgessHeader() {
  const { colors } = useTheme()
  const { lessonIdx } = useAppSelector((state) => state.lesson)
  const { index: subLessonIdx } = useAppSelector((state) => state.subLesson)
  const { lessons } = useAppSelector((state) => state.editLesson)

  const handlePress = () => {
    // dispatch(showSheet())
    // dispatch(setLessonIndex({lessonIdx: index}))
    // dispatch(resetIndex())
  }

  const IconButton: React.FC<IconButtonProps> = ({
    name,
    web = false,
    style,
  }) => {
    const className = clsx(
      'p-2',
      web && 'hidden android:hidden ios:hidden md:flex',
      style
    )
    const getIcon = (name, className) => {
      if (name == 'close') {
        return <HeroOutline.XMark className={className} stroke="black" />
      } else if (name == 'chevron-left') {
        return <HeroOutline.ChevronLeft className={className} stroke="black" />
      } else if (name == 'chevron-right') {
        return <HeroOutline.ChevronRight className={className} stroke="black" />
      }
    }
    return (
      <Link href="/">
        <View className=" rounded-full p-2 hover:bg-blue-100">
          {getIcon(name, style)}
        </View>
      </Link>
    )
  }

  return (
    <View
      className="web:pt-0 flex h-12
     flex-row items-center justify-between bg-slate-100 px-6 drop-shadow-md"
    >
      <View className="ml-1 lg:ml-6">
        <IconButton name="close" />
      </View>

      <View className="flex w-2/3 flex-row items-center justify-between lg:w-2/3">
        {/* <View className='flex flex-row items-center'> */}
        <View className="hidden md:flex">
          <IconButton name="chevron-left" web={true} />
        </View>
        <View className="flex flex-1 flex-row ">
          {lessons.map((subLesson, index) => {
            const width = (subLesson.contents.length / 20) * 100
            const progressPercentage = Math.floor(
              ((subLessonIdx + 1) / subLesson.contents.length) * 100
            )
            return (
              // <Pressable key={index} className="">
              <ProgressContainer
                key={index}
                width={width}
                index={index}
                lessonIdx={lessonIdx}
                lessonsLength={lessons.length}
                progressPercentage={progressPercentage}
              />
              // </Pressable>
            )
          })}
        </View>
        <View className="hidden md:flex">
          <IconButton name="chevron-right" web={true} />
        </View>
      </View>

      <ScoreComponent color={colors.onSurface} />
    </View>
  )
}

interface ScoreComponentProps {
  color: string
  hoverable?: boolean
}
export const ScoreComponent: React.FC<ScoreComponentProps> = ({
  color,
  hoverable = false,
}) => {
  return (
    <View className="flex flex-row items-center justify-center">
      <Text className=" text-base" style={{ color: color }}>
        0
      </Text>
      <View
        className={clsx(
          'ml-2',
          hoverable ? 'rounded-full  p-2 hover:bg-blue-200' : null
        )}
      >
        <HeroOutline.Bolt stroke={'black'} />
      </View>
    </View>
  )
}

type ProgressContainer = {
  width: number
  index: number
  lessonsLength: number
  lessonIdx: number
  progressPercentage: number
}

const ProgressContainer: React.FC<ProgressContainer> = ({
  width,
  index,
  lessonsLength,
  lessonIdx,
  progressPercentage,
}) => {
  return (
    <View
      className="h-3 flex-1
                  flex-shrink rounded-md border-2 border-blue-400"
      style={{ width: '20%' }}
      // style={[
      // {
      // width: `${width}%`,
      // width: '20%',
      // marginRight: index == lessonsLength - 1 ? 0 : 2,
      // },
      // index < lessonIdx
      //   ? {
      //       backgroundColor: colors.primary,
      //     }
      //   : null,
      // ]}
    >
      <View
        className="w-full bg-red-100"
        // style={
        // [
        // index === lessonIdx
        //   ? {
        //       width: `${progressPercentage}%`,
        //       width: `${100}%`,
        //       height: '100%',
        //       backgroundColor: colors.secondary,
        //       borderRadius: 6,
        //     }
        //   : null,
        // ]
        // }
      />
    </View>
  )
}
export default ProgessHeader
