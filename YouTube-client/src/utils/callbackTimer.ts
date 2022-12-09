let typingTimer: NodeJS.Timeout;

function callbackTimer(callback: (value: string) => void, value: string) {
  const doneTypingInterval = 750;

  clearTimeout(typingTimer);

  typingTimer = setTimeout(() => {
    callback(value);
  }, doneTypingInterval);
}

export { callbackTimer };
