import React from 'react'

type ScrollViewProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

const ScrollView: React.FC<ScrollViewProps> = (props) => {
  return <div {...props} />
}

export default ScrollView
