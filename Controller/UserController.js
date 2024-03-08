import { prisma } from "../connection.js";

export class UseController {
  async CreateUser(request, reply) {
    try {
      const { name, email } = request.body;

      await prisma.user.create({
        data: {
          name: name,
          email: email,
        },
      });
      reply.status(200);
    } catch (e) {
      await reply.send(e);
    }
  }

  async ReadController(request, reply) {
   try {
    const result = await prisma.user.findMany()
    reply.send(result)
    
   } catch (error) {
    reply.send(error)
   }
  }

  async GetUserId(request, reply) {
    const { id } = request.params
    try {
      const result = await prisma.user.findFirst({
        where: {
          id: id
        }
      })
      reply.send(result)

    } catch (error) {
      reply.send(error)
    }

  }

}
