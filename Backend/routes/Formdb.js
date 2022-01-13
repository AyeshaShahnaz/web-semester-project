import express from "express";
import { getData, createData,deleteData,updateData,} from "../controllers/Formdb.js";

const router = express.Router();
// get,post,put,delete
router.get("/", getData);
router.post("/", createData);
router.delete("/:id", deleteData);
router.put("/:id", updateData);

export default router;
