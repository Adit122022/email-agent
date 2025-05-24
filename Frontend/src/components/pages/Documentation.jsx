import React from 'react';

const Documentation = () => {
  return (
    <div className="min-h-screen bg-blue-950 text-gray-100 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-10 shadow-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Email Agent Documentation</h1>
          <p className="mt-3 text-lg opacity-90 max-w-2xl">
            AI-powered email automation with dynamic user management
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
            <li><a href="#user-management" className="hover:text-white transition-colors">User Management</a></li>
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
            The Email Agent is a sophisticated Node.js application that automates email management with AI assistance.
            It integrates with Gmail API and uses MongoDB for user data storage, allowing personalized email automation
            for multiple users with dynamic ID management.
          </p>
        </section>

        {/* Features Section */}
        <section id="features" className="mb-16 bg-blue-900 rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-white mb-4">Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-200">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span><strong>Dynamic User IDs:</strong> Each user has a unique MongoDB ID that can be customized</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span><strong>Email Automation:</strong> Send, receive, and manage emails through Gmail API</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span><strong>AI Integration:</strong> Uses Google's Gemini AI for smart email handling</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span><strong>OAuth Security:</strong> Secure authentication with refresh token management</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span><strong>MongoDB Backend:</strong> Flexible user data storage with easy ID management</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span><strong>React Frontend:</strong> Modern UI for documentation and configuration</span>
            </li>
          </ul>
        </section>

        {/* Installation Section */}
        <section id="installation" className="mb-16 bg-blue-900 rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-white mb-4">Installation</h2>
          <p className="text-blue-200 mb-4">Set up the Email Agent locally with these steps:</p>
          <div className="bg-blue-800 p-6 rounded-lg">
            <h3 className="text-xl font-medium text-white mb-3">Prerequisites</h3>
            <ul className="list-disc pl-6 text-blue-200 mb-4">
              <li>Node.js 16.x or higher</li>
              <li>MongoDB database (local or Atlas)</li>
              <li>Google Cloud Platform project with Gmail API enabled</li>
              <li>Google Gemini API key</li>
            </ul>
            <h3 className="text-xl font-medium text-white mb-3">Setup Steps</h3>
            <pre className="bg-gray-900 text-blue-100 p-4 rounded-lg overflow-x-auto">
              <code>{`
# Clone the repository
git clone https://github.com/Adit122022/email-agent.git
cd email-agent

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your MongoDB URI and API keys

# Start the application
npm start
              `}</code>
            </pre>
          </div>
        </section>

        {/* User Management Section */}
        <section id="user-management" className="mb-16 bg-blue-900 rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-white mb-4">User ID Management</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">User Model Structure</h3>
            <p className="text-blue-200 mb-4">The MongoDB user schema includes fields for identification and authentication:</p>
            <pre className="bg-gray-900 text-blue-100 p-4 rounded-lg overflow-x-auto">
              <code>{`
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    refreshToken: { type: String, required: true },
    customId: { type: String, unique: true } // Optional custom ID field
});
              `}</code>
            </pre>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">Changing User IDs</h3>
            <p className="text-blue-200 mb-4">You can modify user IDs directly in MongoDB:</p>
            <ol className="list-decimal pl-6 text-blue-200 space-y-2 mb-4">
              <li>Connect to your MongoDB database (using MongoDB Compass or command line)</li>
              <li>Navigate to your database and the 'users' collection</li>
              <li>Find the user document you want to modify</li>
              <li>Update the <code>_id</code> field or add a <code>customId</code> field</li>
            </ol>
            <p className="text-blue-200 mb-2">Example MongoDB update command:</p>
            <pre className="bg-gray-900 text-blue-100 p-4 rounded-lg overflow-x-auto">
              <code>{`
// Update a user's ID
db.users.updateOne(
  { email: "user@example.com" },
  { $set: { customId: "new-custom-id" } }
);
              `}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-medium text-white mb-3">Using Custom IDs in API Calls</h3>
            <p className="text-blue-200 mb-4">When making requests to the Email Agent API, include the user ID:</p>
            <pre className="bg-gray-900 text-blue-100 p-4 rounded-lg overflow-x-auto">
              <code>{`
// Example API request with user ID
fetch('/api/send-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    userId: "user-custom-id",
    to: "recipient@example.com",
    subject: "Hello",
    body: "Message content"
  })
});
              `}</code>
            </pre>
          </div>
        </section>

        {/* Usage Section */}
        <section id="usage" className="mb-16 bg-blue-900 rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-white mb-4">Usage</h2>
          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">Environment Configuration</h3>
            <p className="text-blue-200 mb-4">Example <code>.env</code> configuration:</p>
            <pre className="bg-gray-900 text-blue-100 p-4 rounded-lg overflow-x-auto">
              <code>{`
MONGODB_URI=mongodb://localhost:27017/email-agent
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_REDIRECT_URI=http://localhost:3000/auth/google/callback
GOOGLE_GEMINI_KEY=your-gemini-api-key
SESSION_SECRET=your-session-secret
              `}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-medium text-white mb-3">API Endpoints</h3>
            <div className="bg-blue-800 p-4 rounded-lg mb-4">
              <h4 className="font-medium text-white mb-2">POST /api/send-email</h4>
              <p className="text-blue-200 mb-2">Send an email on behalf of a user</p>
              <pre className="bg-gray-900 text-blue-100 p-3 rounded-lg text-sm">
                <code>{`
Request Body:
{
  "userId": "user-id-from-mongodb",
  "to": "recipient@example.com",
  "subject": "Email Subject",
  "body": "Email content"
}
                `}</code>
              </pre>
            </div>

            <div className="bg-blue-800 p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2">GET /api/user/:userId</h4>
              <p className="text-blue-200 mb-2">Retrieve user information</p>
              <pre className="bg-gray-900 text-blue-100 p-3 rounded-lg text-sm">
                <code>{`
Response:
{
  "_id": "mongodb-object-id",
  "name": "User Name",
  "email": "user@example.com",
  "customId": "optional-custom-id"
}
                `}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Contributing Section */}
        <section id="contributing" className="mb-16 bg-blue-900 rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-white mb-4">Contributing</h2>
          <p className="text-blue-200 mb-4">
            Contributions to enhance the Email Agent are welcome:
          </p>
          <ol className="list-decimal pl-6 text-blue-200 space-y-2">
            <li>Fork the repository on GitHub</li>
            <li>Create a feature branch (<code>git checkout -b feature/your-feature</code>)</li>
            <li>Commit your changes (<code>git commit -m "Add your feature"</code>)</li>
            <li>Push to the branch (<code>git push origin feature/your-feature</code>)</li>
            <li>Open a Pull Request with a detailed description</li>
          </ol>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-blue-200 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Email Agent. All rights reserved.</p>
          <p className="mt-2">
            <a
              href="https://github.com/Adit122022/email-agent"
              className="underline hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Documentation;