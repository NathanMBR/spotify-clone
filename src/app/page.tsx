import {
  Footer,
  Sidebar,
  Main
} from '@/components'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

        <Main />
      </div>

      <Footer />
    </div>
  )
}