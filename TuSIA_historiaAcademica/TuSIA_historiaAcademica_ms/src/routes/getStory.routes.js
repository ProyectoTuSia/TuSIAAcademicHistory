import {Router} from "express"

import {methods as storyController} from "../controllers/story.controller"


const router=Router()

router.get("/", storyController.getStorysByUserController)



export default router