# Help Study Abroad Dashboard

A modern admin dashboard built using Next.js, TypeScript, Zustand, and Material UI (MUI).

The project includes authentication flow, protected routes, users dashboard, products dashboard, search, filtering, pagination, and responsive UI components.

---

## Features

- Admin Login Authentication
- Protected Dashboard Routes
- Zustand State Management
- Responsive UI using Material UI (MUI)
- Users Dashboard
- Products Dashboard
- Search Functionality
- Pagination
- Product Category Filtering
- Dynamic Routing Structure

---

## Tech Stack

- Next.js 16
- TypeScript
- Zustand
- Material UI (MUI)
- React

---

## Project Structure

```text
app/
  login/
  dashboard/
    users/
    products/

components/
store/
data/
```

---

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Login Credentials

```text
username: admin
password: 1234
```

---

## Notes

Currently, the project uses local mock data from the `data/` folder for frontend development and testing.

Initially, DummyJSON APIs were integrated for authentication and dashboard data. However, due to CORS-related browser restrictions during local frontend development, mock local data was temporarily implemented to ensure stable testing and uninterrupted UI development.

The project architecture is designed so the local mock data can later be replaced easily with real APIs, backend services, or DummyJSON endpoints in future development.

---

## Future Improvements

- Real backend integration
- Database support
- NextAuth authentication
- API route architecture
- User detail pages
- Product detail pages
- Deployment on Vercel

---

## Author

Built for frontend learning, dashboard architecture practice, and portfolio development.