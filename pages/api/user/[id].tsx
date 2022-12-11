import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: post,
  };
};

// DELETE /api/post/:id
async function handleDELETE(teamId, res) {
  const post = await prisma.team.delete({
    where: { id: Number(teamId) },
  })
  res.json(post)
}
async function handleGET(teamId, res) {
  const post = await prisma.team.findUnique({
    where: { id: Number(teamId) },
  })
  res.json(post)
}