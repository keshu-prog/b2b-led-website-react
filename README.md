# Laravel + React Full-Stack Project

This is a full-stack web application built using **Laravel** (PHP) for the backend and **React** (JavaScript) for the frontend. The React frontend is located inside the Laravel project at `resources/react_frontend`, and the backend uses MySQL as the database.

## 📁 Project Structure

project-root/
├── app/
├── bootstrap/
├── config/
├── database/
├── public/
├── resources/
│ └── react_frontend/ # React application
├── routes/
├── storage/
├── tests/
├── .env
├── artisan
├── composer.json
├── package.json
└── README.md

---

## 🛠️ Installation Instructions

### Prerequisites

- PHP >= 8.1
- Composer
- Node.js (v16+ recommended)
- MySQL
- Laravel CLI (`composer global require laravel/installer`)

---

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd <your-project-directory>

composer install

cd resources/react_frontend


npm run build

php artisan key:generate

php artisan migrate
# Optional:
# php artisan db:seed
php artisan serve


