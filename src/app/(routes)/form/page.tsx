/* src/app/(routes)/route/form.tsx */

import Form from '@/_components/_pages/form/Form';
import LayoutWrapper from '@/_components/_containers/LayoutWrapper';
import Provider from '@/_components/_contexts/Provider';

export default function RootForm() {
  return (
    <Provider>
      <LayoutWrapper>
        <Form />
      </LayoutWrapper>
    </Provider>
  );
}
