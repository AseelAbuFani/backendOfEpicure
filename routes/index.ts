import express from "express";
import chefsRoutes from "./chefs.routes";
import restaurantsRoutes from "./restaurants.routes";
import dishesRoutes from "./dishes.routes";
import usersRoutes from "./users.routes";
import orderRoutes from "./order.routes";

const router = express.Router();

router.use("/api/chefs/", chefsRoutes);
router.use("/api/restaurants/", restaurantsRoutes);
router.use("/api/dishes/", dishesRoutes);
router.use("/api/users/", usersRoutes);
router.use("/api/user/order", orderRoutes);

export default router;
