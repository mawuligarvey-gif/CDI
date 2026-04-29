export default function Terms() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-primary mb-8">Terms and Conditions</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              By using this website, you agree to the following terms:
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Use of Website</h2>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-6">
              <li>You agree to use this website for lawful purposes only</li>
              <li>You will not misuse or attempt to disrupt the site</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Content</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              All content on this website is for general information purposes only and may change without notice.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We are not responsible for any loss or damage resulting from the use of this website.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">External Links</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We may link to other websites. We are not responsible for their content.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Changes</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update these terms at any time without notice.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}