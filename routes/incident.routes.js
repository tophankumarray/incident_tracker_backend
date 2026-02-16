import express from "express";
import {
  createIncident,
  getIncidents,
  getIncidentById,
  updateIncident,
} from "../controllers/incident.controller.js";
import {
  createIncidentValidation,
  updateIncidentValidation,
} from "../validations/incident.validation.js";

const router = express.Router();

router.post("/", createIncidentValidation, createIncident);
router.get("/", getIncidents);
router.get("/:id", getIncidentById);
router.patch("/update/:id", updateIncidentValidation, updateIncident);

export default router;
