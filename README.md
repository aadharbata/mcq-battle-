# ⚔️ MCQ Battle

> **Challenge your knowledge. Compete with others. Become the champion.**

**MCQ Battle** is a real-time multiplayer multiple-choice quiz platform where users can participate in competitive quiz battles, answer questions, and compete against opponents in an interactive environment.

The project is built as a **full-stack TypeScript monorepo** with a Next.js frontend, a dedicated WebSocket server for real-time communication, and a shared Prisma database layer.

---

## ✨ Features

* 🎯 **MCQ Quiz Battles** — Answer multiple-choice questions in an interactive quiz environment.
* ⚡ **Real-Time Multiplayer** — WebSocket-powered communication enables live quiz interactions between players.
* 🏆 **Competitive Gameplay** — Compete against other players and see how well you perform.
* 🔐 **Authentication** — Secure user authentication and session handling.
* 📊 **Quiz & Game Management** — Manage questions, players, and game state across the application.
* 🔄 **Real-Time Game State** — Synchronize game events and player actions through WebSockets.
* 🗄️ **Database Integration** — Persistent application data managed through Prisma ORM.
* 🚀 **Scalable Architecture** — Monorepo structure separates the web application, realtime server, and shared database layer.
* 📱 **Responsive UI** — Built with Tailwind CSS for a responsive experience across screen sizes.

---

## 🏗️ Tech Stack

### Frontend

* **Next.js 15**
* **React 19**
* **TypeScript**
* **Tailwind CSS**
* **Axios**
* **NextAuth.js**

### Backend & Real-Time

* **Node.js**
* **WebSocket (`ws`)**
* **Redis / ioredis**
* **JWT**
* **Zod**

### Database

* **PostgreSQL / Prisma**
* **Prisma ORM**
* **TypeScript**

### Development

* **Turborepo**
* **npm Workspaces**
* **ESLint**
* **Prettier**

---

## 📁 Project Structure

```text
mcq-battle/
│
├── apps/
│   ├── web/                 # Next.js frontend application
│   │   ├── app/
│   │   ├── components/
│   │   ├── lib/
│   │   └── types/
│   │
│   └── ws-server/           # WebSocket server for real-time gameplay
│       └── src/
│
├── packages/
│   ├── db/                  # Prisma database package
│   │   └── prisma/
│   │
│   ├── eslint-config/       # Shared ESLint configuration
│   │
│   ├── typescript-config/   # Shared TypeScript configuration
│   │
│   └── ui/                  # Shared UI components
│
├── package.json
├── package-lock.json
├── turbo.json
└── README.md
```

---

## 🔄 Architecture

```text
                    ┌─────────────────────┐
                    │      Client         │
                    │   Next.js + React   │
                    └──────────┬──────────┘
                               │
                     HTTP / WebSocket
                               │
              ┌────────────────┴────────────────┐
              │                                 │
              ▼                                 ▼
   ┌─────────────────────┐          ┌─────────────────────┐
   │    Next.js Web App  │          │   WebSocket Server  │
   │                     │          │                     │
   │ Authentication      │          │ Real-time Battles   │
   │ UI & Quiz Logic     │          │ Game State          │
   │ API Requests        │          │ Player Events       │
   └──────────┬──────────┘          └──────────┬──────────┘
              │                                │
              └──────────────┬─────────────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │   Shared DB Layer   │
                  │       Prisma        │
                  └──────────┬──────────┘
                             │
                             ▼
                       ┌───────────┐
                       │ Database  │
                       └───────────┘

                         ┌───────────┐
                         │   Redis   │
                         │  Realtime │
                         │   State   │
                         └───────────┘
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* **Node.js 18+**
* **npm 11+**
* **Database** supported by your Prisma configuration
* **Redis** for realtime functionality

### 1. Clone the repository

```bash
git clone https://github.com/aadharbata/mcq-battle-.git
cd mcq-battle-
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create the required environment files using the provided examples:

```bash
cp apps/web/.env.example apps/web/.env
cp apps/ws-server/.env.example apps/ws-server/.env
cp packages/db/.env.example packages/db/.env
```

Then update the variables with your local database, authentication, and Redis configuration.

> **Note:** Never commit your `.env` files or secrets to GitHub.

### 4. Set up the database

Run the Prisma commands required by your database configuration:

```bash
npx prisma generate
```

If migrations are present:

```bash
npx prisma migrate dev
```

### 5. Start the development environment

From the project root:

```bash
npm run dev
```

This starts the applications through **Turborepo**.

The web application runs on:

```text
http://localhost:3000
```

---

## 🧑‍💻 Available Commands

Run these commands from the project root.

| Command               | Description                          |
| --------------------- | ------------------------------------ |
| `npm run dev`         | Start development servers            |
| `npm run build`       | Build all applications and packages  |
| `npm run lint`        | Run linting across the monorepo      |
| `npm run format`      | Format TypeScript and Markdown files |
| `npm run check-types` | Check TypeScript types               |

---

## 🎮 How It Works

### 1. Join the Platform

Users access the web application and authenticate before participating in quiz battles.

### 2. Enter a Battle

Players join a quiz battle and are connected to the realtime WebSocket server.

### 3. Answer Questions

Players receive MCQs and submit their answers through the application.

### 4. Real-Time Synchronization

The WebSocket server manages live game events and keeps the participating clients synchronized.

### 5. Track Performance

The application processes player responses and updates the game state accordingly.

### 6. Compete

Players can compare their performance and compete to achieve the highest score.

---

## 🧩 Monorepo Design

The project follows a modular monorepo architecture:

### `apps/web`

Contains the user-facing Next.js application, including:

* Pages and layouts
* Quiz interface
* Authentication
* UI components
* Client-side functionality
* API integration

### `apps/ws-server`

Dedicated realtime server responsible for:

* WebSocket connections
* Multiplayer communication
* Game events
* Realtime state synchronization

### `packages/db`

Shared database package containing:

* Prisma Client
* Database schema
* Database access layer

### `packages/ui`

Reusable UI components shared across applications.

### `packages/eslint-config`

Shared linting configuration.

### `packages/typescript-config`

Shared TypeScript configuration.

---

## 🔐 Environment Variables

The project uses environment-specific configuration for services such as:

* Database connection
* Authentication
* JWT/session configuration
* Redis
* WebSocket server
* Application URLs

Refer to the `.env.example` files inside the respective applications and packages for the required variables.

---

## 📌 Future Improvements

Some potential improvements include:

* 🏅 Global leaderboard and ranking system
* 👥 Private rooms and invite codes
* 🎨 Improved game animations and transitions
* 📈 Detailed player statistics
* 🏆 Achievement and reward system
* 🔔 In-game notifications
* 📱 Enhanced mobile experience
* 🤖 AI-generated quiz questions
* 🧪 Automated testing
* ☁️ Production deployment and monitoring

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/your-feature
```

3. Make your changes
4. Commit your changes

```bash
git commit -m "feat: add your feature"
```

5. Push the branch

```bash
git push origin feature/your-feature
```

6. Open a Pull Request

---

## 📄 License

This project is currently available for educational and development purposes.

---

## 👨‍💻 Author

**Aadhar Batra**

GitHub: [@aadharbata](https://github.com/aadharbata)

---

⭐ **If you find this project interesting, consider giving it a star!**

> **MCQ Battle — Learn. Compete. Conquer. ⚔️**
