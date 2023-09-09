import { NavigationProvider } from './navigation'
import { SafeArea } from './safe-area'
import { StoreReduxProvider } from './store-redux'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from 'app/store/configureStore'
import { styled } from 'nativewind'
import { Dripsy } from './dripsy'

const StyledProvider = styled(ReduxProvider)

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <SafeArea>
      <NavigationProvider>
        <Dripsy>
          <StoreReduxProvider>{children}</StoreReduxProvider>
        </Dripsy>
      </NavigationProvider>
    </SafeArea>
  )
}
