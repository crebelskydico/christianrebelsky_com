import Header from '../components/Header'
import Footer from '../components/Footer'

//NOTE: grid, typo, menu

export default function Home(): JSX.Element {
  return (
    <div className="grid grid-rows-4 h-screen">
      <Header />
      <main className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 row-start-3">
        <div className="lg:col-start-2 lg:col-end-3 self-start justify-self-center">
          <h1 className="text-primary font-sans font-normal text-3xl lg:text-5xl">
            Coming Soon
          </h1>
        </div>
      </main>
      <Footer />
    </div>
  )
}
