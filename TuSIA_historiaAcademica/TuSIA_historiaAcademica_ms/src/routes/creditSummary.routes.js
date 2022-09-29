import {Router} from "express"

import {methods as creditSummaryController} from "../controllers/creditSummary.controller"


const router=Router()

router.get("/:id", creditSummaryController.getCreditSummaryController)



export default router