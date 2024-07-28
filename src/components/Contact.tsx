import React from 'react';
import SectionTitle from "../global/components/SectionTitle";

interface InputFieldProps {
  placeholder: string;
  name: string;
}

const InputField: React.FC<InputFieldProps> = ({ placeholder, name }) => (
  <input
    className='h-9 px-4 bg-gray-700 text-gray-200 rounded-lg'
    placeholder={placeholder}
    name={name}
  />
);

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formValue = Object.fromEntries(formData.entries());

    console.log(formValue);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <SectionTitle title='CONTACT' />

      <form onSubmit={handleSubmit} className="w-[320px] md:w-[520px] flex flex-col gap-4">
        <InputField placeholder='Name' name='name' />
        <InputField placeholder='Email' name='email' />
        <textarea
          rows={6}
          placeholder='Message' name='message'
          className='px-4 py-2 bg-gray-700 text-gray-200 rounded-lg'
        />

        <button
          type='submit'
          className='w-max self-center bg-white text-black font-medium px-10 py-2 rounded-xl'
        >
          Send
        </button>
      </form>
    </div>
  );
}
