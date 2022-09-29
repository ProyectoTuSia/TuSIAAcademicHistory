import {Router} from "express"

import {methods as storyController} from "../controllers/story.controller"


const router=Router()

router.get("/:id", storyController.getStoryController)
router.post("/", storyController.newStoryController)
router.put("/:id", storyController.updateStoryStateController)


export default router