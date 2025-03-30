# React State Management Tools

This project demonstrates various state management solutions in React, including:
- **React Context API**
- **Redux**
- **Zustand**
- **Jotai**
- **Recoil**

Each implementation is structured separately, allowing for easy comparison and learning.

## 🛠️ Getting Started

### Prerequisites
Make sure you have the following installed:
- **Node.js** (>= 16.x recommended)
- **npm** or **yarn**

### 📥 Installation
Clone the repository and install dependencies:
```sh
# Clone the repository
git clone https://github.com/your-username/react-state-management-tools.git

# Navigate into the project directory
cd react-state-management-tools

# Install dependencies
npm install  # or yarn install
```

### 🚀 Running the Application
Start the development server:
```sh
npm start  # or yarn start
```
This will start the application at `http://localhost:3000/`.

## 📌 Project Structure
```
react-state-management-tools/
│── src/
│   ├── components/          # Reusable UI components
│   ├── context/             # Implementation of Context API
│   ├── redux/               # Redux store setup
│   ├── zustand/             # Zustand store setup
│   ├── jotai/               # Jotai state atoms
│   ├── recoil/              # Recoil state atoms
│   ├── pages/               # Different pages for each state management demo
│   ├── App.js               # Main application file
│   ├── index.js             # Entry point
│── package.json             # Project dependencies
│── README.md                # Project documentation
```

## 📖 State Management Implementations
Each state management tool is implemented in a separate module. Below is an overview:

### 1️⃣ **React Context API**
- State is managed using React's built-in Context API.
- Located in `src/context/`

### 2️⃣ **Redux**
- Uses Redux for centralized state management.
- Store and reducers are defined in `src/redux/`

### 3️⃣ **Zustand**
- Minimalistic state management without the boilerplate.
- Store is defined in `src/zustand/`

### 4️⃣ **Jotai**
- Uses atomic state management for fine-grained reactivity.
- Atoms are defined in `src/jotai/`

### 5️⃣ **Recoil**
- Manages state with atoms and selectors.
- Implemented in `src/recoil/`

## 🧪 Testing
Run tests using:
```sh
npm test  # or yarn test
```

## 📌 Contribution
Feel free to fork the repository, create a branch, and submit a pull request!

## 📜 License
This project is licensed under the MIT License.

---

🚀 Happy Coding! 🎉

