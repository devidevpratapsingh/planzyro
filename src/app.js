import express from "express";
import cors from "cors";

const app = express();

// basic config

app.use(express.json({limit: "16mb"}))
app.use(express.urlencoded({limit: "16mb", extended: true}))   
app.use(express.static("public")) 

app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(",")||"http://localhost:5173",
    credentials:true,
    methods:["GET","POST","PUT","PATCH","DELETE","OPTIONS   "],
    allowedHeaders:["Content-Type","Authorization"],
}))


// import healthCheckRouter from "./routes/healthcheck.routes.js";
// import authRouter from "./routes/auth.routes.js";
// import projectRouter from "./routes/project.routes.js";

// app.use("/api/v1/healthcheck", healthCheckRouter);
// app.use("/api/v1/auth", authRouter);
// app.use("/api/v1/projects", projectRouter);

import { healthCheckRouter } from "./controllers/healthcheck.controllers.js";
app.use("/api/v1/healthcheck", healthCheckRouter );


app.get('/', (req, res) => {
  res.send('Hello World!')
})


export default app;