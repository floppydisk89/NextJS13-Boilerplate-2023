import type { NextApiRequest, NextApiResponse } from 'next';
//* typing example, it should be more complete than this.

type Data = {
  message?: string;
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>,
) {
  response.status(200).json({
    message:
      'This is the response from an api call using a custom api service in this project.',
  });
}
