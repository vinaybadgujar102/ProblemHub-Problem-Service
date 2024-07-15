import winston from "winston";
import "winston-mongodb";
import { ATLAS_DB_LOGGER_URL } from "./server.config";

const allowedTransports: winston.transport[] = [];

// the below code is for logging to console
allowedTransports.push(
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
      }),

      //second arg to the combine method which defines what is exactly going to be logged
      winston.format.printf(
        (log) => `${log.timestamp} [${log.level}]: ${log.message}`
      )
    ),
  })
);

// the below code is for logging to mongodb
allowedTransports.push(
  new winston.transports.MongoDB({
    level: "error",
    db: ATLAS_DB_LOGGER_URL,
    collection: "logs",
  })
);

const logger = winston.createLogger({
  //default formatting
  format: winston.format.combine(
    // first argument to the combine method is defining how we want the timestamp to come up
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),

    //second arg to the combine method which defines what is exactly going to be logged
    winston.format.printf(
      (log) => ` ${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`
    )
  ),

  transports: allowedTransports,
});
