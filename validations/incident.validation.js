import { body } from "express-validator";

export const createIncidentValidation = [
  body("title").notEmpty().withMessage("Title is required"),

  body("service")
    .isIn(["Auth", "Payments", "Backend", "Frontend", "Database"])
    .withMessage("Invalid service"),

  body("severity")
    .isIn(["SEV1", "SEV2", "SEV3", "SEV4"])
    .withMessage("Invalid severity"),

  body("status")
    .isIn(["Open", "Mitigated", "Resolved"])
    .withMessage("Invalid status"),
];


export const updateIncidentValidation = [
  body("service")
    .optional()
    .isIn(["Auth", "Payments", "Backend", "Frontend", "Database"]),

  body("severity").optional().isIn(["SEV1", "SEV2", "SEV3", "SEV4"]),

  body("status").optional().isIn(["Open", "Mitigated", "Resolved"]),
];
