export default function Body() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-pink-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-32 w-12 h-12 opacity-30">
        <svg viewBox="0 0 40 40" className="text-red-300">
          <path d="M5 20 L15 10 L15 15 L25 5 L25 10 L35 0 M35 20 L25 30 L25 25 L15 35 L15 30 L5 40" 
                stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      </div>
      
      <div className="absolute top-10 right-1/3 w-32 h-32 bg-pink-200 rounded-full opacity-40 blur-2xl"></div>
      <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-pink-300 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute top-1/3 right-20 w-24 h-24 bg-pink-200 rounded-full opacity-40 blur-2xl"></div>
      
      <div className="absolute top-1/2 left-20 text-red-300 opacity-40">
        <svg viewBox="0 0 60 60" className="w-16 h-16">
          <rect x="10" y="10" width="15" height="15" fill="currentColor"/>
          <rect x="35" y="10" width="15" height="15" fill="currentColor"/>
          <rect x="10" y="35" width="15" height="15" fill="currentColor"/>
          <rect x="35" y="35" width="15" height="15" fill="currentColor"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Temple Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=1000&fit=crop" 
                alt="Temple Architecture"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-cyan-400 font-semibold text-lg">
                No. 1 digital platform for temple portal development.
              </p>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Build Your Own Local <br/>
                <span className="text-gray-900">ಗುಡಿ/देवस्थान/Mandir</span><br/>
                <span className="text-gray-900">Website With</span><br/>
                <span className="text-gray-900">managudi.in</span>
              </h1>
              
              <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                We are dedicated to help local temples, we help to build your own mandir website in an easy and secure way, to connect with your community across the world.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-cyan-400 hover:bg-cyan-500 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Build Your Mandir Website
              </button>
              <button className="bg-white hover:bg-gray-50 text-cyan-400 font-semibold px-8 py-4 rounded-lg border-2 border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                View Sample Mandir Website
              </button>
            </div>
          </div>
        </div>

        {/* Right side preview image */}
        <div className="absolute right-20 top-40 hidden xl:block">
          <div className="relative w-72 transform hover:scale-105 transition-transform duration-300">
            <div className="bg-gray-900 rounded-t-lg p-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="bg-white rounded-b-lg shadow-2xl overflow-hidden">
              <div className="p-4 bg-orange-50">
                <div className="w-12 h-12 bg-orange-400 rounded-full mx-auto mb-2"></div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-gray-900">Our History for Ram Mandir</h3>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-200 rounded w-full"></div>
                  <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-2 bg-gray-200 rounded w-4/6"></div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop" 
                  alt="Temple preview"
                  className="w-full h-40 object-cover rounded-lg mt-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}