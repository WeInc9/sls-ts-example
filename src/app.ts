import helloHandler = require("./handlers/hello");

export async function hello(event: any, context: any, callback: any) {
  helloHandler.hello(event,context,callback);
}