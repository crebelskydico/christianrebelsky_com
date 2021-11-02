import Link from 'next/link'

type FooterProps = {
  active?: string
  variant?: 'full' | 'min'
}

export default function Footer(props: FooterProps): JSX.Element {
  return (
    <footer className="row-start-4 justify-self-center self-end mb-8">
      <menu className="footer-menu pb-5 pt-5 pl-0 pr-0">
        <Link href="/privacypolicy">
          <a
            className={`${
              props.active === 'datenschutz' ? 'underline' : ''
            } pr-4 text-primary  hover:underline`}
          >
            Datenschutz
          </a>
        </Link>
        <Link href="/imprint">
          <a
            className={`${
              props.active === 'impressum' ? 'underline' : ''
            } text-primary  hover:underline`}
          >
            Impressum
          </a>
        </Link>
      </menu>
    </footer>
  )
}
