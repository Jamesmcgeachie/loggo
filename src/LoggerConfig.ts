import LogLevel from "./enums/LogLevel";
import ILoggerConfig from "./interfaces/LoggerConfig";

class LoggerConfig {
    logLevel: LogLevel;

    constructor(initialConfig: ILoggerConfig = {
        logLevel: LogLevel.Info
    }) {
        this.logLevel = initialConfig.logLevel;
    }
}

export default LoggerConfig;