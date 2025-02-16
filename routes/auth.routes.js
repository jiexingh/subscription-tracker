import { Router } from "express";
import { singIn, signOut, singUp } from "../controllers/auth.controller.js";

const authRouter = Router();

/**
 * Path: /api/v1/auth/sign-up -> POST BODY: { name, email, password } -> Create a new user
 */
authRouter.post("/sign-up", singUp);
authRouter.post("/sign-in", singIn);
authRouter.post("/sign-out", signOut);

export default authRouter;
