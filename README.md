# Shubham Kumar — ML Engineer Portfolio

A responsive React + Vite portfolio with an Apple-inspired visual direction: cinematic typography, subtle motion, dark surfaces, a featured RecoverIQ panel, project cards, skills, and contact links.

## Requirements

- Node.js 20.19+ or 22.12+ recommended
- npm
- Git (for deployment through GitHub)

## Run locally

1. Extract this project folder.
2. Open a terminal in the project folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL Vite prints, usually `http://localhost:5173`.

## Personalize before publishing

Open `src/App.jsx` and update the `profile` object near the top:

```js
const profile = {
  name: "Shubham Kumar",
  github: "https://github.com/Shubham-4427",
  linkedin: "https://www.linkedin.com/in/shubham-kumar-207458327/",
  email: "YOUR_EMAIL@example.com",
};
```

Also update each project card's `href` in the `projects` array to the exact repository URL for that project. At the moment, several project cards intentionally point to the general GitHub profile rather than guessing repository URLs.

Review project descriptions and only keep metrics or deployment claims you can substantiate in an interview.

## Production build

```bash
npm run build
npm run preview
```

Vite writes the production site to `dist/`. The `preview` command serves that built version locally so you can test it before deployment.

## Deploy to Vercel

1. Create a GitHub repository, for example `shubham-portfolio`.
2. Push this project to that repository.
3. Sign in to [Vercel](https://vercel.com/) with GitHub.
4. Select **Add New → Project**, then import `shubham-portfolio`.
5. Vercel should detect Vite automatically. Confirm these settings:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
6. Select **Deploy**. Vercel will provide a public URL.
7. After future changes, push commits to GitHub; Vercel can rebuild and deploy automatically.

## Deploy to Netlify (alternative)

1. Push the repository to GitHub.
2. Import the repository in [Netlify](https://app.netlify.com/).
3. Set build command to `npm run build`.
4. Set publish directory to `dist`.
5. Deploy.

## Suggested Git commands

Create the GitHub repository first, then from this folder run:

```bash
git init
git add .
git commit -m "Build React portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/shubham-portfolio.git
git push -u origin main
```

Replace the remote URL with the actual repository URL shown by GitHub.

## Notes

- This is a frontend-only portfolio; it does not require a backend or environment variables.
- The email in `src/App.jsx` is deliberately a placeholder. Update it before sharing the website.
- The design imports Google Fonts in CSS. If external font loading is unavailable, the system font fallback will be used.
- Check all links and test the mobile menu before sharing the URL.
