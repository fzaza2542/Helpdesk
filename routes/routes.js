const express = require('express')
const Model = require('../models/models')
const router = express.Router();

// Get All API
router.get('/getAll', async(req,res) => {
    try{
      const data = await Model.find()
      res.json(data)
    }
    catch(error){
    res.status(500).json({message: error})
    }
})

//Get by ID API  id 6243295c701dd4794afde3ec
router.get('/getOne/:id', async(req,res) => {
    try{
        const data = await Model.findById(req.params.id)
        res.json(data)
      }
      catch(error){
      res.status(500).json({message: error})
      }
})

//POST API CREATE
router.post('/post', async (req,res) => {
    const data = new Model({
        title:req.body.title,
        description:req.body.description,
        contact:req.body.contact,
        status:req.body.status,
    })

    try{
      const dataToSave =  await data.save()
      res.status(200).json(dataToSave)
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
})

//PATCH API UPDATE
router.put('/put/:id', async(req,res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//DELETE API
router.delete('/delete/:id',async (req,res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.title} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


module.exports = router;