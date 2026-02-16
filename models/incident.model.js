import mongoose from "mongoose";

const incidentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    service: {
      type: String,
      enum: ["Auth", "Payments", "Backend", "Frontend", "Database"],
      required: true,
      index: true,
    },
    severity: {
      type: String,
      enum: ["SEV1", "SEV2", "SEV3", "SEV4"],
      required: true,
      index: true,
    },
    status: {
      type: String,
      enum: ["Open", "Mitigated", "Resolved"],
      required: true,
      index: true,
    },
    owner: {
      type: String,
      default: null,
    },
    summary: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);


// Compound index
incidentSchema.index({ severity: 1, status: 1 });

const Incident = mongoose.model("Incident", incidentSchema);

export default Incident;
