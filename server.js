import express from "express";
import sum from "./sum.js";

const app = express();
const port = 7000;

app.get("/", (req,res) => {
    res.send("Hello world");
})

app.listen(port, ()=>{
    console.log(`Server is live at ${port}`);
})

app.get("/getSum/:a/:b", async (req,res)=>{
    const { a, b } = req.params;

    res.json({
        ans: sum(parseInt(a), parseInt(b))
    });
});