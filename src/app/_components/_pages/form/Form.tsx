/* src/app/_components/_pages/_form/Form.tsx */

'use client';

import { useState } from 'react';
import { Button, FloatingLabelInput, FloatingLabelTextarea } from '@/_components/_ui';
import SectionXContainer from '@/_components/_containers/SectionXContainer';

export default function Form() {
  const [agreed, setAgreed] = useState(false);

  return (
    <>
      <div className="mx-auto max-w-md pt-10 uppercase">
        <h2 className="text-3xl font-bold leading-8 tracking-tight text-orange sm:text-4xl">
          Let&apos;s go <br />
          to the point
        </h2>
      </div>
      <form action="#" method="POST" className="mx-auto mt-4 max-w-md sm:mt-6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <div className="bg-black_a">
              <FloatingLabelInput id="name" label="Name" type="text" name="name" autoComplete="name" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="bg-black_a">
              <FloatingLabelInput id="email" label="Email" type="email" name="email" autoComplete="email" required />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="bg-black_a">
              <FloatingLabelTextarea id="message" label="Message" name="message" autoComplete="message" rows={4} defaultValue={''} />
            </div>
          </div>
        </div>
        <div className="mt-6 text-end">
          <Button type="submit">Send</Button>
        </div>
      </form>
    </>
  );
}
