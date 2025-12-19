// src/dashboard/pages/BookingPage.tsx
import type { ChangeEvent, FormEvent } from 'react';
import PageContainer from '../layout/PageContainer';
import Input from '../components/form/Input';
import Select from '../components/form/Select';
import Textarea from '../components/form/Textarea';
import FileUpload from '../components/form/FileUpload';
import SubmitButton from '../components/form/SubmitButton';

const BookingPage = () => {
  // Handler for file upload
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      console.log('Uploaded files:', files);
    }
  };

  // Handler for form submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Booking submitted');
  };

  return (
    <PageContainer
      title="Strategy Session Bookings"
      description="Manage strategy session booking requests"
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        <Input label="Full Name" name="fullName" required />
        <Input label="Email Address" name="email" required type="email" />

        <Select label="Select Package" name="package" required>
          <option value="standard">Standard</option>
          <option value="premium">Premium</option>
          <option value="enterprise">Enterprise</option>
        </Select>

        <Textarea label="Additional Notes" name="notes" />

        <FileUpload
          id="booking-files"
          onChange={handleFileChange}
          label="Upload Files"
        />

        <SubmitButton>Submit Booking</SubmitButton>
      </form>
    </PageContainer>
  );
};

export default BookingPage;
