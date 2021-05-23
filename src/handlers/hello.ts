import {  AppRepository} from "../repo/appRepo";

export async function hello(event: any, context: any, callback: any) {

    // dependencies work as expected
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      }),
    };
  
    const repo = new AppRepository();
    const js = JSON.parse('{"est12": 1234}');
    repo.save("Config", js );
    callback(null, response);
  }