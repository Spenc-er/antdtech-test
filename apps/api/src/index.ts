import { createServer } from "./server.js";
import {connectToDB} from "../../../packages/db/config/db.js";

const port = process.env.PORT || 5001;
const server = createServer();

connectToDB().then(() => {
  server.listen(port, () => {
    console.log("Server started on PORT:", port);
  });
});