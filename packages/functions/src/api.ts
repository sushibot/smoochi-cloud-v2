import { Resource } from "sst";
import { Handler } from "aws-lambda";


export const handler: Handler = async (_event) => {
    console.log(_event);
  return {
    statusCode: 200,
    body: `Sup Bro. Linked to ${Resource.Audio.name}`,
  };
};