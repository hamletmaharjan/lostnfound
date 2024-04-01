import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  const user = await prisma.user.create({
    data: {
      email: "annie@prisma.io",
      firstName: "Annie",
      lastName: "Edison",
      gender: "female",
      username: "annieadderall",
      password: "annie",
    },
  });
  console.log(user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
