# McGill Calisthenics Club

The official website for the McGill University Calisthenics Club — a student-led community dedicated to bodyweight training excellence.

## Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and builds
- **Tailwind CSS** for styling
- **React Router** for navigation
- **GSAP** for animations
- **Lucide React** for icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/McGillCalisthenics/McGillCalisthenics.git
cd McGillCalisthenics

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The site will be available at `http://localhost:3000`

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
├── public/              # Static assets
│   └── images/          # Images and media
├── src/                 # Source code
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components
│   ├── App.tsx          # Root component with routing
│   ├── main.tsx         # Application entry point
│   ├── constants.ts     # App constants and data
│   └── types.ts         # TypeScript definitions
├── index.html           # HTML entry point
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── vercel.json          # Vercel deployment config
```

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_WEB3FORMS_KEY=your_web3forms_access_key
```

## Deployment

The site is configured for deployment on Vercel. Push to the main branch to trigger automatic deployments.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is maintained by the McGill Calisthenics Club executive team.

## Connect

- [Instagram](https://www.instagram.com/mcgillcalisthenics/)
- [Facebook](https://www.facebook.com/people/McGill-Calisthenics-Club/61571444662955/)
- Email: calisthenics.vpcommunications@mcgilleus.ca
