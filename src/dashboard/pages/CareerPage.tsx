// src/dashboard/pages/CareerPage.tsx
import type { ChangeEvent, FormEvent } from 'react';
import Input from '../components/form/Input';
import Select from '../components/form/Select';
import Textarea from '../components/form/Textarea';
import FileUpload from '../components/form/FileUpload';
import { Globe } from 'lucide-react';

const CareerPage = () => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      console.log('Uploaded files:', files);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Career application submitted');
    alert('Application submitted successfully! Our team will review and get back to you shortly.');
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 max-w-2xl mx-auto">
      {/* Gradient Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white rounded-t-lg p-8 text-center">
        <h1 className="text-2xl font-bold mb-3">Join The Team At Konfirm Tech Africa</h1>
        <p className="text-sm leading-relaxed">
          We're excited that you're interested in joining our mission at Konfirm Tech Africa. Whether you're
          applying as an intern, staff member, or volunteer, please fill out the form below. Our team will review your
          application and get back to you shortly.
        </p>
      </div>

      {/* Form Section */}
      <div className="p-8">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Personal Information Section */}
          <div className="bg-gray-50 p-6 rounded-lg space-y-4">
            <h3 className="font-semibold text-gray-900 mb-4">Your Information</h3>

            <Input 
              label="Full Name" 
              name="fullName" 
              required 
              placeholder="John Doe"
            />

            <Input 
              label="Email Address" 
              name="email" 
              required 
              type="email"
              placeholder="youremail@mail.com"
            />

            <Input 
              label="Phone Number" 
              name="phone" 
              required
              type="tel"
              placeholder="+234 (81) 000-0000"
            />

            {/* Role and Department - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select label="Role Type" name="roleType" required>
                <option value="">Select Role Type</option>
                <option value="intern">Intern</option>
                <option value="contributor">Contributor</option>
                <option value="volunteer">Volunteer</option>
                <option value="staff">Staff/Member</option>
              </Select>

              <Select label="Select A Department" name="department" required>
                <option value="">Select Department</option>
                <option value="design">Design</option>
                <option value="development">Development</option>
                <option value="marketing">Marketing</option>
                <option value="content">Content</option>
                <option value="data-analytics">Data & Analytics</option>
              </Select>
            </div>

            <Textarea 
              label="Why Do You Want To Join KTA?" 
              name="whyJoin" 
              required
              placeholder="Tell us why you want to join Konfirm Tech Africa"
              rows={4}
            />

            {/* File Uploads - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FileUpload
                label="Upload CV / Portfolio (Optional But Recommended)"
                id="cv-portfolio"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
              />

              <FileUpload
                label="Upload A Short Video Why We Should Hire You"
                id="video"
                onChange={handleFileChange}
                accept="video/*"
              />
            </div>

            <Select label="Select Availability" name="availability" required>
              <option value="">Select Availability</option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="contract">Contract</option>
            </Select>
          </div>

          {/* Social Media Section */}
          <div className="bg-gray-50 p-6 rounded-lg space-y-4">
            <h3 className="font-semibold text-gray-900 mb-4">Social Media Profiles</h3>

            {/* LinkedIn */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                LinkedIn
              </label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="url"
                  name="linkedin"
                  placeholder="LinkedIn Profile URL"
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kta focus:border-transparent"
                />
              </div>
            </div>

            {/* X and Behance/GitHub/Dribbble - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  X
                </label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="url"
                    name="twitter"
                    placeholder="X Profile URL"
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kta focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Behance/GitHub/Dribbble
                </label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="url"
                    name="portfolio"
                    placeholder="Behance/GitHub/Dribbble Profile URL"
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kta focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Facebook */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Facebook
              </label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="url"
                  name="facebook"
                  placeholder="Facebook Profile URL"
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kta focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Availability Date */}
          <Select label="Availability Date" name="availabilityDate" required>
            <option value="">Select When You're Available</option>
            <option value="immediately">Immediately</option>
            <option value="1-week">Within 1 Week</option>
            <option value="2-weeks">Within 2 Weeks</option>
            <option value="1-month">Within 1 Month</option>
          </Select>

          {/* Additional Information */}
          <Textarea 
            label="Additional Information" 
            name="additionalInfo"
            placeholder="Any additional information you'd like to share"
            rows={4}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
          >
            Submit
          </button>

          {/* Privacy Notice */}
          <div className="bg-gray-800 text-white p-4 rounded-lg text-xs text-center">
            <p>
              🔒 We use your confidential information such as email, your details, mobile and CV/Portfolio, account
              passwords, etc. in total strict privacy. Please see our{' '}
              <span className="text-blue-400 underline cursor-pointer">Privacy Policy</span>
            </p>
          </div>
        </form>

        {/* Powered by Forms */}
        <div className="mt-6 text-center text-xs text-gray-500">
          Powered by Forms
        </div>
      </div>
    </div>
  );
};

export default CareerPage;