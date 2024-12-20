import express from 'express'
import Story from '../models/story.js'

const router = express.Router();


// all stories
router.get('/stories',async(req,res)=>{

    try{
        const stories = await Story.find().sort({createdAt:-1});
        res.status(200).json(stories)
    }catch(err){
        res.status(500).json({message:'Error'})
    }
})

// stories by signed user

router.get('/stories/user',async(req,res)=>{
    const { email } = req.query;

    if(!email){
        return res.status(400).json({message:"Email is required"})
    }
    
    
    try{
        const stories = await Story.find({userEmail:email}).sort({createdAt:-1})
        res.status(200).json(stories)

    }catch(err){
        res.send(500).json({message:"error"})
    }
})

// pass username and userEmail of the user 
// for create story
router.post('/newStories', async (req, res) => {
    const { title, content, userName, userEmail } = req.body

    if (!title || !content || !userName || !userEmail) {
      return res.status(400).json({ message: 'Enter' })
    }
  
    const newStory =new Story({
      title,
      content,
      userEmail,
      userName,
    })
  
    try {
      const savedStory = await newStory.save()
      res.status(201).json(savedStory)
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error' })
    }
  })

export default router