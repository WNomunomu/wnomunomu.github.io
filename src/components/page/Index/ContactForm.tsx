import { FormEventHandler } from 'react';

import styles from './indexPage.module.css'

const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
  event.preventDefault();

  const form = new FormData(event.currentTarget);

  const name = form.get('name');
  const email = form.get('email');
  const comment = form.get('comment');

  console.log(name);
  console.log(email);
  console.log(comment);
};

export const ContactForm = () => {

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <div className="row">
            <div className="mt-2 col-md-6">
              <input type="name" className="form-control" placeholder="Name" name="name" />
            </div>
            <div className="mt-2 col-md-6">
              <input type="email" className="form-control" placeholder="Email" name="email" />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <textarea className="form-control" rows={3} placeholder="Comment" name="comment"></textarea>
        </div>
        <div className="d-flex justify-content-center">
          <button className='button fs-5 text-light border-0 py-2 px-4 rounded' type="submit">Send</button>
        </div>
      </form>
    </>
  );
};
