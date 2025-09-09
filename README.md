```
# 🚌 BusSathi

BusSathi is a full-stack web application designed to manage bus reservations. It features a React-based frontend and a Spring Boot-powered backend, enabling users to view, book, and manage bus journeys efficiently.

---

## 📦 Project Structure

```
BusSathi/
├── reservation-api/   # Spring Boot backend
└── reservation-fe/    # React frontend
```

---

## 🚀 Tech Stack

- **Frontend:** React, Axios, CSS
- **Backend:** Spring Boot, Java, Maven
- **Database:** (Add your DB here — e.g., MySQL or H2)
- **Build Tools:** Maven, npm

---

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Subrat0007s/BusSathi.git
cd BusSathi
```

### 2. Backend Setup (`reservation-api`)

```bash
cd reservation-api
mvn clean install
mvn spring-boot:run
```

> By default, the backend runs on `http://localhost:8088`

### 3. Frontend Setup (`reservation-fe`)

```bash
cd reservation-fe
npm install
npm start
```

> The frontend runs on `http://localhost:3000`

---

## 🔗 API Endpoints

Here are a few sample endpoints exposed by the backend:

| Method | Endpoint                    | Description              |
|--------|-----------------------------|--------------------------|
| GET    | `/api/admins`               | Fetch admin data         |
| POST   | `/api/reservations`         | Create a reservation     |
| GET    | `/api/buses`                | List available buses     |

> Make sure CORS is properly configured in the backend to allow requests from `http://localhost:3000`.

---

## 🧪 Testing Locally

Once both servers are running:

- Open your browser at `http://localhost:3000`
- Interact with the UI to trigger API calls to `http://localhost:8088`
- Use browser DevTools to inspect network requests and debug CORS or API issues

---

## 🙌 Contributing

Pull requests are welcome! If you’d like to contribute, please fork the repo and submit a PR with clear commit messages.

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).

```

---

Let me know if you want to include screenshots, environment variables, or deployment instructions — I can tailor it even further.
