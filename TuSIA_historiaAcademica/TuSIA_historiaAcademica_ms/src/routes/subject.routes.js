import {Router} from "express"

import {methods as subjectController} from "../controllers/subject.controller"


const router=Router()

router.get("/", subjectController.getAllSubjectsController)
router.get("/:code", subjectController.getSubjectController)
router.delete("/:code", subjectController.deleteSubjectController)
router.put("/:code", subjectController.updateSubjectController)
router.post("/", subjectController.newSubjectController)


export default router