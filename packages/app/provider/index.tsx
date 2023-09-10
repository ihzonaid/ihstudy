import { NavigationProvider } from './navigation'
import { SafeArea } from './safe-area'
import { StoreReduxProvider } from './store-redux'
import { Dripsy } from './dripsy'

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
