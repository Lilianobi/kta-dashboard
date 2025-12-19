// src/dashboard/pages/CareerPage.tsx
import PageContainer from '../layout/PageContainer';
import Input from '../components/form/Input';
import FileUpload from '../components/form/FileUpload';
import SubmitButton from '../components/form/SubmitButton';

const CareerPage = () => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
  };

  return (
    <PageContainer title="Career Applications" description="Manage job applications">
      <form className="space-y-4">
        <Input label="Full Name" name="fullName" required />
        <Input label="Email Address" name="email" required type="email" />
        <Input label="Phone Number" name="phone" />

        {/* Provide all required props: label, id, onChange */}
        <FileUpload
          label="Upload Your Resume"
          id="resume"
          onChange={handleFileChange}
        />

        <SubmitButton>Submit Application</SubmitButton>
      </form>
    </PageContainer>
  );
};

export default CareerPage;
