import {Router} from "express"

import {methods as creditHistoryController} from "../controllers/creditHistory.controller"


const router=Router()

router.get("/:id", creditHistoryController.getCreditHistoryController)


export default router