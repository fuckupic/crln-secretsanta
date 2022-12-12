import prisma from '../../../lib/prisma'

// Define the updateRecord() function
export default async function handle(req, res) {
  const teamId = parseInt(req.query.id)

  const teamMember = await prisma.team.update({
    where: { id: teamId },
    data: { isTaken: true },
  })
  res.json(teamMember)
}
