import mongoose from "mongoose";
import { validationResult } from "express-validator";
import Incident from "../models/incident.model.js";

// CREATE
export const createIncident = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const incident = await Incident.create(req.body);

    res.status(201).json(incident);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL (Pagination + Filtering + Sorting)
export const getIncidents = async (req, res) => {
  try {
    let {
      page = 1,
      limit = 5,
      severity,
      status,
      service,
      sortBy = "createdAt",
      order = "desc",
    } = req.query;

    page = Math.max(1, Number(page));
    limit = Math.max(1, Number(limit));

    const allowedSortFields = ["createdAt", "updatedAt", "severity", "status"];

    const sortField = allowedSortFields.includes(sortBy) ? sortBy : "createdAt";

    const filter = {};
    if (severity) filter.severity = severity;
    if (status) filter.status = status;
    if (service) filter.service = service;

    const skip = (page - 1) * limit;

    const incidents = await Incident.find(filter)
      .sort({ [sortField]: order === "asc" ? 1 : -1 })
      .skip(skip)
      .limit(limit);

    const total = await Incident.countDocuments(filter);

    res.json({
      data: incidents,
      total,
      page,
      totalPages: Math.ceil(total / limit),
      limit,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET BY ID
export const getIncidentById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(400).json({ message: "Invalid ID format" });

    const incident = await Incident.findById(id);

    if (!incident)
      return res.status(404).json({ message: "Incident not found" });

    res.json(incident);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
export const updateIncident = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(400).json({ message: "Invalid ID format" });

    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const incident = await Incident.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!incident)
      return res.status(404).json({ message: "Incident not found" });

    res.json(incident);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
