import express from "express";
import chalk from "ansi-colors";

const router = express.Router();

router.get("/health", async (req, res) => {
  console.log(
    chalk.blue(`GET /health ${chalk.gray(new Date().toISOString())}`)
  );
  const isConnected = true; // for db config
  if (isConnected) {
    res.status(200).send({ status: "200" });
  } else {
    res
      .status(500)
      .send({ status: "error", message: "server connection failed" });
  }
});

export default router;