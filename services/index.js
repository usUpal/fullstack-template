import app from "./src/app.js";
import 'dotenv/config'
import chalk from "ansi-colors";


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(chalk.bgCyan(`server-> http://localhost:${PORT}`));
});
