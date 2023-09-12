import { NavigationProvider } from './navigation'
import { SafeArea } from './safe-area'
import { StoreReduxProvider } from './store-redux'
import { Dripsy } from './dripsy'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <SafeArea>
      <StoreReduxProvider>
        <NavigationProvider>
          <Dripsy>{children}</Dripsy>
        </NavigationProvider>
      </StoreReduxProvider>
    </SafeArea>
  )
}
