import { PhoneCall, Mail, MapPin, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <main className="pb-16">
      {/* Hero / Breadcrumb */}
      <section className="bg-gradient-to-b from-cyan-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900">Contact</h1>
          <div className="mt-3 text-sm text-gray-500">
            <Link to="/" className="hover:text-gray-700">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Contact</span>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phones */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center">
                <PhoneCall className="w-6 h-6 text-cyan-500" />
              </div>
              <div>
                <p className="text-gray-800 font-medium">+91 6362968135</p>
                <p className="text-gray-800 font-medium mt-1">+60 12-492 5786</p>
                <p className="text-gray-800 font-medium mt-1">+91 62619 00209</p>
              </div>
            </div>
          </div>

          {/* Emails */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center">
                <Mail className="w-6 h-6 text-cyan-500" />
              </div>
              <div className="text-gray-800">
                <p className="font-medium">xlligentusa@gmail.com</p>
                <p className="font-medium mt-1">sales@xlligent-softwares.com</p>
                <input
                type="text"
        className="w-full mt-4 rounded-lg border border-gray-300 px-3 py-2"
        placeholder="Type here..."
        onInput={(e) => {
          // write typed text to the echo element below (no React state/hooks)
          const echo = e.currentTarget.nextElementSibling?.querySelector('[data-echo]');
          if (echo) echo.textContent = e.currentTarget.value;
        }}
      />

      {/* Echo area */}
      <p className="mt-2 text-sm text-gray-700">
        <span className="font-medium">You typed:</span>{' '}
        <span data-echo className="text-gray-900"></span>
      </p>
              </div>
            </div>
          </div>

          {/* Addresses */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center">
               <Globe className="w-5 h-5 mr-1" />
              </div>
              <div className="text-gray-800 space-y-3">
                <div>
                  <p className="font-semibold">US Office:</p>
                  <p>101 Park Offices Drive, TBA</p>
                  <p>Research Triangle Park, North Carolina 27709</p>
                </div>
                <div>
                  <p className="font-semibold">Head Office:</p>
                  <p>Xlligent Softwares Pvt Ltd 111, Moti Bunglow,</p>
                  <p>Dewas, (M.P.)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
