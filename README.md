# To-Do List Application with Tailwind CSS

This is a simple and interactive To-Do List application built using **Tailwind CSS** and **Vanilla JavaScript**. It allows users to add tasks, mark them as completed with a strikethrough effect, and delete them. The app also supports **dark mode** which is persistent across browser sessions.

## Features:

- ✨ **Add New Tasks**: Create tasks to be completed.
- ✅ **Mark Tasks as Completed**: Toggle strikethrough effect when tasks are completed.
- 🗑️ **Delete Tasks**: Remove tasks from the list.
- 🌙 **Dark Mode Toggle**: Switch between light and dark modes, with the theme persisted across sessions.

## Technologies Used:

- **HTML**: Structure of the application.
- **JavaScript**: Logic to handle tasks and dark mode functionality.
- **Tailwind CSS**: Styling framework to make the app responsive and beautiful.
- **Parcel**: Bundler to bundle and serve the application.

## Installation Instructions:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/maurya-sachin/todo-tailwind.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd todo-tailwind
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Start the development server**:

   ```bash
   npm run dev
   ```

5. Visit the app by opening `http://localhost:1234` in your browser.

---

## How to Generate Tailwind CSS:

The project uses Tailwind CSS for styling. To compile and watch Tailwind CSS, use the following command:

```bash
npx tailwindcss -i ./src/input.css -o ./src/style.css --watch
```

This command watches for changes in the `input.css` file, processes them through Tailwind, and outputs the result to `style.css` in the `src` folder.

---

## Dark Mode:

This project supports dark mode, which can be toggled using the theme button. The theme is saved to **localStorage**, meaning your preference is remembered the next time you visit the app.

#### Dark Mode Toggle:

- 🌙 **Dark Mode:** The button icon will show a moon symbol.
- ☀️ **Light Mode:** The button icon will change to a sun symbol when dark mode is active.

---

## File Structure:

```
/src
  /input.css              # The source CSS file with Tailwind imports
  /style.css              # The generated Tailwind CSS file
  /index.html             # The HTML file where the app is rendered
  /script.js              # JavaScript to handle functionality like adding tasks, theme toggle, etc.

/tailwind.config.js       # Tailwind CSS configuration file
/package.json             # Node package configuration
/package-lock.json        # Lock file for npm dependencies
/.gitignore               # Git ignore file to exclude unnecessary files from the repository

```

---

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add feature'`)
5. Push to the branch (`git push origin feature-name`)
6. Create a new Pull Request to merge your changes

## License

This project is open source and available under the [MIT License](LICENSE).

```

```
