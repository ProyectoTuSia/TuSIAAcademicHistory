import express from "express"
import morgan from "morgan"

import careerCreditsRoutes from"./routes/careerCredits.routes"
import subjectRoutes from"./routes/subject.routes"
import creditHistoryRoutes from"./routes/creditHistory.routes"
import storyRoutes from"./routes/story.routes"
import studentCreditsSignedRoutes from"./routes/studentCreditsSigned.routes"
import studentCreditsTakenRoutes from"./routes/studentCreditsTaken.routes"
import studentSubjectsRoutes from"./routes/studentSubjects.routes"
import creditSummaryRoutes from"./routes/creditSummary.routes"
import averagesRoutes from"./routes/averages.routes"
import cancelCreditsRoutes from"./routes/cancelCredits.routes"
import getStoryRoutes from "./routes/getStory.routes"

const app=express()

//settings
app.set("port", 8080)

//middleware
app.use(morgan("dev"))
app.use(express.json())

//Routes
app.use("/api/careerCredits", careerCreditsRoutes)
app.use("/api/subjects", subjectRoutes)
app.use("/api/creditHistory", creditHistoryRoutes)
app.use("/api/academicStory", storyRoutes)
app.use("/api/creditsSigned", studentCreditsSignedRoutes)
app.use("/api/creditsTaken", studentCreditsTakenRoutes)
app.use("/api/studentSubjects", studentSubjectsRoutes)
app.use("/api/creditSummary", creditSummaryRoutes)
app.use("/api/averages", averagesRoutes)
app.use("/api/cancelCredits", cancelCreditsRoutes)
app.use("/api/stories", getStoryRoutes)

export default app