import winston from "winston";
import config from '../../config';


let logger = winston.createLogger({
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: config.logger.errorFilePath, level: 'error' }),
        new winston.transports.File({ filename: config.logger.combinedFilePath }),
        new winston.transports.Console(
            {
                format: winston.format.combine(
                    winston.format.simple(),
                    winston.format.colorize())
            })
    ]
});




export default logger;

