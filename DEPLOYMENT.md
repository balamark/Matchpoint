# 🎾 Simple Deployment Guide - Tennis Match Finder

Since you're using **Supabase** for data storage, you only need to deploy the static frontend files. Here are the easiest options:

## 🚀 Option 1: GitHub Pages (Recommended - FREE)

### Step 1: Enable GitHub Pages

1. Go to your GitHub repository
2. **Settings** → **Pages**
3. **Source**: Deploy from a branch
4. **Branch**: `main` / `(root)`
5. **Save**

### Step 2: Push to Main Branch

```bash
git add .
git commit -m "Deploy tennis app"
git push origin main
```

Your app will be live at: `https://yourusername.github.io/your-repo-name`

## 🚀 Option 2: Netlify (FREE)

### One-Click Deploy
1. Go to [netlify.com](https://netlify.com)
2. **New site from Git**
3. **Connect to GitHub**
4. **Select your repository**
5. **Deploy**

Your app will be live at: `https://random-name.netlify.app`

## 🚀 Option 3: Vercel (FREE)

### One-Click Deploy
1. Go to [vercel.com](https://vercel.com)
2. **Import Project**
3. **Select your GitHub repository**
4. **Deploy**

Your app will be live at: `https://your-app.vercel.app`

## ⚙️ Configuration

Since you're using Supabase, make sure your Supabase credentials in `script.js` are correct:

```javascript
const SUPABASE_URL = 'https://your-project.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key';
```

## 🎯 That's It!

No servers, no databases to manage, no complex setup. Just:

1. **Frontend** → GitHub Pages/Netlify/Vercel (FREE)
2. **Backend** → Supabase (FREE tier)
3. **Done!** 🎾

## 🔗 Quick Links

- **GitHub Pages**: Enable in repo settings
- **Netlify**: [netlify.com](https://netlify.com)
- **Vercel**: [vercel.com](https://vercel.com)
- **Supabase**: [supabase.com](https://supabase.com)

Your tennis app will be live in minutes! 🚀