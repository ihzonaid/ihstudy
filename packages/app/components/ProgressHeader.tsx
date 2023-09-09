import { HeroOutline } from '@nandorojo/heroicons'
import { clsx } from 'clsx'
import { TouchableWithoutFeedback } from 'react-native'
import { Link } from 'solito/link'

import { Pressable, Text, View } from 'app/design/styled'
import useTheme from 'app/design/theming/useTheme'
import { useAppSelector } from 'app/services/hooks/hook'
// import { Link } from 'expo-router'

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
        return <HeroOutline.XMark className={className} />
      } else if (name == 'chevron-left') {
        return <HeroOutline.ChevronLeft className={className} />
      } else if (name == 'chevron-right') {
        return <HeroOutline.ChevronRight className={className} />
      }
    }
    return <Link href="/">{getIcon(name, style)}</Link>
  }

  return (
    <View
      className="web:pt-0 flex h-20 flex-row items-center justify-between pt-3"
      style={{ backgroundColor: colors.surfaceContainerLowest }}
    >
      <View className="ml-1 lg:ml-6">
        <IconButton name="close" />
      </View>

      <View className="flex w-2/3 flex-row items-center justify-between lg:w-2/3">
        {/* <View className='flex flex-row items-center'> */}

        <IconButton name="chevron-left" web={true} />
        <View className="flex flex-1 flex-row">
          {lessons.map((subLesson, index) => {
            const width = (subLesson.contents.length / 20) * 100
            const progressPercentage = Math.floor(
              ((subLessonIdx + 1) / subLesson.contents.length) * 100
            )
            return (
              <Pressable key={index}>
                <View
                  className="h-3 flex-shrink 
                  rounded-md border-2 border-slate-200 bg-red-200"
                  // style={[
                  //   {
                  //     width: `${width}%`,
                  //     marginRight: index == lessons.length - 1 ? 0 : 2,
                  //   },
                  //   index < lessonIdx
                  //     ? {
                  //         backgroundColor: colors.primary,
                  //       }
                  //     : null,
                  // ]}
                >
                  <View
                  // style={[
                  //   index === lessonIdx
                  //     ? {
                  //         width: `${progressPercentage}%`,
                  //         height: '100%',
                  //         backgroundColor: colors.secondary,
                  //         borderRadius: 6,
                  //       }
                  //     : null,
                  // ]}
                  />
                </View>
              </Pressable>
            )
          })}
        </View>
        <IconButton name="chevron-right" web={true} />
      </View>

      <ScoreComponent color={colors.onSurface} />
    </View>
  )
}

interface ScoreComponentProps {
  color: string
}
export const ScoreComponent: React.FC<ScoreComponentProps> = ({ color }) => {
  return (
    <View className="flex flex-row items-center justify-center">
      <Text className=" text-base" style={{ color: color }}>
        0
      </Text>
      <View className="ml-2">
        <HeroOutline.AcademicCap />
      </View>
    </View>
  )
}

export default ProgessHeader
