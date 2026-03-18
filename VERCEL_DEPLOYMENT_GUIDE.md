# Deployment Guide (Vercel)

Deploying a Flask application on Vercel requires converting your app into a Serverless Function. It is extremely fast, but it does have strict limitations on the free tier regarding file sizes and execution limits.

## Important Note for Python ML Apps on Vercel
Vercel is primarily designed for Next.js and frontend frameworks. When running Python with heavy libraries like `pandas` and `scikit-learn`, your project **might exceed Vercel's free tier 250MB serverless limit** when installing those packages. 

*(If Vercel fails to build because the dependencies are too large, you will have to stick with the Render deployment).*

---

## Step 1: Upload the Configuration
I have created a `vercel.json` file in this folder. This file is required to tell Vercel how to run your Python app.
1. Go to your GitHub repository.
2. Click **"Add file" > "Upload files"**.
3. Drag and drop the new **`vercel.json`** file into GitHub.
4. Click **Commit changes**.

## Step 2: Deploy on Vercel
1. Log in to [Vercel](https://vercel.com/) (you can sign up with GitHub).
2. From the Vercel Dashboard, click **Add New...** > **Project**.
3. Under "Import Git Repository", find your `Virtual-Career-Advisor-through-AI` repo and click **Import**.
4. In the "Configure Project" screen, open the **Environment Variables** standard section.
5. Add your Groq API Key:
   - Key: `GROQ_API_KEY`
   - Value: `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` (or your actual secure key)
   - Click **Add**.
6. Click **Deploy**.

## Step 3: Wait and Verify
Vercel will now attempt to package your Flask app and ML Model into a Serverless Function.
- If it succeeds, you'll see a screenshot of your site and get a `.vercel.app` URL.
- If it fails with a *Size Limit / Payload Limit* error, it means `pandas` + `scikit-learn` are too large for Vercel's free tier, and you must use a standard Virtual Machine platform like Render (which you've already successfully set up!)
