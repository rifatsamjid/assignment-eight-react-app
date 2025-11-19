# App-Mela

**Live Site:** [https://glistening-parfait-d3233e.netlify.app/](https://glistening-parfait-d3233e.netlify.app/)  
**GitHub Repository:** [https://github.com/rifatsamjid/assignment-eight-react-app](https://github.com/rifatsamjid/assignment-eight-react-app)

App-Mela is a modern, user-friendly web platform inspired by an app marketplace experience.  
It brings together a wide variety of applications in one place — letting users explore, search, install, and manage apps effortlessly.

With its clean design, smooth navigation, and responsive interface, App-Mela gives users the feel of a digital “mela” (fair) full of useful and exciting apps. Whether you’re discovering new tools or managing your installed ones, App-Mela makes the process simple, fast, and fun.

---

## Features

- Browse a wide range of apps in different categories
- View detailed information about each app
- Install and uninstall apps (saved in local storage)
- Real-time search and filtering
- Custom error pages and loading spinners
- Fully responsive for all devices

---

## Technologies Used

| Category               | Technology                            |
| ---------------------- | ------------------------------------- |
| **Frontend Framework** | React (with Vite)                     |
| **Routing**            | React Router DOM                      |
| **Styling**            | Tailwind CSS                          |
| **UI Components**      | React Icons, Shadcn/UI (optional)     |
| **State Management**   | React Hooks (`useState`, `useEffect`) |
| **Data Handling**      | LocalStorage & JSON data fetching     |
| **Notifications**      | React Toastify                        |
| **Charts (if used)**   | Recharts                              |
| **Lazy Loading**       | React `lazy()` and `Suspense`         |

---

## Dependencies

````json
{
  "@tailwindcss/vite": "^4.1.14",
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-icons": "^5.5.0",
  "react-router": "^7.9.3",
  "react-toastify": "^11.0.5",
  "recharts": "^3.2.1",
  "tailwindcss": "^4.1.14"
}


## Installation

Follow these steps to set up and run **App-Mela** locally on your machine.

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn or pnpm
- Git

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/rifatsamjid/assignment-eight-react-app.git
   cd assignment-eight-react-app

   ### Install dependencies

   npm install
    # or
    yarn install
    # or
    pnpm install

### Run the development server

    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
