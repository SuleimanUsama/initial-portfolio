# Portfolio — [Your Name]

Built with Next.js 14 + Tailwind CSS. Deployed on Vercel.

---

## Before you deploy — personalise these files

### 1. `pages/index.js`
- Replace `[Your Name]` with your actual name in the `<title>` and `<meta>` tags

### 2. `components/Navbar.js`
- Replace `[YN]` with your initials

### 3. `components/Hero.js`
- Replace `[Your Name]` with your name in the paragraph
- Update the subtitle if needed

### 4. `components/About.js`
- Fill in your actual background in the paragraph text
- Update timeline entries with real dates and descriptions

### 5. `components/Projects.js`
- Update `github` links with your actual GitHub username
- Add/remove projects as needed
- Add a `demo` link once your Gradio demo is live

### 6. `components/Contact.js`
- Replace `yourname@jbnu.ac.kr` with your real email
- Replace `yourusername` in GitHub and LinkedIn links
- Sign up at formspree.io (free), create a form, and replace `YOUR_FORM_ID` with your actual ID

### 7. `components/Footer.js`
- Replace `[Your Name]` with your name

---

## Deploy to Vercel (5 minutes)

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "initial portfolio"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

### Step 2 — Deploy on Vercel
1. Go to vercel.com → Log in with GitHub
2. Click "Add New Project"
3. Select your portfolio repo
4. Click "Deploy" — no config needed, Vercel auto-detects Next.js

Your site will be live at `yourname.vercel.app` in about 60 seconds.

### Step 3 — Add custom domain (when ready)
1. Buy a domain (Namecheap, Google Domains, or Porkbun are good)
2. In Vercel → your project → Settings → Domains
3. Add your domain and follow the DNS instructions
4. Done — usually live within 10 minutes

---

## Run locally
```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

## Contact form setup (Formspree)
1. Go to formspree.io → Sign up free
2. Create a new form
3. Copy the form ID (looks like `xpzgkdqr`)
4. In `components/Contact.js`, replace `YOUR_FORM_ID` with it
5. The form will email you every submission, no backend needed

---

## Adding the Grad-CAM demo (future)
Once you build the Gradio demo:
1. Deploy it on Hugging Face Spaces (free)
2. In `components/Projects.js`, set the `demo` field on the SCD project to the Spaces URL
3. Optionally embed it in a dedicated `/projects/sickle-cell` page
