import Image from 'next/image'
import Tiles from "./Tiles"
import Contact from "./Contact"
import Footer from "./Footer"

export default function Home() {
  return (
    <main className='bg-purple-200'>
      <section className="py-10 md:pt-24 md:pb-12 container max-w-screen-xl mx-auto px-4 text-center">
        <Image src="/me.png" alt="" width="500" height="500" className="mx-auto mb-16" />
        <h1 className="font-medium text-purple-900 text-lg md:text-2xl uppercase mb-8">{`Christian Elton`}</h1>
        <h2 className='text-6xl font-normal'>Manager of the best team @ Vercel</h2>
        <p className="font-bold text-purple-400 text-md md:text-xl my-16">I could not be an astronaut so I am in sales</p>
      </section>
      <Contact />
      <Tiles />
      <Footer />
    </main>
  )
}
