
import React from 'react';

const Documentation = () => {
  return (
    <div className="min-h-screen bg-blue-950 text-gray-100 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-10 shadow-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Email Agent Documentation</h1>
          <p className="mt-3 text-lg opacity-90 max-w-2xl">
            Streamline your email workflow with an AI-powered automation system
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-blue-900 shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <ul className="flex space-x-6 text-blue-200 font-medium">
            <li><a href="#overview" className="hover:text-white transition-colors">Overview</a></li>
            <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
            <li><a href="#installation" className="hover:text-white transition-colors">Installation</a></li>
            <li><a href="#usage" className="hover:text-white transition-colors">Usage</a></li>
            <li><a href="#contributing" className="hover:text-white transition-colors">Contributing</a></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview Section */}
        <section id="overview" className="mb-16 bg-blue-900 rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-white mb-4">Overview</h2>
          <p className="text-blue-200 leading-relaxed max-w-3xl">
            The Email Agent is a sophisticated AI-driven solution designed to automate email management with precision and efficiency. By leveraging LangGraph and LangChain, it orchestrates complex workflows to fetch emails via IMAP, filter them based on custom criteria, summarize content using the Deepseek API, and generate professional responses through SMTP integration. This system is tailored for professionals and businesses seeking to optimize their email communication.
          </p>
        </section>

        {/* Features Section */}
        <section id="features" className="mb-16 bg-blue-900 rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-white mb-4">Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-200">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span><strong>Email Fetching:</strong> Securely retrieves emails from your inbox using IMAP protocol.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span><strong>Smart Filtering:</strong> Categorizes emails by content, sender, or priority with customizable rules.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span><strong>AI Summarization:</strong> Generates concise summaries of email content using Deepseek API.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span><strong>Automated Responses:</strong> Crafts and sends professional replies via SMTP.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span><strong>Workflow Orchestration:</strong> Utilizes LangGraph for seamless task management.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span><strong>Customizable:</strong> Easily configured through a .env file for email and API settings.</span>
            </li>
          </ul>
        </section>

        {/* Installation Section */}
        <section id="installation" className="mb-16 bg-blue-900 rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-white mb-4">Installation</h2>
          <p className="text-blue-200 mb-4">Set up the Email Agent locally with the following steps:</p>
          <div className="bg-blue-800 p-6 rounded-lg">
            <h3 className="text-xl font-medium text-white mb-3">Prerequisites</h3>
            <ul className="list-disc pl-6 text-blue-200 mb-4">
              <li>Python 3.8 or higher</li>
              <li>Node.js (optional, for frontend components)</li>
              <li>Email account with IMAP/SMTP enabled</li>
              <li>Deepseek API key</li>
            </ul>
            <h3 className="text-xl font-medium text-white mb-3">Setup Steps</h3>
            <pre className="bg-gray-900 text-blue-100 p-4 rounded-lg overflow-x-auto">
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
        <section id="usage" className="mb-16 bg-blue-900 rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-white mb-4">Usage</h2>
          <p className="text-blue-200 mb-4">Once running, the Email Agent performs the following tasks:</p>
          <ol className="list-decimal pl-6 text-blue-200 space-y-2 mb-4">
            <li>Connects to your email server using credentials from the <code>.env</code> file.</li>
            <li>Fetches unread emails from your inbox.</li>
            <li>Filters and prioritizes emails based on predefined rules.</li>
            <li>Summarizes email content using the Deepseek API.</li>
            <li>Generates and sends professional responses for selected emails.</li>
          </ol>
          <p className="text-blue-200 mb-4">Example <code>.env</code> configuration:</p>
          <pre className="bg-gray-900 text-blue-100 p-4 rounded-lg overflow-x-auto">
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
        <section id="contributing" className="mb-16 bg-blue-900 rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-white mb-4">Contributing</h2>
          <p className="text-blue-200 mb-4">
            We welcome contributions to enhance the Email Agent. Follow these steps to contribute:
          </p>
          <ol className="list-decimal pl-6 text-blue-200 space-y-2">
            <li>Fork the repository on GitHub.</li>
            <li>Create a new branch (<code>git checkout -b feature/your-feature</code>).</li>
            <li>Make your changes and commit (<code>git commit -m "Add your feature"</code>).</li>
            <li>Push to your branch (<code>git push origin feature/your-feature</code>).</li>
            <li>Open a Pull Request with a detailed description.</li>
          </ol>
          <p className="text-blue-200 mt-4">
            Ensure your code adheres to the project's coding standards and includes relevant tests.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-blue-200 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p>© 2025 Email Agent. All rights reserved.</p>
          <p className="mt-2">
            Explore the source code on{' '}
            <a
              href="https://github.com/Adit122022/email-agent"
              className="underline hover:text-white transition-colors"
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