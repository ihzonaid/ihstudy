import * as React from 'react'
import { View, Text, Pressable } from 'app/design/styled'
import { HeroOutline } from '@nandorojo/heroicons'
import { Link } from 'solito/link'

type NavProps = {
  onHamberge?: () => void
}

const Nav = ({ onHamberge }: NavProps) => {
  const [searchQuery, setSearchQuery] = React.useState('')

  const onChangeSearch = (query: string) => setSearchQuery(query)

  function NavItem({ name }: { name: string }) {
    return (
      <Link href="/course" className="">
        <View
          className=" flex  items-center
         justify-between rounded-lg  p-1 hover:border-b-2 "
        >
          <HeroOutline.Bookmark color={'red'} />
          <Text className="text-black">{name}</Text>
        </View>
      </Link>
    )
  }

  return (
    <>
      <View
        className="shadow-2 mb-4 flex flex-row
       items-center justify-between  px-2 drop-shadow-2xl sm:px-16 "
      >
        <View className="flex flex-row items-center">
          <Pressable className="mr-10 flex h-8 w-20 items-center justify-center rounded-lg bg-blue-400 hover:bg-blue-600 sm:w-36">
            <Text className="text-center text-base">ihStudy</Text>
          </Pressable>

          <View className="flex flex-row  p-2">
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
        <HeroOutline.Home />
      </View>
    </>
  )
}

export default Nav
