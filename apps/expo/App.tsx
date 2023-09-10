import { NativeNavigation } from 'app/navigation/native'
import { MyTabs } from 'app/navigation/native/tab'
import { Provider } from 'app/provider'
import 'expo-dev-client'

export default function App() {
  return (
    <Provider>
      {/* <NativeNavigation /> */}
      <MyTabs />
    </Provider>
  )
}
