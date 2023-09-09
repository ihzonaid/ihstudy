import React from 'react'

type PressableProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  onPress: () => void
}

const Pressable: React.FC<PressableProps> = ({ onPress, ...props }) => {
  return <button onClick={onPress} {...props} />
}

export default Pressable
