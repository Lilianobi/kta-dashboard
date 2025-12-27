// src/dashboard/pages/BookingPage.tsx
import type {FormEvent } from 'react';
import Input from '../components/form/Input';
import Select from '../components/form/Select';

const BookingPage = () => {
  // Handler for form submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Booking submitted');
    alert('Strategy session booking submitted! We will confirm availability shortly.');
  };

  // Handler for cancel button
  const handleCancel = () => {
    console.log('Booking cancelled');
  };

  // Get minimum date (3 days from today)
  const getMinDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 3);
    return date.toISOString().split('T')[0];
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 max-w-3xl mx-auto">
      {/* Blue Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-t-lg p-8">
        <h1 className="text-2xl font-bold mb-3">Contact / Strategy Session Booking Form</h1>
        <p className="text-blue-100 leading-relaxed">
          Book a free strategy session with our team. Share a few details about your business
          and the support you're looking for so we can prepare for our meeting. Please note:
          Kindly select a date at least 3 days from today to give us time to review and confirm
          availability.
        </p>
      </div>

      {/* Form Section */}
      <div className="p-8">
        <p className="text-sm text-gray-600 text-right mb-6">All fields are mandatory</p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <Input 
            label="Your name" 
            name="name" 
            required 
            placeholder="Enter your full name"
          />

          <Input 
            label="Email address" 
            name="email" 
            required 
            type="email"
            placeholder="Enter your email address"
          />

          {/* Date and Time - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date & Time <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="date"
                required
                min={getMinDate()}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kta focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                &nbsp;
              </label>
              <select
                name="time"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kta focus:border-transparent"
              >
                <option value="09:30">09:30 am</option>
                <option value="10:00">10:00 am</option>
                <option value="10:30">10:30 am</option>
                <option value="11:00">11:00 am</option>
                <option value="11:30">11:30 am</option>
                <option value="12:00">12:00 pm</option>
                <option value="12:30">12:30 pm</option>
                <option value="13:00">01:00 pm</option>
                <option value="13:30">01:30 pm</option>
                <option value="14:00">02:00 pm</option>
                <option value="14:30">02:30 pm</option>
                <option value="15:00">03:00 pm</option>
                <option value="15:30">03:30 pm</option>
                <option value="16:00">04:00 pm</option>
                <option value="16:30">04:30 pm</option>
                <option value="17:00">05:00 pm</option>
              </select>
            </div>
          </div>

          {/* Time Zone */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Time Zone
            </label>
            <a 
              href="https://www.timeanddate.com/worldclock/nigeria/lagos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700 underline"
            >
              Africa/Lagos
            </a>
          </div>

          {/* Duration */}
          <Select label="Duration" name="duration" required>
            <option value="5">5 mins</option>
            <option value="15">15 mins</option>
            <option value="30">30 mins</option>
            <option value="45">45 mins</option>
            <option value="60">1 hour</option>
          </Select>

          {/* Reason */}
          <Input 
            label="Reason" 
            name="reason" 
            required 
            placeholder="Please provide reason for booking"
          />

          {/* Send and Cancel Buttons - Side by Side */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
            >
              Send
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>

        {/* Powered by Calendar footer (optional) */}
        <div className="mt-6 text-center text-xs text-gray-500">
          Powered by KTA calender
        </div>
      </div>
    </div>
  );
};

export default BookingPage;