import { Router } from "express";
import getProducts from "./getProducts.js";
import userRouter from "./userRouter.js";
import authRouter from "./authRouter.js";
import cartRouter from "./addToCart.js";

const router = Router();

router.use(userRouter);
router.use(getProducts);
router.use(authRouter);
router.use(cartRouter);

export default router;
