import {Router} from "express"

import {methods as averagesController} from "../controllers/averages.controller"


const router=Router()

router.get("/:id", averagesController.getAveragesController)
router.put("/:id", averagesController.updateAveragesController)



export default router