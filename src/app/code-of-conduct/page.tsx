export default function CodeOfConduct() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-deep-blue mb-8">Code of Conduct</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              We are committed to maintaining a respectful and safe environment.
            </p>

            <h2 className="text-2xl font-bold text-deep-blue mt-8 mb-4">Expected Behavior</h2>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-6">
              <li>Be respectful and professional</li>
              <li>Use appropriate language</li>
              <li>Respect others' opinions</li>
            </ul>

            <h2 className="text-2xl font-bold text-deep-blue mt-8 mb-4">Unacceptable Behavior</h2>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-6">
              <li>Harassment or discrimination</li>
              <li>Offensive or abusive language</li>
              <li>Spamming or misuse of the platform</li>
            </ul>

            <h2 className="text-2xl font-bold text-deep-blue mt-8 mb-4">Enforcement</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to restrict access to users who violate these rules.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}