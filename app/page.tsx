export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="bg-white py-20 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">ClinicaContent</h1>
          <p className="text-xl mb-6">
            Physician-curated content for modern healthcare organizations
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Request a Consultation
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-10 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Residency Program Website Support</h3>
              <p className="mb-4">
                ACGME-aligned, recruitment-focused content for residency and fellowship programs.
              </p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Website audits & rewrites</li>
                <li>Curriculum & rotation descriptions</li>
                <li>Faculty, resident & wellness pages</li>
                <li>Recruitment-season updates</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Patient Education Handouts</h3>
              <p className="mb-4">
                Clear, health-literate, clinic-ready materials tailored to your patient population.
              </p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Plain-language handouts</li>
                <li>Custom branding</li>
                <li>Multilingual options</li>
                <li>Print & digital formats</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-10">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">Website Refresh</h3>
              <p className="text-2xl font-bold mb-2">$750–$1,200</p>
              <p className="text-sm">Up to 5 core pages, optimized and professionally rewritten.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">Comprehensive Website Revamp</h3>
              <p className="text-2xl font-bold mb-2">$2,500–$4,000</p>
              <p className="text-sm">Full content audit, SEO optimization, and recruitment messaging.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">Patient Handout Bundles</h3>
              <p className="text-2xl font-bold mb-2">$400–$2,000</p>
              <p className="text-sm">Custom, branded educational materials for clinics and practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intake Form Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6 text-center">Get Started</h2>
          <form className="bg-white p-6 rounded-xl shadow space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Organization / Program"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Tell us about your needs"
              className="w-full border border-gray-300 rounded px-3 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ClinicaContent. All rights reserved.
      </footer>
    </main>
  );
}
