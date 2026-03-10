# Portfolio Website

This is a simple responsive portfolio website designed for a Computer Science student. It is ready to be hosted on Firebase.

## Setup Instructions

### 1. Prerequisites
- [Node.js](https://nodejs.org/) installed.
- Firebase CLI installed globally:
  ```bash
  npm install -g firebase-tools
  ```

### 2. Customize Content
- Open `public/index.html` and replace `[Your Name]` with your actual name.
- Update the **About** section with your specific interests.
- Add your **Resume** PDF file to the `public/assets/` folder and rename it to `resume.pdf` (or update the link in `index.html`).
- Update the **Projects** section with your real projects and GitHub links.
- Update the **Achievements** and **Certifications** lists.
- Update the **Contact** email in the `mailto:` link.

### 3. Deploy to Firebase

1.  Login to Firebase:
    ```bash
    firebase login
    ```

2.  Initialize the project (if you haven't created one in the console yet, go to [console.firebase.google.com](https://console.firebase.google.com/) and create one):
    ```bash
    firebase init hosting
    ```
    - Select **Use an existing project** (if you created one) or **Create a new project**.
    - For "What do you want to use as your public directory?", type `public`.
    - For "Configure as a single-page app?", type `N` (or `Y` if you prefer, but `N` is fine for this).
    - For "Set up automatic builds and deploys with GitHub?", type `N` (unless you want that).
    - **IMPORTANT**: If it asks to overwrite `public/index.html`, select **NO**.

3.  Deploy:
    ```bash
    firebase deploy
    ```

Your site will be live at `https://mridula-mozid.web.app`!
