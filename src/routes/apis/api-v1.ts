import HelloController from "../../controllers/api/v1/HelloController";
import ERouter from "../../models/ERouter";

const eRouter = new ERouter();

// define routes
eRouter.setRoute("/abc", "get", HelloController, ["auth-guard", "permission-guard"]);

export default eRouter.route;