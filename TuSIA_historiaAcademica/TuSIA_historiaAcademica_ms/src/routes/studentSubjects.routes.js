import {Router} from "express"

import {methods as studentSubjectsController} from "../controllers/studentSubjects.controller"


const router=Router()


router.get("/:id", studentSubjectsController.getStudentSubjectsController)
router.post("/:id", studentSubjectsController.newStudentSubjectController)



export default router