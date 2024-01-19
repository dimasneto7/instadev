const Users = require('../models/Users')

class UserController {
  async create(req, res) {
    console.log(req.body)
    const verifyUser = await Users.findOne({
      where: {
        email: req.body.email,
      },
    })

    if (verifyUser) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const user = await Users.create(req.body)

    if (!user) {
      return res.status(400).json({ message: 'Fail to create a user' })
    }

    return res.send({ message: 'User created' })
  }
}

module.exports = new UserController()
