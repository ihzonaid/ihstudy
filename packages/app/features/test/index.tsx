import { View } from 'app/components/Themed'
import { HeroOutline } from '@nandorojo/heroicons'
import * as React from 'react'
import Svg, { Circle, Rect, Path } from 'react-native-svg'
import AcademicCap from 'app/components/icons/AcademicCap'
import { ArrowDown } from '@nandorojo/iconic'

export function TestScreen() {
  return (
    <View>
      <AcademicCap width={20} height={20} />
      <ArrowDown stroke={'gray'} />
      <HeroOutline.Variable stroke={'gray'} />

      <Svg height="50%" width="50%" viewBox="0 0 100 100" stroke={'red'}>
        <Path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
        />
      </Svg>
    </View>
  )
}
