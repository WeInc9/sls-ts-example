import helloHandler = require("./handlers/hello");
import logger  from "../src/utils/common"

export async function hello(event: any, context: any, callback: any) {
  logger.log("info", "hello function");
  helloHandler.hello(event,context,callback);
}