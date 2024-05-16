import { randomColor } from "@acme/utils";

const handler = async (request, response) => {
  const body = JSON.parse(request.body);

  response.status(200).json({ color: randomColor() });
};
export default handler;
