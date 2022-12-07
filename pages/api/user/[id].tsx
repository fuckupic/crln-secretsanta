import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const userName = req.query.userName
  const updateUser = await prisma.team.update({
    where: {
      name: name,
    },
    data: {
      isTaken: true,
    },
  })
}

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