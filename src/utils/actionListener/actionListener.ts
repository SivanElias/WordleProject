import { MyActionListener } from "./MyActionListener";

enum ActionListenerKeys {
  WORDLE_KEY_PRESS = "WORDLE_KEY_PRESS",
}

// Singleton instance of MyActionListener
const actionListener = new MyActionListener<string>();

export { actionListener, ActionListenerKeys };
