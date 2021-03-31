import React from 'react';
import './Contact.css';
import Contains from './Contains/Contains';
import Input from './Contains/Input/Input';
import Label from './Contains/Label/Label';
const contact = () => {
  const form = [
    {
      label: 'Name',
      input: {
        type: 'text',
        name: 'name',
        id: 'name',
        placeholder: 'Your name',
        value: '',
      },
    },
    {
      label: 'Email',
      input: {
        type: 'email',
        name: 'email',
        id: 'email',
        placeholder: 'Your email',
        value: '',
      },
    },
    {
      label: 'How did you find us?',
      input: {
        type: 'select',
        name: 'find-us',
        id: 'find-us',
        option: ['Friends', 'Search engine', 'Advertisement', 'Other'],
      },
    },
    {
      label: 'Newsletter?',
      input: {
        type: 'checkbox',
        name: 'news',
        id: 'news',
        value: 'Yes, please',
      },
    },
    {
      label: 'Drop us a line?',
      input: {
        type: 'textArea',
        name: 'message',
        id: 'message',
        placeholder: 'Your message',
        value: '',
      },
    },
    {
      label: '',
      input: {
        type: 'submit',
        name: '',
        id: '',
        value: 'Send it',
      },
    },
  ];
  return (
    <section className="section section-form section--hidden" id="contact">
      <div className="row">
        <h2>We're happy to hear from you</h2>
      </div>
      <div className="row">
        <form method="post" action="#" className="contact-form">
          {form.map(form => (
            <Contains>
              <Label label={form.label} />
              <Input
                name={form.input.id}
                id={form.input.name}
                type={form.input.type}
                option={form.input.option}
                placeholder={form.input.placeholder}
                value={form.input.value}
              />
            </Contains>
          ))}
        </form>
      </div>
    </section>
  );
};

export default contact;
