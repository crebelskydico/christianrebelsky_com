import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

type HeaderProps = {
  page?: string
  variant?: 'full' | 'min'
}

export default function Header({
  page,
  variant = 'full',
}: HeaderProps): JSX.Element {
  return (
    <>
      <Head>
        <title>
          {`${
            page ? page + ' | ' : ''
          }Christian Rebelsky - Front-End developer based in Hamburg`}
        </title>
      </Head>
      <header
        className={`grid grid-cols-3 gap-4 ${
          variant === 'full' ? 'row-start-2' : 'row-start-1 mt-4'
        }`}
      >
        <div className="col-start-2 col-end-3 place-self-center">
          <Link href="/" passHref>
            <Image
              src="/logo-light.svg"
              alt="christian rebelsky logo"
              width={variant === 'full' ? '200' : '100'}
              height={variant === 'full' ? '200' : '100'}
            />
          </Link>
        </div>
      </header>
    </>
  )
}
