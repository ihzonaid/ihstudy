import * as React from 'react'
import { View, Text, Pressable } from 'app/design/styled'
import { HeroOutline } from '@nandorojo/heroicons'
import { Link } from 'solito/link'
import { ScoreComponent } from '../ProgressHeader'
import { useAppSelector } from 'app/services/hooks/hook'

type NavProps = {
  onHamberge?: () => void
}

const Nav = ({ onHamberge }: NavProps) => {
  const { score, info } = useAppSelector((state) => state.offlineUser)
  const [searchQuery, setSearchQuery] = React.useState('')

  const onChangeSearch = (query: string) => setSearchQuery(query)

  function NavItem({ name }: { name: string }) {
    return (
      <Link href={name == 'Home' ? '/' : '/course'} className="">
        <View
          className=" mr-2 flex  h-10 items-center justify-between
           p-1 hover:border-b-2 hover:border-blue-200 "
        >
          {name == 'Home' ? (
            <HeroOutline.Home color={'gray'} className="mr-2" />
          ) : (
            <HeroOutline.BookOpen color={'gray'} className="mr-2" />
          )}
          <Text className=" text-black">{name}</Text>
        </View>
      </Link>
    )
  }

  return (
    <>
      <View
        className="shadow-2  md:px- mb-4 flex h-14
       flex-row items-center  justify-between bg-slate-100 px-4 drop-shadow-md sm:px-16"
      >
        <View className="flex flex-row items-center ">
          <Link href={'/'}>
            <Pressable className="mr-10 flex h-8 w-20 items-center justify-center rounded-lg bg-blue-400 hover:bg-blue-500 sm:w-36">
              <Text className="text-center text-base font-bold text-white">
                ihStudy
              </Text>
            </Pressable>
          </Link>

          <View className="flex h-10  flex-row  items-center p-2">
            <NavItem name="Home" />
            <NavItem name="Course" />
          </View>
        </View>

        {/* <Searchbar
          // className='flex-1 ml-10'
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        /> */}

        {/* <IconButton
          size={24}
          icon="menu"
          iconColor={color.onSurface}
          onPress={onHamberge}
        /> */}

        <ScoreComponent score={score.total} hoverable={true} color="black" />
      </View>
    </>
  )
}

export default Nav
