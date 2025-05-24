
import React from 'react';

const Documentation = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-blue-700 text-white py-8 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight">Email Agent Documentation</h1>
          <p className="mt-2 text-lg opacity-90">AI-powered email automation for seamless communication</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <ul className="flex space-x-6 text-blue-600 font-medium">
            <li><a href="#overview" className="hover:text-blue-800">Overview</a></li>
            <li><a href="#features" className="hover:text-blue-800">Features</a></li>
            <li><a href="#installation" className="hover:text-blue-800">Installation</a></li>
            <li><a href="#usage" className="hover:text-blue-800">Usage</a></li>
            <li><a href="#contributing" className="hover:text-blue-800">Contributing</a></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview Section */}
        <section id="overview" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed">
            The Email Agent is an intelligent system designed to automate email management. It fetches emails using IMAP, filters them based on user-defined criteria, summarizes content with advanced AI models, and generates professional responses via SMTP integration. Built with LangGraph and LangChain, it orchestrates complex workflows to streamline email communication, making it ideal for personal and professional use.
          </p>
        </section>

        {/* Features Section */}
        <section id="features" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Features</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li><strong>Email Fetching:</strong> Retrieves emails from your inbox using IMAP protocol.</li>
            <li><strong>Smart Filtering:</strong> Categorizes emails based on content, sender, or priority.</li>
            <li><strong>AI Summarization:</strong> Generates concise summaries of email content using Deepseek API.</li>
            <li><strong>Automated Responses:</strong> Crafts and sends professional replies via SMTP.</li>
            <li><strong>Workflow Orchestration:</strong> Leverages LangGraph for efficient task management.</li>
            <li><strong>Customizable:</strong> Configurable through a simple .env file for email credentials and API keys.</li>
          </ul>
        </section>

        {/* Installation Section */}
        <section id="installation" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Installation</h2>
          <p className="text-gray-600 mb-4">Follow these steps to set up the Email Agent locally:</p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Prerequisites</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Python 3.8+</li>
              <li>Node.js (for any frontend components, if applicable)</li>
              <li>Email account with IMAP/SMTP enabled</li>
              <li>Deepseek API key</li>
            </ul>
            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Steps</h3>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`
# Clone the repository
git clone https://github.com/Adit122022/email-agent.git
cd email-agent

# Install Python dependencies
pip install -r requirements.txt

# Set up environment variables
cp .env.example .env
# Edit .env with your email credentials and API keys

# Run the application
python main.py
              `}</code>
            </pre>
          </div>
        </section>

        {/* Usage Section */}
        <section id="usage" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Usage</h2>
          <p className="text-gray-600 mb-4">Once the Email Agent is running, it will:</p>
          <ol className="list-decimal pl-6 text-gray-600 space-y-2">
            <li>Connect to your email server using the credentials in <code>.env</code>.</li>
            <li>Fetch unread emails from your inbox.</li>
            <li>Filter and prioritize emails based on predefined rules.</li>
            <li>Summarize email content using the Deepseek API.</li>
            <li>Generate and send responses for selected emails.</li>
          </ol>
          <p className="text-gray-600 mt-4">Example configuration in <code>.env</code>:</p>
          <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`
EMAIL_ADDRESS=your.email@example.com
EMAIL_PASSWORD=yourpassword
IMAP_SERVER=imap.example.com
SMTP_SERVER=smtp.example.com
DEEPSEEK_API_KEY=your_api_key
            `}</code>
          </pre>
        </section>

        {/* Contributing Section */}
        <section id="contributing" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contributing</h2>
          <p className="text-gray-600">
            Contributions are welcome! To contribute:
          </p>
          <ol className="list-decimal pl-6 text-gray-600 space-y-2">
            <li>Fork the repository.</li>
            <li>Create a new branch (<code>git checkout -b feature/your-feature</code>).</li>
            <li>Make your changes and commit (<code>git commit -m "Add your feature"</code>).</li>
            <li>Push to the branch (<code>git push origin feature/your-feature</code>).</li>
            <li>Open a Pull Request.</li>
          </ol>
          <p className="text-gray-600 mt-4">
            Please ensure your code follows the project's coding standards and includes tests where applicable.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p>&copy; 2025 Email Agent. All rights reserved.</p>
          <p>
            View the source code on{' '}
            <a
              href="https://github.com/Adit122022/email-agent"
              className="underline hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Documentation;