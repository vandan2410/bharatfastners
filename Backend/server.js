import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import UserRouter from "./routes/user.js";
import CategoryRouter from "./routes/category.js"
import ProductRouter from "./routes/product.js"



const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET", "PUT", "DELETE","PATCH"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/user", UserRouter);
app.use("/api/category",CategoryRouter)
app.use("/api/product",ProductRouter)


app.listen(process.env.PORT || 5000, async () => {
  console.log("Server is running on port " + (process.env.PORT || 5000));
});

