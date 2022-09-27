import type { NextApiRequest, NextApiResponse } from 'next';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//* typing example, it should be more complete than this.

type Data = {
  message?: string;
  error?: string;
  data?: object | null;
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>,
) {
  // const { name, email, posts } = request.body;

  //* Prisma data registry and retrieval example.

  try {
    await prisma.user
      .create({
        data: {
          name: 'Floppydisk89',
          email: 'thisisfloppyemail@floppy89.com',
        },
      })
      .then(() => {
        console.log({ message: 'registered user - OK' });
      });
  } catch (err) {
    console.error('user already exists');
  }

  try {
    await prisma.user
      .findUnique({
        where: {
          email: 'thisisfloppyemail@floppy89.com',
        },
      })
      .then(data => {
        response.status(200).json({ message: 'Found a user', data: data });
      });
  } catch (err) {
    response.status(500).json({ message: 'unable to retrieve a user.' });
  }
}
