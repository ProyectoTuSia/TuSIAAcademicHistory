import {Router} from "express"
import {methods as careerCreditsController} from "../controllers/careerCredits.controller"


const router=Router()

router.get("/", careerCreditsController.getAllCareerCreditsController)
router.get("/:code", careerCreditsController.getCareerCreditsController)
router.delete("/:code", careerCreditsController.deleteCareerCreditsController)
router.put("/:code", careerCreditsController.updateCareerCreditsController)
router.post("/", careerCreditsController.newCareerCreditsController)


export default router