import prisma from '../../lib/prisma'

export default async function handle(req, res) {
  const team = await prisma.team.findMany()
  res.json(team)
}

