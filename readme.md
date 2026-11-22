# Authantication-Nodejs

A small Express application that renders an EJS page and provides a starting
point for authentication work.

## Requirements

- Node.js 18 or newer
- npm

## Getting started

```bash
npm ci
npm start
```

The server listens on `http://localhost:3000` by default. Set the `PORT`
environment variable to use a different port:

```bash
PORT=4000 npm start
```

For development with automatic restarts:

```bash
npm run dev
```

## Scripts

| Script | Description |
| --- | --- |
| `npm start` | Start the server with Node.js |
| `npm run dev` | Start the server with nodemon |
| `npm test` | Run the test suite with `node --test` |
| `npm run format` | Format files with Prettier |

## Routes

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/` | Render the EJS index page |
| `GET` | `/unknown` | Returns `404` |

## Project structure

```
app.js                 Express app and server entry point
routes/index.js        Route definitions
views/index.ejs        EJS template for the home page
public/stylesheets/    Static CSS
test/app.test.js       HTTP integration tests
```

## Tests

```bash
npm test
```
