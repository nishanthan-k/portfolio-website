import React, { useRef } from 'react';
import SectionTitle from "../global/components/SectionTitle";

interface InputFieldProps {
  placeholder: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ placeholder, name, handleChange }) => (
  <input
    className='h-9 px-4 bg-gray-700 text-gray-200 rounded-lg'
    placeholder={placeholder}
    name={name}
    onChange={handleChange}
  />
);

export default function Contact() {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const messageRef = useRef('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // to access the form data without any state or ref
    const formData = new FormData(e.currentTarget);
    const formValue = Object.fromEntries(formData.entries());

    console.log(formValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'name') {
      nameRef.current = value;
    } else if (name === 'email') {
      emailRef.current = value;
    } else if (name === 'message') {
      messageRef.current = value;
    }
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <SectionTitle title='CONTACT' />

      <form onSubmit={handleSubmit} className="w-[320px] md:w-[520px] flex flex-col gap-4">
        <InputField placeholder='Name' name='name' handleChange={handleChange} />
        <InputField placeholder='Email' name='email' handleChange={handleChange} />
        <textarea
          rows={6}
          placeholder='Message'
          name='message'
          className='px-4 py-2 bg-gray-700 text-gray-200 rounded-lg'
          onChange={handleChange}
        />

        <button
          type='submit'
          className='self-center bg-white text-black font-medium px-10 py-2 md:px-16 rounded-xl'
        >
          Send
        </button>
      </form>
    </div>
  );
}
