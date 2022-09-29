import {Router} from "express"

import {methods as studentCreditsTakenController} from "../controllers/studentCreditsTaken.controller"

const router=Router()

router.put("/:id", studentCreditsTakenController.updateStudentCreditsTakenController)

export default router