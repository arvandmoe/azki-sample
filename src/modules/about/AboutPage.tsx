import type { NextPage } from 'next'
import Head from 'next/head'
import { Card } from 'shared/components'

const AboutPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="About the sample for hiring process" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Requirements</h1>
        <br />

        <div>
          <Card
            title="Typescript"
            blankTarget
            href={'https://www.typescriptlang.org/'}
            description="Prevent bugs and never waste time to fix theme, you know..."
          />
          <Card
            title="Redux"
            blankTarget
            href={'https://redux.js.org/'}
            description="Used @redux/toolkit to manage local state,opinionated redux"
          />
        </div>
      </main>
    </div>
  )
}

export default AboutPage
