# React Flashcard Workshop

A hands-on, progressive workshop for mastering React fundamentals with TypeScript and Vite. This repository uses a unified single-root setup with a built-in session switcher, allowing you to run a single development server while seamlessly working through all workshop milestones.

---

## Workspace Structure

```text
react-flashcard-workshop/
├── package.json               # Shared dependencies and npm scripts
├── vite.config.ts            # Central Vite configuration
├── tsconfig.json             # Central TypeScript configuration
├── index.html                # App entry point
├── src/
│   ├── main.tsx              # Interactive session switcher & launcher
│   └── shared/
│       ├── App.css           # Global stylesheet shared across all sessions
│       └── types.ts          # Shared TypeScript interfaces
├── session-1/                # Components, JSX, & Props
│   ├── starter/              # Your workspace for Session 1
│   ├── solution/             # Reference solution for Session 1
│   └── README.md
├── session-2/                # useState Hook, Events, & Navigation
│   ├── starter/              # Your workspace for Session 2
│   ├── solution/             # Reference solution for Session 2
│   └── README.md
├── session-3/                # Controlled Forms & Array State
│   ├── starter/              # Your workspace for Session 3
│   ├── solution/             # Reference solution for Session 3
│   └── README.md
└── bonus-features/           # Advanced features (Delete, LocalStorage, Export/Import)
    ├── solution/
    └── README.md

```

---

## Quick Start & Setup

### 1. Install Dependencies

Run the following command at the root of the project to install all required dependencies (React, TypeScript, Vite, Oxlint):

```bash
npm install

```

### 2. Start the Local Development Server

To launch the app in your browser:

```bash
npm run dev

```

Vite will output a local network URL (typically `http://localhost:5173`). Open this link in your web browser.

---

## How to Work on Each Session

Instead of running separate terminal sessions or multiple servers, the app includes a **Workshop View Switcher** dropdown bar pinned to the top of the browser page.

```
+-----------------------------------------------------------------------+
| Workshop View: [ Session 1: Starter                          ▼ ]     |
+-----------------------------------------------------------------------+

```

### Step-by-Step Workflow for Each Session

#### Session 1: Components, JSX, & Props

1. **Set Browser View**: Select **Session 1: Starter** from the top dropdown in your browser.
2. **Open Files**: In your code editor, navigate to `session-1/starter/src/components/Flashcard.tsx` and `session-1/starter/src/App.tsx`.
3. **Complete Tasks**: Follow the instructions in `session-1/README.md` to destructure props and render dynamic data inside JSX.
4. **Preview Changes**: Save your files. Vite's Hot Module Replacement (HMR) will automatically reflect your changes in the browser.
5. **Verify Solution**: Toggle the browser dropdown to **Session 1: Solution** to verify your implementation against the reference code in `session-1/solution/`.

#### Session 2: useState Hook, Event Handlers, & Navigation

1. **Set Browser View**: Select **Session 2: Starter** from the top dropdown.
2. **Open Files**: Edit `session-2/starter/src/components/Flashcard.tsx` and `session-2/starter/src/App.tsx`.
3. **Complete Tasks**: Add flip state to `<Flashcard/>` using `useState`, and construct bounds-checked Next/Previous buttons in `App.tsx`.
4. **Verify Solution**: Toggle the dropdown to **Session 2: Solution** to review the completed state implementation.

#### Session 3: Controlled Forms & Array State

1. **Set Browser View**: Select **Session 3: Starter** from the top dropdown.
2. **Open Files**: Edit `session-3/starter/src/components/AddCardForm.tsx` and `session-3/starter/src/App.tsx`.
3. **Complete Tasks**: Bind form inputs to local state (`value` and `onChange`) and pass dynamic user-submitted cards up to `App.tsx` using immutable array state updates (`[...cards, newCard]`).
4. **Verify Solution**: Toggle the dropdown to **Session 3: Solution** to check your completed form integration.

#### Bonus Features

1. **Set Browser View**: Select **Bonus Features (Complete)** from the top dropdown.
2. **Explore Code**: Inspect `bonus-features/solution/App.tsx` and `bonus-features/solution/components/Flashcard.tsx` to learn how to implement card deletion, `localStorage` persistence, and JSON file export/import.

---

## Available NPM Scripts

| Script | Command | Description |
| --- | --- | --- |
| **Development** | `npm run dev` | Launches the Vite dev server with Hot Module Replacement (HMR). |
| **Build** | `npm run build` | Runs the TypeScript compiler (`tsc`) and bundles production assets. |
| **Linting** | `npm run lint` | Runs `oxlint` across all session files to check for code issues. |
| **Preview** | `npm run preview` | Locally serves the production build generated by `npm run build`. |