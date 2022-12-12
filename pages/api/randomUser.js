import prisma from '../../lib/prisma'
// Create a new Prisma client instance

// Export the selectRandomRecord() function

export default async function handle(req, res) {
  const randomPick = (values) => {
    const index = Math.floor(Math.random() * values.length)
    return values[index]
  }
  const itemCount = await prisma.team.count()

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const orderBy = randomPick(['id', 'name', 'description', 'photo', 'isTaken'])
  const orderDir = randomPick([`asc`, `desc`])

  const teamMember = await prisma.team.findMany({
    where: { isTaken: false },
    take: 1,
    skip: randomNumber(0, itemCount - 1),
    orderBy: { [orderBy]: orderDir },
  })
  res.json(teamMember)
}
