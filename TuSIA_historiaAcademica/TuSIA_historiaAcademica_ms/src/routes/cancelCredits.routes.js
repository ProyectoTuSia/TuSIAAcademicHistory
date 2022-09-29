import {Router} from "express"

import {methods as canceledCreditsController} from "../controllers/canceledCredits.controller"


const router=Router()

router.put("/:id", canceledCreditsController.creditLossController)
router.put("/noLoss/:id", canceledCreditsController.noCreditLossController)



export default router