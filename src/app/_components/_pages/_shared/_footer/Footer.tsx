/* src/app/_components/_pages/_home/_footer/Footer.tsx */

import siteMetadata from '@/_data/siteMetadata';
import LinkIcon from '@/_components/_icons/LinksIcons';
import CustomLink from '@/_components/_links/CustomLink';
import SectionXContainer from '@/_components/_containers/SectionXContainer';

export default function Footer() {
  return (
    <footer>
      <SectionXContainer>
        <div className="pb-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-3">
          <div className="flex justify-center items-center xs--hide">
            <h6 className="font-serif text-md text-orange">
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
            <CustomLink href="https://github.com/lisandrojm/portfolio" className="font-serif italic text-white text-md ml-3">
              site code →
            </CustomLink>
          </div>
        </div>
      </SectionXContainer>
    </footer>
  );
}
