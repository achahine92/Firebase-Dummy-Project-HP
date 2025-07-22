import { Request, Response, NextFunction } from "express";
import * as admin from "firebase-admin";

const serviceAccount = require("../path/to/firebase-service-account.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

export const verifyFirebaseToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split("Bearer ")[1];

  if (!token) {
    return res.status(401).json({ message: "Missing token" });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    (req as any).user = decodedToken;
    return next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid token", error: err });
  }
};
