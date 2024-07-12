import express from "express";
import chalk from "ansi-colors";

const router = express.Router();


router.post("/test", async (req, res) => {
  console.log(
    chalk.blue(`POST /test ${chalk.gray(new Date().toISOString())}`)
  );
  const reqBody = req.body;
  const isConnected = true; // for db config
  if (isConnected) {
    res.status(200).send(reqBody);
  } else {
    res
      .status(500)
      .send({ status: "error", message: "server connection failed" });
  }
});

export default router;