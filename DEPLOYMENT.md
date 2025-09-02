# Deployment Instructions

## 🚀 Current Status

- **Repository**: https://github.com/crarau/hackathon-ideas
- **Local Development**: http://localhost:7483
- **GitHub Pages** (will be available at): https://hackathon.tprl.com
- **Collaborator Added**: lucagamerbest

## 📋 Setup Steps Required

### 1. Enable GitHub Pages (One-time setup)

Go to: https://github.com/crarau/hackathon-ideas/settings/pages

1. Under "Build and deployment", select **"GitHub Actions"** as the source
2. The workflow will automatically run on the next push to main branch

### 2. Configure DNS for hackathon.tprl.com

Add the following DNS records to your tprl.com domain:

**Option A: Using CNAME (Recommended)**
```
Type: CNAME
Name: hackathon
Value: crarau.github.io
```

**Option B: Using A Records**
```
Type: A
Name: hackathon
Value: 185.199.108.153

Type: A  
Name: hackathon
Value: 185.199.109.153

Type: A
Name: hackathon
Value: 185.199.110.153

Type: A
Name: hackathon
Value: 185.199.111.153
```

### 3. Verify GitHub Pages Settings

Once DNS is configured (may take up to 24 hours to propagate):

1. Go to: https://github.com/crarau/hackathon-ideas/settings/pages
2. Under "Custom domain", it should show `hackathon.tprl.com`
3. Check "Enforce HTTPS" once the domain is verified

## 🛠️ Development Commands

### Local Development
```bash
cd /data/projects/ottawa-hackathon/hackathon-ideas
npm start -- --port 7483
```

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages (Manual)
```bash
npm run deploy
```
Note: Deployment happens automatically via GitHub Actions on push to main

## 📦 Making Changes

1. Edit files locally
2. Test at http://localhost:7483
3. Commit and push:
```bash
git add .
git commit -m "Your changes"
git push origin main
```
4. GitHub Actions will automatically deploy to GitHub Pages

## 🔗 Important URLs

- **GitHub Repo**: https://github.com/crarau/hackathon-ideas
- **GitHub Actions**: https://github.com/crarau/hackathon-ideas/actions
- **Local Dev**: http://localhost:7483
- **Production** (after DNS setup): https://hackathon.tprl.com
- **GitHub Pages** (backup): https://crarau.github.io/hackathon-ideas

## 📝 Project Structure

```
hackathon-ideas/
├── docs/
│   ├── intro.md                 # Homepage
│   ├── evaluation.md            # Evaluation matrix
│   ├── prizes.md               # Prize categories
│   ├── quick-picks.md          # Top 3 recommendations
│   └── project-ideas/          # 12+ project ideas
│       ├── 01-ai-cold-email.md
│       ├── 02-meeting-money.md
│       ├── 03-ecoscore-calculator.md
│       └── ... (9 more ideas)
├── static/
│   └── CNAME                   # Custom domain config
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
└── docusaurus.config.ts        # Site configuration
```

## ✅ Next Steps

1. **Configure DNS** for hackathon.tprl.com (see instructions above)
2. **Enable GitHub Pages** in repository settings
3. **Wait for DNS propagation** (up to 24 hours)
4. **Access your site** at https://hackathon.tprl.com

## 🤝 Collaboration

- **Main contributor**: @crarau
- **Collaborator**: @lucagamerbest (has push access)

Both users can:
- Push directly to main branch
- Create and merge pull requests
- Manage issues and projects

## 🆘 Troubleshooting

### Site not loading?
1. Check GitHub Actions: https://github.com/crarau/hackathon-ideas/actions
2. Verify DNS propagation: `nslookup hackathon.tprl.com`
3. Check GitHub Pages settings: https://github.com/crarau/hackathon-ideas/settings/pages

### Build failing?
1. Check for syntax errors in markdown files
2. Ensure no `<` characters are unescaped in content
3. Run `npm run build` locally to test

### DNS not working?
1. DNS changes can take 24-48 hours to propagate
2. Use https://crarau.github.io/hackathon-ideas as backup
3. Verify CNAME record with: `dig hackathon.tprl.com`