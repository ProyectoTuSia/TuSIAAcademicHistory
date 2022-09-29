import {Router} from "express"

import {methods as studentCreditsSignedController} from "../controllers/studentCreditsSigned.controller"

const router=Router()

router.put("/:id", studentCreditsSignedController.updateStudentCreditsSignedController)

export default router