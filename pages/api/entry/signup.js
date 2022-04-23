import dbConnect from '@server/dbConnect'
import User from '@server/models/SignUser'

export default async function handler (req, res) {
  const { method } = req

  await dbConnect()
 
  switch (method) {
    case 'GET':
      try {
        const users = await User.find({})
        res.status(200).json({ success: true, data: users })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const user = await User.create(req.body)
        res.status(201).json({ success: true, data: user })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}



// { 
//     "name": "test1 ",
//      "email": "test1@test.com",
//      "registration":"2",
//      "branch":"electrical",
//      "idCard":"fhdjfue",
//      "interests":"porn",
//      "password":"abc",
//      "isVerified": "true"
//      }