// src/dashboard/pages/ContactPage.tsx
import type { ChangeEvent, FormEvent } from 'react';
import PageContainer from '../layout/PageContainer';
import Input from '../components/form/Input';
import Textarea from '../components/form/Textarea';
import FileUpload from '../components/form/FileUpload';
import SubmitButton from '../components/form/SubmitButton';

const ContactPage = () => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      console.log('Uploaded files:', files);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Contact form submitted');
  };

  return (
    <PageContainer title="Send Us A Message" description="Let us know how we can support you. Fill out the form and our team will get back to you within 24 hours.">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="Name" name="name" required placeholder="John Doe" />
          <Input label="Email" name="email" required type="email" placeholder="johndoe@gmail.com" />
        </div>

        <Input label="Phone" name="phone" type="tel" placeholder="+234 800 000 0000" />

        <Input label="Subject" name="subject" required placeholder="Subject" />

        <Textarea 
          label="Your Message" 
          name="message" 
          placeholder="Your message"
          rows={6}
        />

        <FileUpload
          label="Upload File (Optional)"
          id="contact-file"
          onChange={handleFileChange}
        />

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="bookSession"
            name="bookSession"
            className="w-4 h-4 text-kta border-gray-300 rounded focus:ring-kta focus:ring-2"
          />
          <label htmlFor="bookSession" className="text-sm text-gray-700">
            I would like to book a strategy session
          </label>
        </div>

        <SubmitButton>Send Message</SubmitButton>
      </form>
    </PageContainer>
  );
};

export default ContactPage;