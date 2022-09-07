import type { NextApiRequest, NextApiResponse } from 'next';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  // const { name, email, posts } = request.body;

  // const postData = posts?.map((post: Prisma.PostCreateInput) => {
  //   return { title: post?.title, content: post?.content };
  // });

  // const result = await prisma.user.create({
  //   data: {
  //     name,
  //     email,
  //     posts: {
  //       create: postData,
  //     },
  //   },
  // });
  res.status(200).json({ name: 'John Doe' });
}
