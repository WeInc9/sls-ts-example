import { createLogger, transports } from 'winston';

function createAppLooger() {

    let logLevel = "info";
    if(process.env.LOG_LEVEL) {
        logLevel = process.env.LOG_LEVEL
    }

    return createLogger({
        level: logLevel,
        transports: [new transports.Console()],
    });
}

const logger = createAppLooger();
export default logger;