import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const project = await prisma.project.upsert({
    where: { id: 2 },
    update: {
      title: 'Human Art',
      content: 'Human art is a non profit organization for making mental health more valuable',
      image: '/images/human.png',
      code: 'https://github.com/aimdexter/human_art_v2',
      demo: 'https://human-art-v2-aaxprqa9z-aimdexter.vercel.app/',
      tools: {
        create: [
          {
            id: 5,
            name: 'TailWind',
          },
          {
            id: 6,
            name: 'React',
          },
        ],
      },
    },
    create: {
      title: 'Human Art',
      content: 'Human art is a non profit organization for making mental health more valuable',
      image: '/images/human.png',
      code: 'https://github.com/aimdexter/human_art_v2',
      demo: 'https://human-art-v2-aaxprqa9z-aimdexter.vercel.app/',
      tools: {
        create: {
          id: 2,
          name: 'Html',
        },
      },
    },
  })
  console.log({ project })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
// {
//   id: uid,
//     title: 'HUMAN ART',
//       content:
//   'Human art is a non profit organization for making mental health more valuable',
//     image: '/images/human.png',
//       code: 'https://github.com/aimdexter/human_art_v2',
//         demo: 'https://human-art-v2-aaxprqa9z-aimdexter.vercel.app/',
//           tools: [
//             'Html',
//             'Css',
//             'Javascript',
//             'Tailwind',
//             'Vercel',
//             'Github',
//             'Github Pages',
//           ],
//     },