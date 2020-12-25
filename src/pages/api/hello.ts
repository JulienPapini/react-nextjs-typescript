import type { NextApiRequest, NextApiResponse } from "next";

export type HelloResponseData = {
  name: string;
};

export const helloHandler = (
  req: NextApiRequest,
  res: NextApiResponse<HelloResponseData>
) => {
  res.status(200).json({ name: "John Doe" });
};

export default helloHandler;
