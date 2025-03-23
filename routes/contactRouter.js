import express from "express";
import {
  deleteContactById,
  getallcontact,
  getContactById,
  getContactByUserId,
  newContact,
  updateContactById,
} from "../Controllers/contact.js";
import { isAuthenticated } from "../Middlewares/Auth.js";

const router = express.Router();

router.post("/new", isAuthenticated, newContact);

//get all contact
router.get("/", getallcontact);

// contact by id
router.get("/:id", getContactById);

//update contact by id
router.put("/:id", isAuthenticated, updateContactById);

//delete contact by id
router.delete("/:id", isAuthenticated, deleteContactById);

//get user specific contact
router.get("/userid/:id", getContactByUserId);

export default router;
