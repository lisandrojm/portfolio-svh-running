/* src/app/(routes)/route/page.tsx */
import LayoutWrapper from '@/_components/_containers/LayoutWrapper';

export default function route() {
  return (
    <LayoutWrapper>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl">Route </h1>
        <p>LayoutWrapper</p>
      </div>
    </LayoutWrapper>
  );
}
