import prisma from '../../lib/prisma'

export default async function handle(req, res) {
  const team = await prisma.team.findMany({
    where: { isTaken: false },
  })
  res.json(team)
}
