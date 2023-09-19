import { View, Text, Pressable } from 'app/design/styled'
import { useAppDispatch } from 'app/services/hooks/hook'
import { updateLessonCompletion } from 'app/store/userOfflineStore'
import { GestureResponderEvent } from 'react-native'
import { useRouter } from 'solito/router'

export default function Congratulation() {
  const dispatch = useAppDispatch()
  const router = useRouter()

  function handleContinue(event: GestureResponderEvent): void {
    // redirect to the course pages
    router.back()
  }

  return (
    <View className="mx-auto flex max-w-2xl flex-1 flex-col items-center justify-center">
      <View className="my-10 h-28 w-28 bg-slate-100"></View>
      <Text className="my-10 text-4xl">Practice Completed</Text>
      <Text className="text-base text-slate-400">Total XP</Text>
      <Text className="text-5xl font-bold">10</Text>
      <Pressable
        className="mt-8 w-full rounded-md bg-slate-800 p-2 hover:bg-slate-900"
        onPress={handleContinue}
      >
        <Text className="text-white">Continue</Text>
      </Pressable>
      <Pressable className="my-2 w-full rounded-md bg-slate-50 p-2 hover:bg-slate-200">
        <Text className="">Redo Lesson</Text>
      </Pressable>
    </View>
  )
}
