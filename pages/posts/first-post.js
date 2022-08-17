import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import Layout from "components/layout"

export default function FirstPost() {
  const YourComponent = () => {
    return (
      <>
        <Head>
          <title>First Page</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Image
          src="/images/profile.jpg"
          alt="Bonkun"
          height={144}
          width={144}
        />
      </>
    )
  }

  return (
    <Layout>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <YourComponent />
    </Layout>
  )
} 