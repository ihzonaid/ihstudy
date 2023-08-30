import React from 'react'

type PressableProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const Pressable: React.FC<PressableProps> = (props) => {
  return <button {...props} />
}

export default Pressable
