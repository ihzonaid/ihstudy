import { View, Text } from 'app/design/styled'
import { ScoreComponent } from './ProgressHeader'
import { HeroOutline } from '@nandorojo/heroicons'
import clsx from 'clsx'
import { useAppSelector } from 'app/services/hooks/hook'
import { formatDate } from 'app/services/storage/user/UserScore'
import { getLast7DaysNames } from 'app/utils/date'

export default function StreakBoard({}) {
  const { score, info } = useAppSelector((state) => state.offlineUser)
  const todayDate = formatDate(new Date())
  const lastWeek = getLast7DaysNames(5)
  return (
    <View className="flex flex-col  md:flex-row md:items-center md:justify-between">
      <View className="flex flex-row items-center  py-4">
        <View className="mr-4">
          <View className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-blue-300">
            <ScoreComponent score={score.dateWise[todayDate]} color="black" />
          </View>
        </View>
        <View className="flex flex-col">
          <Text className="text-2xl font-bold">Hello, {info.name}!</Text>
          <Text className="text-base font-semibold">
            Solve 3 problems daily to start a streak
          </Text>
          <Text className="text-sm">1 Longest streak 5 Lesson completed</Text>
        </View>
      </View>

      <View className="mb-5 h-[1px]   bg-slate-400 md:h-full md:w-[1px]" />

      <View className="flex w-full flex-row justify-around  md:w-1/2">
        {lastWeek.map((day, i) => {
          return <StreakDay day={day} isStreak={i == 4} />
        })}
      </View>
    </View>
  )
}

function StreakDay({ day, isStreak }: { day: String; isStreak?: boolean }) {
  let className = 'flex justify-center items-center   h-16 py-2 rounded-xl '
  if (isStreak) className = className + ' border-2 border-slate-500'
  return (
    <View className={clsx(className, 'px-4')}>
      <Text>{day}</Text>
      <HeroOutline.Bolt width={20} height={20} stroke={'black'} />
    </View>
  )
}
