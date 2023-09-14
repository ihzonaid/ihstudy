import React, { useRef, useState } from 'react'
import { View, Text } from 'app/design/styled'
import { Platform, ScrollView } from 'react-native'
import { styled } from 'nativewind'

import CourseCover from 'app/components/CourseCover'
import Nav from 'app/components/web/NavBar'
import StreakBoard from 'app/components/StreakBoard'
import { useAppSelector } from 'app/services/hooks/hook'
import LoginScreen from 'app/features/auth/login/login-screen'
import { getUserCourses } from 'app/services/storage/user/User'
import { Link } from 'solito/link'
// import { ScrollView } from 'dripsy'

export const HomeScreen = () => {
  const [loading, setLoading] = useState(true)
  const { user } = useAppSelector((state) => state.user)
  const { courses } = useAppSelector((state) => state.offlineUser)

  const [visible, setVisible] = React.useState(false)

  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)
  const toggleModal = () => setVisible(!visible)
  const containerStyle = { backgroundColor: 'white', padding: 20, top: 10 }

  const targetRef = useRef(null)

  // if (!user) {
  //   return <LoginScreen />
  // }

  return (
    <>
      {Platform.OS === 'web' && (
        <>
          <Nav onHamberge={toggleModal} />
          <>
            {/* <Portal>
              <StyledModal
                visible={visible}
                onDismiss={hideModal}
                className="absolute  top-[-200px] w-80 flex-none"
                contentContainerStyle={containerStyle}
              >
                <Text>Example Modal. Click outside this area to dismiss.</Text>
              </StyledModal>
            </Portal> */}
          </>
        </>
      )}
      <ScrollView>
        <View className="web:mx-auto max-w-5xl px-2 md:p-10">
          {/* {user && <Text>{user.email}</Text>} */}
          <StreakBoard />

          {/* <View className="flex flex-col items-center"> */}
          <Text className="my-4 text-left  text-2xl font-bold">
            Your course history
          </Text>
          <View className="flex flex-col justify-between md:flex-row">
            {Object.keys(courses).map((courseId, idx) => (
              <CourseCover key={idx} courseId={courseId} hasButton={true} />
            ))}
          </View>
          {/* </View> */}
        </View>
      </ScrollView>
    </>
  )
}
