import 'bootstrap/dist/css/bootstrap.min.css';

import { ContactForm } from './ContactForm';

export const ContactMe = () => {
  return (
    <div className="vh-100 bg-body d-flex align-items-center justify-content-center">
      <div className="mx-auto" style={{ width: '50%' }}>
        <div className="fs-1 fw-bold text-center">Contact me</div>
        <div className="fs-5 mb-4">
          <div>最後までご覧いただきありがとうございました。このサイトを通して、私のことを少しでも知っていただけたのなら嬉しいです。もしこのサイトや私について何かコメントがありましたら、下記フォームをご利用ください。</div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};
