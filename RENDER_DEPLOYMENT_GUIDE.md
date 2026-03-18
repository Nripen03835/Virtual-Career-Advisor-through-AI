# Deployment Guide (Render)

Deploying your Flask application to Render is free and straightforward. Follow these steps:

## Prerequisites
1. **GitHub Account**: You need a free GitHub account (https://github.com/).
2. **Render Account**: Create a free account at https://render.com/ (you can sign up with GitHub).

## Step 1: Upload Your Code to GitHub
1. Create a new repository on GitHub (leave it public or private, don't initialize with a README to keep it empty).
2. Open a terminal or completely avoid terminal by dragging and dropping your files:
   - Go to your new repository on GitHub.
   - Click "**uploading an existing file**".
   - Drag and drop ALL files in this `VCA-Complete` folder (ensure you don't miss `requirements.txt` or `app.py`).
   - Note: I have just added `gunicorn` to your `requirements.txt` because Render needs it to run a Python app in production.
   - Click **Commit changes**.

*Alternative (using Git locally)*:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

## Step 2: Deploy on Render
1. Log in to [Render Dashboard](https://dashboard.render.com/).
2. Click **New +** > **Web Service**.
3. Under "Connect a repository", select the GitHub repository you just created.
4. Fill in the following details:
   - **Name**: Choose a name for your app (e.g., `vca-career-app`)
   - **Region**: Select the closest region to you.
   - **Branch**: `main` (or `master`)
   - **Runtime**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app`
5. Select the **Free** instance type.
6. Click **Advanced**, and add an Environment Variable (optional but recommended for older scikit-learn versions):
   - Key: `PYTHON_VERSION`
   - Value: `3.13.0`
   - Key: `GROQ_API_KEY`
   - Value: `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` (or your actual key)
7. Click **Create Web Service**.

## Step 3: Wait and Verify
Render will now build your app and deploy it. This usually takes 2-5 minutes.
Once it says "Live", click the URL at the top left to see your deployed website!

If there's any build error, let me know, and I can help troubleshoot!
