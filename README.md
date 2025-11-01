# The Wild Oasis 🏨

A modern hotel management system built with React that allows hotel staff to manage cabins, bookings, guests, and check-ins/check-outs. This is a comprehensive dashboard application for hotel administration.

## ✨ Features

### 🏠 Cabin Management

- View all available cabins with details (capacity, price, discount)
- Add new cabins with image upload
- Edit existing cabin information
- Delete cabins from the system
- Filter cabins by capacity and sort by various criteria

### 📅 Booking Management

- View all bookings with comprehensive details
- Filter bookings by status (unconfirmed, checked-in, checked-out)
- Sort bookings by date, amount, etc.
- View individual booking details
- Delete bookings

### ✅ Check-in/Check-out System

- Check-in guests with payment confirmation
- Add breakfast options during check-in
- Check-out guests
- Today's activity overview
- Guest status tracking

### 👥 User Management

- User authentication system
- User registration (admin only)
- Profile management
- Password updates

### ⚙️ Settings

- Configurable breakfast price
- Minimum and maximum nights per booking
- Maximum guests per booking
- Hotel-wide settings management

### 📊 Dashboard & Analytics

- Booking statistics and charts
- Revenue tracking
- Occupancy rates
- Recent activity overview
- Visual data representation with charts

### 🌙 Additional Features

- Dark/Light mode toggle
- Responsive design
- Real-time data updates
- Toast notifications
- Error boundaries
- Protected routes

## 🛠️ Technologies Used

### Frontend

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **React Router DOM** - Client-side routing
- **Styled Components** - CSS-in-JS styling
- **React Hook Form** - Form handling and validation
- **React Hot Toast** - Toast notifications
- **React Icons** - Icon library
- **React Error Boundary** - Error handling

### State Management & Data Fetching

- **TanStack React Query** - Server state management
- **React Query Devtools** - Development tools

### Backend & Database

- **Supabase** - Backend-as-a-Service
  - Authentication
  - PostgreSQL database
  - Storage for images
  - Real-time subscriptions

### Data Visualization

- **Recharts** - Chart library for dashboard analytics

### Utilities

- **date-fns** - Date manipulation and formatting

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/sohail46/the-wild-oasis.git
   cd the-wild-oasis
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up Supabase**

   - Create a new project on [Supabase](https://supabase.com)
   - Get your project URL and anon key
   - Update them in src/service/supabase.js or use the existing credentials

4. **Set up the database**

   - Run the SQL scripts to create tables and sample data
   - Set up storage buckets for cabin images
   - Configure authentication settings

5. **Start the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
src/
├── context/          # React contexts (Dark mode)
├── data/            # Static data and data uploader
├── features/        # Feature-based components
│   ├── authentication/
│   ├── bookings/
│   ├── cabins/
│   ├── check-in-out/
│   ├── dashboard/
│   └── settings/
├── hooks/           # Custom React hooks
├── pages/           # Page components
├── services/        # API services
├── styles/          # Global styles
├── ui/              # Reusable UI components
└── utils/           # Utility functions
```

## 🔐 Authentication

The app uses Supabase authentication with the following features:

- Email/password login
- User registration (admin only)
- Protected routes
- Persistent sessions
- Profile management

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:

- Desktop computers
- Tablets
- Mobile devices

## 🎨 UI/UX Features

- Clean, modern interface
- Dark/Light mode support
- Intuitive navigation
- Loading states and spinners
- Error handling with fallbacks
- Toast notifications for user feedback
- Modal dialogs for confirmations
- Table sorting and filtering
- Pagination for large datasets

## 🚀 Deployment

The app can be deployed on:

- Netlify (configured with `netlify.toml`)
- Vercel
- Any static hosting service

Build the app for production:

```bash
npm run build
```

## 📄 License

This project is for educational purposes as part of React learning.

## 🤝 Contributing

This is a learning project, but suggestions and improvements are welcome!

## 📧 Contact

Sohail - [GitHub](https://github.com/sohail46)
