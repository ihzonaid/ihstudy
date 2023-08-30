import { NavigationProvider } from './navigation'
import { SafeArea } from './safe-area'
import { StoreReduxProvider } from './store-redux'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from 'app/store/configureStore'
import { styled } from 'nativewind'

const StyledProvider = styled(ReduxProvider)

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <SafeArea>
      <NavigationProvider>
        {/* <StyledProvider store={store}>{children}</StyledProvider> */}
        {/* <ReduxProvider store={store}>{children}</ReduxProvider> */}
        <StoreReduxProvider>{children}</StoreReduxProvider>
      </NavigationProvider>
    </SafeArea>
  )
}
