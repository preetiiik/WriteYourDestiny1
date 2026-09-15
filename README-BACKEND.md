# Write Your Destiny contact backend

The frontend always calls `/api/contact`.

- Local: Vite proxies `/api/*` to `http://localhost:5000`. Run `node server.js` and `npm run dev`.
- Vercel: `api/contact.js` is the production serverless endpoint, so the same `/api/contact` URL works on the deployed domain.

## Install

```bash
npm install express cors dotenv nodemailer
```

## Environment variables

Create `.env` locally using `.env.example`. Use a Gmail App Password, not your normal Gmail password.

For Vercel, add the same variables under Project Settings -> Environment Variables for Production (and Preview if you test preview deployments).

Required:
- `EMAIL_USER`
- `EMAIL_PASSWORD` (or `EMAIL_PASS`)
- `RECEIVER_EMAIL`

Optional:
- `FRONTEND_URL` for local/direct API CORS
- `PORT` (defaults to 5000)

## Local test

Terminal 1:
```bash
node server.js
```

Terminal 2:
```bash
npm run dev
```

Open `http://localhost:5173/contact`, submit the form, and verify the email.

Health check:
`http://localhost:5000/api/health`

## Production

Deploy the Vite project to Vercel with `api/contact.js` included. Do not put email credentials in Vite `VITE_*` variables or in React code.
