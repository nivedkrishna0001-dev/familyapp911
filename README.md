# 💓 Family Pulse

Family Pulse is a real-time, interactive health dashboard designed for families to monitor and support each other's daily wellness. Built as a Progressive Web App (PWA), it allows family members to seamlessly sync their daily check-ins across all their devices.

**🚀 [Live Demo: Try Family Pulse Here](https://family-app-007.web.app)**

## ✨ Features

* **Real-Time Syncing:** Powered by Firebase Firestore, any update made by a family member instantly updates on everyone else's screen without refreshing.
* **🧠 AI Health Assistant:** Integrated with the **Google Gemini (2.5 Flash) API**. The chatbot reads the user's current inputs (blood pressure, sugar, mood, etc.) and provides instant, personalized, context-aware health advice.
* **Progressive Web App (PWA):** Fully installable on iOS and Android devices directly to the home screen for a native app experience.
* **Smart Health Alerts:** The dashboard automatically calculates vitals and displays custom warnings/praise (e.g., flagging skipped meals, low hydration, or abnormal blood pressure readings).
* **Role-Based Access:** The creator of the family group is assigned an "Admin" role, granting them the ability to manage the dashboard and remove members.
* **Beautiful UI/UX:** Features modern iOS-style toggle switches, smooth toast notifications (Toastify-JS), and responsive design.

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES Modules)
* **Backend / Database:** Google Firebase (Firestore Database)
* **AI Integration:** Google Gemini API (`gemini-2.5-flash`)
* **Libraries:** [Toastify-JS](https://apvarun.github.io/toastify-js/) (CDN) for notifications.

## 📁 Folder Structure

\`\`\`text
family-pulse/
│
├── index.html           # Login / Family Creation Page
├── dashboard.html       # Main Real-Time Dashboard & AI Chat
├── firebase-config.js   # Firebase Initialization
├── manifest.json        # PWA Configuration File
└── sw.js                # Service Worker for PWA Installation
\`\`\`

## 🚀 Local Setup & Installation

Because this project uses modern JavaScript ES Modules (`<script type="module">`), you cannot just double-click the HTML files to run them. They must be served over a local web server.

1. **Clone the repository:**
   \`\`\`bash
   git clone https://github.com/YOUR_USERNAME/family-pulse.git
   cd family-pulse
   \`\`\`

2. **Add your API Keys:**
   * Open `firebase-config.js` and add your Firebase configuration object.
   * Open `dashboard.html` and replace `GEMINI_API_KEY` with your Google AI Studio key.

3. **Run a Local Server:**
   If you have Node.js installed, you can use:
   \`\`\`bash
   npx serve .
   \`\`\`
   *Alternatively, if using VS Code, install the "Live Server" extension and right-click `index.html` -> "Open with Live Server".*

## 🔒 Database Security (Firestore Rules)
For this app to function securely, your Firebase Firestore rules should be configured. *(Note: Ensure you set up appropriate auth rules before deploying to production!)*

## 👨‍💻 Author
Built by [Your Name/Username]
