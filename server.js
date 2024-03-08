import fastify from 'fastify'
import { UseController } from './Controller/UserController.js'

export const app = fastify()

const userController = new UseController()

app.get('/', (_request, reply) => {
  reply.send({
    hello : 'World' 
  })
})

app.post('/user', userController.CreateUser)

app.get('/user', userController.ReadController)

app.get('/user/:id', userController.GetUserId)

app.listen({
  port: 3000
}, () => {
  console.log('server is running 🚀')
})