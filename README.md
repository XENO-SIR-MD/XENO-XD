# HANS-BYTE WhatsApp Bot

A powerful and feature-rich WhatsApp bot built using Node.js and the [Baileys](https://github.com/WhiskeySockets/Baileys) library.

## 🚀 Features

HANS-BYTE comes packed with a wide range of features to enhance your WhatsApp experience:

*   **Automated Interactions**:
    *   Auto Reply, Auto React, Auto Read Status
    *   Auto Voice, Auto Sticker, Auto Typing/Recording
    *   Welcome messages for new group members
*   **Moderation & Security**:
    *   Anti-Link (detects and removes group links)
    *   Anti-Delete (logs deleted messages)
    *   Anti-Bad Words
    *   Owner/Sudo command privileges
*   **Media & Downloads**:
    *   YouTube, Facebook, and generic video downloaders
    *   Sticker creation and formatting
    *   Image processing (using Canvas/Jimp)
*   **AI Integration**:
    *   Gemini AI integration for enhanced responses
*   **System**:
    *   Multi-device support
    *   Pm2 process management for reliability

## 📋 Requirements

*   [Node.js](https://nodejs.org/) (v16 or higher recommended)
*   [FFmpeg](https://ffmpeg.org/) (required for media processing)
*   Any text editor (VS Code recommended)

## 🛠️ Installation

1.  **Clone the repository**
    ```bash
    git clone <your-repo-url>
    cd HANS_BYTE-main
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

## ⚙️ Configuration

1.  **Create a `.env` file**
    Create a file named `config.env` in the root directory. You can use the variables found in `config.js` as a reference.

2.  **Essential Variables**
    Add the following variables to your `config.env` file:

    ```env
    SESSION_ID=your_session_id_here
    OWNER_NUM=918136810956
    OWNER_NAME=𝗫𝗘𝗡𝗢 𝗫𝗗
    PREFIX=.
    MODE=public
    GEMINI_API_KEY=your_gemini_api_key
    ```

    *Check `config.js` for a full list of available configuration options and their default values.*

## ▶️ Usage

To start the bot, run the following command found in package.json:

```bash
npm start
```

This will launch the bot using PM2 for process management, ensuring it stays online and restarts automatically if it crashes.

## 🚀 Deployment

### Railway / Heroku
This project includes `railway.json`, `Procfile`, and `Dockerfile` for easy deployment on platforms like Railway or Heroku.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new)

1.  **Railway**: Connect your repository to Railway and it should automatically detect the configuration.
2.  **Heroku**: Use the `Procfile` to deploy.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the ISC License.
