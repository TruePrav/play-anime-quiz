# Quiz App

A modern React quiz application built with TypeScript and Tailwind CSS. Test your knowledge with anime trivia questions!

## Features

- **3-Question Rounds**: Each game consists of 3 randomly selected questions
- **Interactive UI**: Beautiful, responsive design with smooth transitions
- **Real-time Feedback**: Immediate visual feedback for correct/incorrect answers
- **Scoring System**: Track your performance with a score out of 3
- **Play Again**: Restart the quiz anytime to try new questions

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **ESLint** for code quality

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The app will open in your browser at `http://localhost:5173`

### Building for Production

Build the app for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## How to Play

1. Click "Start Quiz" to begin
2. Read each question carefully
3. Click on your chosen answer
4. See immediate feedback (green for correct, red for incorrect)
5. Click "Next →" to continue or "Finish" to see your score
6. Click "Play Again" to start a new round

## Customization

### Adding More Questions

To expand the question bank, edit the `questions` array in `src/QuizApp.tsx`. Each question should follow this format:

```typescript
{
  question: "Your question here?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  answer: 0, // Index of the correct option (0-3)
}
```

### Changing the Number of Questions per Round

Modify the `shuffled.slice(0, 3)` line in the `startGame` function to change how many questions appear per round.

## Project Structure

```
quiz-app/
├── src/
│   ├── QuizApp.tsx      # Main quiz component
│   ├── main.tsx         # App entry point
│   └── index.css        # Global styles
├── public/               # Static assets
├── package.json          # Dependencies and scripts
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## License

This project is open source and available under the MIT License.
