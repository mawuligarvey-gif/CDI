export default function PrivacyPolicy() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-deep-blue mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              We value your privacy. This website collects minimal personal information necessary to provide our services.
            </p>

            <h2 className="text-2xl font-bold text-deep-blue mt-8 mb-4">Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We may collect:</p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-6">
              <li>Name and contact details (if you fill a form)</li>
              <li>Email address</li>
              <li>Basic usage data (via cookies or analytics)</li>
            </ul>

            <h2 className="text-2xl font-bold text-deep-blue mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-6">
              <li>Respond to inquiries</li>
              <li>Improve our website and services</li>
              <li>Communicate updates (if you opt in)</li>
            </ul>

            <h2 className="text-2xl font-bold text-deep-blue mt-8 mb-4">Data Protection</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We do not sell or share your personal data with third parties.
            </p>

            <h2 className="text-2xl font-bold text-deep-blue mt-8 mb-4">Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              This website may use cookies to improve user experience.
            </p>

            <h2 className="text-2xl font-bold text-deep-blue mt-8 mb-4">Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions, contact us at: <a href="mailto:theculturaldiplomats@gmail.com" className="text-gold hover:underline">theculturaldiplomats@gmail.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}