const express = require('express')
const Task = require('../models/task')
const auth = require('../middleware/auth')

const router = new express.Router()

router.post('/tasks', auth, async (req,res) => {
    
    const task = new Task({
        ...req.body,
        owner: req.user._id
    })

    try{
        await task.save()
        res.status(201).send(task)
    }catch (e){
        res.status(400).send(e)
    }
}) 

router.get('/tasks', auth, async (req,res) => {

    try{
        
        const filterBy = {
            owner: req.user._id
        }

        if(req.query.completed){
            filterBy.completed = req.query.completed === 'true'
        }

        const perPageResult = parseInt(req.query.limit)
        const skipDocuments = parseInt(req.query.skip)

        const sort = {}

        if(req.query.sort){
            const keyValue = req.query.sort.split('_')
            sort[keyValue[0]] = keyValue[1] === 'desc' ? -1 : 1
        }

        const tasks = await Task.find(filterBy,null,{limit: perPageResult, skip:skipDocuments, sort})
        res.send(tasks)
    }catch (e){
        res.status(500).send()
    }
})

router.get('/tasks/:id', auth, async (req,res) => {
    const _id = req.params.id

    try{
        const task = await Task.findOne({_id, owner:req.user._id})
        if(task){
            return res.send(task)
        }
        res.status(404).send()
    }catch (e){
        res.status(500).send()
    }
})

router.patch('/tasks/:id', auth, async(req, res) => {

    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(406).send({error: 'Invalid Updates!!'})
    }
    
    const _id = req.params.id

    try{
        const task = await Task.findOne({_id, owner: req.user._id})
        
        if(!task){
            return res.status(404).send()
        }

        updates.forEach((update) => task[update] = req.body[update])
        await task.save()

        res.send(task)

    }catch (e){
        res.status(400).send(e)
    }
})

router.delete('/tasks/:id', auth, async(req, res) => {
    
    const _id = req.params.id

    try{
        const task = await Task.findOneAndDelete({ _id, owner:req.user._id })
        
        if(task){
           return res.send(task)
        }

        res.status(404).send()
    }catch (e){
        res.status(500).send()
    }
})

module.exports = router