import { Pressable, Text } from 'app/design/styled'

export enum ButtonType {
  primary = 'primary',
  outline = 'outline',
  surfaceContainer = 'surface_container',
}

interface AppButtonProps {
  content: string
  type?: 'primary' | 'outline' | 'surface_container'
  onPress?: () => void
}

const AppButton = ({ content, type, onPress }: AppButtonProps) => {
  return (
    <Pressable
      className="mb-5 flex
       w-full flex-row justify-center
        rounded-md bg-slate-700 py-2 "
      onPress={onPress}
    >
      <Text className="text-lg text-white">{content}</Text>
    </Pressable>
  )
}

export default AppButton
