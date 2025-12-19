// src/dashboard/pages/ContactPage.tsx
import PageContainer from '../layout/PageContainer';
import Input from '../components/form/Input';
import Textarea from '../components/form/Textarea';
import SubmitButton from '../components/form/SubmitButton';

const ContactPage = () => {
  return (
    <PageContainer title="Contact Us" description="Manage contact messages">
      <form className="space-y-4">
        <Input label="Full Name" name="fullName" required />
        <Input label="Email Address" name="email" required type="email" />
        <Textarea label="Message" name="message" required />
        <SubmitButton>Send Message</SubmitButton>
      </form>
    </PageContainer>
  );
};

export default ContactPage;
