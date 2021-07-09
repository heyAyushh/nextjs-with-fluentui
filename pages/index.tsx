import * as React from 'react'
import { NextPage } from 'next'
import profilePic from "/fluentui.png"
import { Stack, Text, Link, FontWeights, PrimaryButton } from '@fluentui/react'
import Image from 'next/image'
const baseStyle = {
  root: {
    width: '100%',
    maxWidth: '960px',
    margin: '0 auto',
    textAlign: 'center'
  }
}

const boldStyle = { root: { fontWeight: FontWeights.semibold } }

const verticalGapStackTokens = {
  childrenGap: 16
}

const horizontalGapStackTokens = {
  childrenGap: 16
}

const IndexPage: NextPage = () => (
  <Stack horizontalAlign="center" verticalAlign="center" verticalFill styles={baseStyle} className="App" tokens={verticalGapStackTokens}>
    {/* <img src="/fluentui.png" alt="logo" style={{ width: '100%', maxWidth: 768 }} /> */}
    <Image src={profilePic} alt="logo" width='768' placeholder="blur" />
    <Text variant="xxLarge" styles={boldStyle}>
      Welcome to Your Fluent UI App
    </Text>
    <Text variant="large" styles={boldStyle}>
      Essential Links
    </Text>

    <PrimaryButton> Themed </PrimaryButton>

    <Stack horizontal horizontalAlign="center" tokens={horizontalGapStackTokens}>
      <Link href="https://developer.microsoft.com/en-us/fabric">Docs</Link>
      <Link href="https://stackoverflow.com/questions/tagged/fluent-ui">Stack Overflow</Link>
      <Link href="https://github.com/microsoft/fluentui">Github</Link>
      <Link href="https://twitter.com/fluentui">Twitter</Link>
    </Stack>
    <Text variant="large" styles={boldStyle}>
      Design System
    </Text>

  </Stack>
)

export default IndexPage
