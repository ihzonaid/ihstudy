import { HeroOutline } from '@nandorojo/heroicons'
import { clsx } from 'clsx'
import { Link } from 'solito/link'
import colors from 'tailwindcss/colors'

import { Pressable, Text, View } from 'app/design/styled'
import useTheme from 'app/design/theming/useTheme'
import { useAppSelector } from 'app/services/hooks/hook'
import { View as RNView } from 'react-native'

interface IconButtonProps {
  name: string
  web?: boolean
  style?: string
}

function ProgessHeader() {
  const { colors } = useTheme()
  const { lessonIdx } = useAppSelector((state) => state.lesson)
  const { contentIdx: subLessonIdx } = useAppSelector(
    (state) => state.subLesson
  )
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
    const getIcon = (name: string, className?: string) => {
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
      className="web:pt-0 flex h-14
     flex-row items-center justify-between bg-slate-100 drop-shadow-md md:px-6"
    >
      <View className="ml-1 lg:ml-6">
        <IconButton name="close" />
      </View>

      <View className="flex w-2/3 flex-row items-center justify-between lg:w-2/3">
        {/* <View className='flex flex-row items-center'> */}
        <View className="hidden md:flex">
          <IconButton name="chevron-left" web={true} />
        </View>
        <View className="flex flex-1 flex-row gap-1 md:gap-2">
          {lessons.map((subLesson, index) => {
            const width = (subLesson.contents.length / 20) * 100
            const progressPercentage = Math.floor(
              ((subLessonIdx + 1) / subLesson.contents.length) * 100
            )
            return (
              <ProgressContainer
                key={index}
                width={width}
                index={index}
                lessonIdx={lessonIdx}
                lessonsLength={lessons.length}
                progressPercentage={progressPercentage}
              />
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
  score?: number
}
export const ScoreComponent: React.FC<ScoreComponentProps> = ({
  color,
  hoverable = false,
  score = 0,
}) => {
  return (
    <View className="flex flex-row items-center justify-center p-2">
      <Text className=" text-base" style={{ color: color }}>
        {score}
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

type ProgressContainerProps = {
  width: number
  index: number
  lessonsLength: number
  lessonIdx: number
  progressPercentage: number
}

const ProgressContainer: React.FC<ProgressContainerProps> = ({
  width,
  index,
  lessonsLength,
  lessonIdx,
  progressPercentage,
}) => {
  return (
    <View
      className={clsx(
        'h-3 flex-1',
        'flex flex-shrink rounded-md border-2 ',
        index <= lessonIdx ? 'border-blue-400' : 'border-slate-400'
      )}
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
      <RNView
        className={clsx(
          index < lessonIdx ? 'bg-blue-300' : null
          // index == lessonIdx ? 'bg-blue-600' : null
        )}
        style={[
          index < lessonIdx
            ? { backgroundColor: colors.blue[400], width: '100%' }
            : null,
          index === lessonIdx
            ? {
                width: `${progressPercentage}%`,
                height: '100%',
                backgroundColor: colors.blue[300],
              }
            : null,
        ]}
      />
    </View>
  )
}
export default ProgessHeader
