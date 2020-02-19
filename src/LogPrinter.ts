class LogPrinter {
  constructor(private console: Console) {}

  debug(message: string): void {
    this.console.debug(message);
  }

  info(message: string): void {
    this.console.info(message);
  }

  warn(message: string): void {
    this.console.warn(message);
  }

  error(message: string): void {
    this.console.error(message);
  }
}

export default LogPrinter;