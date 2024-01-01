/* src/app/_components/_pages/_shared-pages/+_home/_footer/Footer.tsx */

import siteMetadata from '@/_data/siteMetadata';
import LinkIcon from '@/_components/_icons/LinksIcons';
import CustomLink from '@/_components/_shared/CustomLink';

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-start justify-between gap-4 px-3 pb-5 pt-4 md:flex-row md:items-center">
        <div className="xs--hide flex items-center justify-center">
          <h6 className="text-md font-serif text-orange">
            site stack <span className="px-2">|</span>
          </h6>
          <ul className="flex gap-3">
            <li>
              <LinkIcon kind="react" href="https://legacy.reactjs.org/" size={2} color="orange" />
            </li>
            <li>
              <LinkIcon kind="nextjs" href="https://nextjs.org/" size={2} color="orange" />
            </li>
            <li>
              <LinkIcon kind="tailwind" href="https://tailwindcss.com/" size={2} color="orange" />
            </li>
            <li>
              <LinkIcon kind="vercel" href="https://vercel.com/" size={2} color="orange" />
            </li>
          </ul>
        </div>
        <div className="flex">
          <LinkIcon kind="github" href={siteMetadata.github} size={2} color="white" />
          <CustomLink href="https://github.com/lisandrojm/portfolio" className="text-md ml-3 font-serif italic text-white">
            site code →
          </CustomLink>
        </div>
      </div>
    </footer>
  );
}
