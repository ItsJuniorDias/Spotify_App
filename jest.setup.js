global.setImmediate =
  global.setImmediate || ((fn, ...args) => setTimeout(fn, 0, ...args));
