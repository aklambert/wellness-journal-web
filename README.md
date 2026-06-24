# Wellness Journal Web
This is a web version of the [Wellness Journal](https://github.com/aklambert/Wellness-Journal) Android app. 

Wellness Journal is an app that has fitness features, journaling features, and a timer. It is meant to be an app that has both finess and journaling features in one app to help people track both their physical and mental health. 

This web version is being built with React Router, a Node.js server using Express, and an SQLite database. This project is currently in the early development stages.

# React Router
[React Router docs](https://reactrouter.com/)

### Getting Started

- Install the dependencies:

```bash
npm install
```

### Development

To start the development server on `http://localhost:5173`, in the root project directory run:

```bash
npm run dev
```

# Express
[Express docs](https://expressjs.com/)

### Getting started

- Navigate to the `server` directory
- Install the dependencies:

```bash
npm install
```

- Create a `.env` file in the `server` directory. In the `.env` file, define a `PORT` variable to be the port you want to use for your Express server (i.e. `PORT=3000`)
- Add the `.env` file to any necessary ignore files (i.e. `.gitignore`, `.dockerignore`, etc.)

### Development
To start the Express development server, in your terminal navigate to the `server` directory. Then, run:

```bash
npm run server
```

# SQLite
[SQLite docs](https://www.sqlite.org/docs.html)

### Getting started

- Navigate to `server/db`
- Install sqlite3:
  
```bash
npm install sqlite3
```
### Development

- To connect to your local instance of the database, in `server/db` run:

```bash
sqlite3 wellnessjournal_dev.db
```
- From there, you can run sqlite queries to work with the database

# Styling

## CSS Frameworks
- [Tailwind CSS](https://tailwindcss.com/)
