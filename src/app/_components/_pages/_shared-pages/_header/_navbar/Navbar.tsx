/* src/app/_components/_pages/_shared-pages/_navbar/Navbar.tsx */

import siteMetadata from '@/_data/siteMetadata';
import headerNavLinks from '@/_data/headerNavLinks';
import CustomLink from '@/_components/_shared/CustomLink';
import NavbarMobile from '@/_components/_pages/_shared-pages/_header/_navbar/NavbarMobile';
import ThemeSwitcher from '@/_components/_shared/ThemeSwitcher';
import LinkIcon from '@/_components/_icons/LinksIcons';

interface NavLink {
  title: string;
  href: string;
}

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 w-full bg-black">
      <div className="flex items-center justify-between border-b border-white px-3 pb-2 pt-6">
        <div>
          <CustomLink href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center font-bold">
                <div>
                  <h2 className="m-0 leading-5 text-white">FullStackDev</h2>
                  <h3>
                    <span className="text-sm text-orange">lisandrojm </span>
                  </h3>
                </div>
              </div>
            </div>
          </CustomLink>
        </div>
        <div className="flex items-center leading-5 ">
          {headerNavLinks
            .filter((link: NavLink) => link.href !== '/')
            .map((link: NavLink, index: number) => (
              <div key={link.title} className="hidden lg:inline">
                <div className="flex">
                  {index > 0 && <span className="mx-3 text-white">|</span>}
                  <CustomLink href={link.href} className="hidden text-white lg:inline">
                    {link.title}
                  </CustomLink>
                </div>
              </div>
            ))}
          <div className="xs--hide flex">
            <LinkIcon kind="github" href={siteMetadata.github} size={3} color="white" margin="ml-5 sm:ml-5" padding="" />
            <LinkIcon kind="linkedin" href={siteMetadata.linkedin} size={3} color="white" margin="ml-5 mr-4 sm:ml-5 sm:mr-5" padding="" />
            <ThemeSwitcher />
          </div>
          <NavbarMobile />
        </div>
      </div>
    </nav>
  );
}
