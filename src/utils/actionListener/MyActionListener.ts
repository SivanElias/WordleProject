export class MyActionListener<T = any> {
  #listeners: Map<string, Array<(data: T) => void>>;

  // Init the class
  constructor() {
    this.#listeners = new Map();
  }

  // registerListener registers a function to an action name. In case the action already exists, the new
  // listener should be added to the
  // already existing listeners
  // action - Action name
  // listener - Function to invoke upon action call
  registerListener(action: string, listener: (data: T) => void) {
    if (!this.#listeners.has(action)) {
      this.#listeners.set(action, []);
    }
    this.#listeners.get(action)?.push(listener.bind(this));
  }

  // When calling the removeListener all listeners are removed from the action
  // and the action itself is removed and can no longer be called.
  // action - the Action to remove
  removeListener(action: string) {
    this.#listeners.delete(action);
  }

  // Invoke all registered listeners of the giving action with the passed data
  // In case the action is not registered,an exception thrown
  // action - The action name
  // data - The data to pass to all registered listeners as parameter
  emit(action: string, data: T) {
    if (!this.#listeners.has(action)) {
      throw new Error(`Action '${action}' is not registered.`);
    } else {
      this.#listeners.get(action)?.forEach((listener) => listener(data));
    }
  }
}

// // Call the constructor
// const actionListener = new MyActionListener();

// // Add listener to the action
// actionListener.registerListener("PRINT", console.log);

// // Add another listener for the action
// actionListener.registerListener("PRINT", (data) =>
//   console.log(`I eat pickles right of the ${data}`)
// );

// // Execute all listeners with the data provided
// actionListener.emit("PRINT", "Can");
// // Remove all listeners assigned to the action
// actionListener.removeListener("PRINT");
// // // Execute an unregistered action should be resulted with an error
// // actionListener.emit("PRINT", "Can");
