import type { NextApiRequest, NextApiResponse } from 'next';

type HelloResponseType = {
  name: string;
};

const helloHandler = (req: NextApiRequest, res: NextApiResponse<HelloResponseType>) => {
  res.status(200).json({ name: 'John Doe' });
};

export default helloHandler;
