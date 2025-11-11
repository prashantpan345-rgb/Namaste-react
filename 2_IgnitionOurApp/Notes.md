# ⚛️ Namaste React - Chapter 02: Igniting Our App

## 🔥 Coding Assignment

Follow these steps to ignite your React app manually — without using create-react-app!

### 🧩 Setup Steps

1. **Initialize npm**
   - Run:
     ```bash
     npm init
     ```
   - This will create a `package.json` file in your project.

2. **Install React and ReactDOM**
   - Run:
     ```bash
     npm install react react-dom
     ```
   - These are the core libraries needed to build and render React applications.

3. **Remove React CDN links**
   - Delete any `<script>` tags in your HTML file that load React and ReactDOM via CDN.
   - You’ll now import them via modules instead.

4. **Install Parcel Bundler**
   - Run:
     ```bash
     npm install -D parcel
     ```
   - Parcel will handle bundling, optimization, and HMR (Hot Module Replacement).

5. **Run the App with Parcel**
   - Use Parcel to start your development server:
     ```bash
     npx parcel index.html
     ```

6. **Add npm Scripts**
   - Update your `package.json` with:
     ```json
     "scripts": {
       "start": "parcel index.html",
       "build": "parcel build index.html"
     }
     ```

7. **Add .gitignore File**
   - Create a `.gitignore` file and add:
     ```
     node_modules
     .parcel-cache
     dist
     ```

8. **Add Browserslist**
   - Inside `package.json`, add:
     ```json
     "browserslist": [
       "last 2 Chrome versions",
       "last 2 Firefox versions",
       "last 2 Safari versions"
     ]
     ```

9. **Build Production Code**
   - Run:
     ```bash
     npm run build
     ```
   - This will create an optimized production build inside the `dist` folder.

---

## 📚 References

- [Creating Your Own Create React App](https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658)
- [Parcel Official Docs](https://parceljs.org/getting-started/webapp/)
- [Parcel in Production](https://parceljs.org/features/production/)
- [BrowsersList Tool](https://browserslist.dev/)

---

💡 **Tip:**  
Using Parcel simplifies your setup — no need for complex configs. It automatically handles bundling, caching, and optimization for you.
