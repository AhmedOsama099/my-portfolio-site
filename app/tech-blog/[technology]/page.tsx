import MotionPageWrapper from "@/Components/motionPageWrapper";

export default async function TechnologyDocsPage({
  params,
}: {
  params: Promise<{ technology: string }>;
}) {
  const { technology } = await params;

  return (
    <MotionPageWrapper className="max-w-4xl mx-auto relative max-[980px]:mt-16">
      {/* Page Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {technology.charAt(0).toUpperCase() + technology.slice(1)}{" "}
          Documentation
        </h1>
        <p className="text-lg text-gray-600">
          Complete guide and reference for {technology} development
        </p>
      </header>

      {/* Content Sections */}
      <div className="space-y-8">
        {/* Getting Started Section */}
        <section id="getting-started" className="scroll-mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Getting Started
          </h2>
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-700 mb-4">
              Welcome to the {technology} documentation. This guide will help
              you get started with {technology}
              development and provide comprehensive reference materials.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    This is a placeholder documentation page. Replace this
                    content with actual {technology} documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Section */}
        <section id="installation" className="scroll-mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Installation
          </h2>
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-700 mb-4">
              Follow these steps to install {technology}:
            </p>
            <div className="bg-gray-100 rounded-lg p-4">
              <pre className="text-sm text-gray-800">
                <code>{`npm install ${technology.toLowerCase()}
# or
yarn add ${technology.toLowerCase()}`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Configuration Section */}
        <section id="configuration" className="scroll-mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Configuration
          </h2>
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-700 mb-4">
              Basic configuration for {technology}:
            </p>
            <div className="bg-gray-100 rounded-lg p-4">
              <pre className="text-sm text-gray-800">
                <code>{`// ${technology.toLowerCase()}.config.js
module.exports = {
  // Configuration options
  option1: 'value1',
  option2: 'value2'
};`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* API Reference Section */}
        <section id="api-reference" className="scroll-mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            API Reference
          </h2>
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-700 mb-4">
              Core API methods and properties:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Method 1</h3>
                <p className="text-sm text-gray-600">
                  Description of method 1 functionality.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Method 2</h3>
                <p className="text-sm text-gray-600">
                  Description of method 2 functionality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section id="examples" className="scroll-mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Examples
          </h2>
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-700 mb-4">Common usage examples:</p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Basic Example
                </h3>
                <div className="bg-gray-100 rounded-lg p-4">
                  <pre className="text-sm text-gray-800">
                    <code>{`import ${technology} from '${technology.toLowerCase()}';

const example = new ${technology}({
  // Basic configuration
});

example.init();`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional sections */}
        <section id="troubleshooting" className="scroll-mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Troubleshooting
          </h2>
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-700">
              Common issues and solutions for {technology}.
            </p>
          </div>
        </section>

        <section id="advanced" className="scroll-mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Advanced Topics
          </h2>
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-700">
              Advanced usage patterns and best practices.
            </p>
          </div>
        </section>

        <section id="migration" className="scroll-mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Migration Guide
          </h2>
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-700">
              How to migrate from previous versions.
            </p>
          </div>
        </section>
      </div>
    </MotionPageWrapper>
  );
}
