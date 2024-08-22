import express from "express"
import cors from "cors"

const app= express()

// app.use(cookieParser());
app.use(express.json());
app.use(cors())

// app.use("/api/products", productsRoute);

// const PORT = process.env.PORT || 80;
const PORT = 3000;

app.use("/", (req, res) => {
    console.log("wokring!!!")
})

app.listen(PORT, () => {
    console.log("The server is running!")
})