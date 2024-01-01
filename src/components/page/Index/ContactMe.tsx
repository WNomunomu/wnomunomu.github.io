import { FC } from 'react';
import type { MutableRefObject } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { ContactForm } from './ContactForm';

type Props = {
  contactMeRef: MutableRefObject<HTMLDivElement | null>
}

export const ContactMe: FC<Props> = (props) => {

  const { contactMeRef } = props;

  return (
    <div
      className="vh-100 bg-body d-flex align-items-center justify-content-center"
      ref={contactMeRef}
    >
      <div className="mx-auto col-10 col-sm-10 col-md-8 col-xl-6">
        <div className="fs-1 fw-bold text-center">Contact me</div>
        <div className="fs-5 mb-4">
          <div>
            このサイトを最後までご覧いただき、誠にありがとうございました。
            少しでも私について知っていただけたなら嬉しいです。
            何かコメントや感想がありましたら、ぜひ下記フォームからお知らせください。
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};
