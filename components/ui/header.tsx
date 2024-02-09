import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from 'next/image';


export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
       
          <div className="shrink-0 mr-4">
       
            <Link href="/" className="block" aria-label="Cruip">
            <Image
   src="/images/signsense.png"
  alt="Logo"
  width={60}
  height={60}
/>
  </Link>
</div>

   
          <nav className="hidden md:flex md:grow">

            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link href="/signup" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  Sign up
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
