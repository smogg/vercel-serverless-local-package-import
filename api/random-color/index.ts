import { randomColor } from "@acme/utils";

const handler = async (request: any, response: any) => {
  response.status(200).json({ color: randomColor() });
};
export default handler;
