# 📧 Email Agent using MCP (Model Context Protocol)

An experimental **AI-powered email assistant** that can:

* ✉️ Send emails on your behalf
* 📅 Set events in your Google Calendar
* ✅ Authenticate securely using OAuth

All powered by **Model Context Protocol (MCP)** — enabling an intelligent, context-aware AI agent.

> ⚠️ **Status**: This project is actively under development. UI enhancements and additional features are planned.

---

## 🚀 Features

* 🤖 AI Agent built with GenAI
* 🔒 OAuth integration for secure Gmail and Calendar access
* 🧠 Contextual understanding using the **Model Context Protocol (MCP)**
* 📬 Compose and send emails using AI
* 📆 Create calendar events using voice/text instructions

---

## 🧠 What is MCP (Model Context Protocol)?

MCP is an open protocol that allows developers to build intelligent agents that can:

* Maintain long-term memory and task history
* Communicate with LLMs via a standardized context
* Act and reason with tool usage via a unified agent interface

### Why use MCP in this project?

* **Agent State**: MCP handles context persistence and memory
* **Tool Execution**: Defines how the AI can invoke tools like `sendEmail`, `createCalendarEvent`, etc.
* **Structured Flow**: Offers a standard way to define commands, goals, and outcomes

---

## 🧑‍💻 How it works

1. **User gives command**: e.g., "Send an email to John saying I'll be late."
2. **Agent parses intent** using GenAI model
3. **MCP Agent** evaluates tools required → selects `sendEmail`
4. **OAuth authentication** is verified
5. **Email is sent** via Gmail API

Same applies to calendar events like:

> "Set a meeting with Sarah tomorrow at 10 AM."

---

## 🧪 How to Use This Project

### 1. Clone the repo

```bash
git clone https://github.com/Adit122022/email-agent.git
cd email-agent
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file with your Google API credentials:

```env
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_REDIRECT_URI=http://localhost:3000/oauth2callback
```

### 4. Start the MCP server

```bash
npm run dev
```

This starts a local server where the AI agent can receive instructions and perform actions like sending email or creating events.

---

## 🔐 Authentication (OAuth2)

The agent uses OAuth 2.0 to get permission from users to:

* Access Gmail for sending emails
* Manage Calendar events

OAuth tokens are securely stored and refreshed when needed.

---

## 🔧 MCP Agent: Custom Tooling

Custom tools are defined in `tools/`:

* `sendEmail.js`: Uses Google APIs to send email
* `createCalendarEvent.js`: Adds events to user’s calendar

Each tool is exposed to the MCP Agent through the `@modelcontextprotocol/sdk`, which handles validation (via Zod), schema mapping, and tool invocation.

---

## 🤖 Agent Logic

* Located in `agent/`
* Implements decision making using MCP's `runAgentLoop()`
* Supports:

  * Multi-turn conversations
  * Tool selection
  * Context updates

---

## 📈 Future Goals

* 🌐 Beautiful frontend UI using React + Tailwind
* 🧾 Threaded conversation history with memory
* 📡 Webhook/Slack/Telegram support
* 📦 Deployable Docker container
* ✨ More tools (weather, reminders, notes)

---

## 📌 Project Status

> This project is **under development**. The core MCP agent with tool execution and GenAI integration is fully functional.

We are actively working on building a polished UI and expanding the agent's capabilities.

---

## 📄 License

MIT License © 2025 Aditya Sharma

---

## 🙌 Acknowledgements

* [Model Context Protocol (MCP)](https://github.com/modelcontextprotocol)
* [Google API Node.js Client](https://github.com/googleapis/google-api-nodejs-client)
* [OpenAI](https://openai.com)

---

Stay tuned for updates, and feel free to contribute or report issues 🚀
