import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App/App";

// Після створення стору необхідно зв'язати його з компонентами React, щоб вони могли отримувати доступ до його стану та методів. Для цього у бібліотеці React Redux є компонент Provider, котрий приймає однойменний пропс store.

// 1. Імпортуємо провайдер
import { Provider } from "react-redux";
// 2. Імпортуємо створений раніше стор
import { store } from "./redux/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
// Для того щоб будь-який компонент у додатку міг використовувати стор, обертаємо Provider все дерево компонентів.
