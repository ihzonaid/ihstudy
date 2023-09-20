import { Text, useSx, View, H1, P, Row, A } from 'dripsy'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
import { ArrowDown } from '@nandorojo/iconic'
import { IconButton } from 'app/design/material/button/IconButton'
import ElevatedButton from 'app/design/material/button/ElevatedButton'
import ElevatedIconButton from 'app/design/material/button/ElevatedIconButton'
import {
  FilledButton,
  TextButton,
  TonalButto,
  FloatingActionButton,
} from 'app/design/material/button'

export default function HomeScreen() {
  const sx = useSx()

  return (
    <View
      sx={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        p: 16,
      }}
    >
      <div className="rounded-2xl border border-gray-200 bg-neutral-10 p-6 dark:border-gray-700 dark:bg-neutral-900 md:p-8">
        <FilledButton />
        <TextButton />
        <TonalButto />
        <IconButton />
        <ElevatedButton />
        <ElevatedIconButton />
        <div className="mb-6 flex flex-wrap items-center gap-2 rounded py-4">
          <FloatingActionButton type="large" />
          <FloatingActionButton type="extended" />
          <FloatingActionButton type="medium" />
          <FloatingActionButton type="small" />
        </div>
      </div>

      <ArrowDown />
      <H1 sx={{ fontWeight: '800' }}>Welcome to Solito.</H1>
      <View sx={{ maxWidth: 600 }}>
        <P sx={{ textAlign: 'center' }}>
          Here is a basic starter to show you how you can navigate from one
          screen to another. This screen uses the same code on Next.js and React
          Native.
        </P>
        <P sx={{ textAlign: 'center' }}>
          Solito is made by{' '}
          <A
            href="https://twitter.com/fernandotherojo"
            hrefAttrs={{
              target: '_blank',
              rel: 'noreferrer',
            }}
            sx={{ color: 'blue' }}
          >
            Fernando Rojo
          </A>
          .
        </P>
      </View>
      <View sx={{ height: 32 }} />
      <Row>
        <TextLink
          href="/user/fernando"
          textProps={{
            style: sx({ fontSize: 16, fontWeight: 'bold', color: 'blue' }),
          }}
        >
          Regular Link
        </TextLink>
        <View sx={{ width: 32 }} />
        {/* <MotiLink
          href="/user/fernando"
          animate={({ hovered, pressed }) => {
            'worklet'

            return {
              scale: pressed ? 0.95 : hovered ? 1.1 : 1,
              rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
            }
          }}
          from={{
            scale: 0,
            rotateZ: '0deg',
          }}
          transition={{
            type: 'timing',
            duration: 150,
          }}
        >
          <Text
            selectable={false}
            sx={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}
          >
            Moti Link
          </Text>
        </MotiLink> */}
      </Row>
    </View>
  )
}
