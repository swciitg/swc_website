import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import * as AdminJSMongoose from "@adminjs/mongoose";
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

import CoreTeam from "../models/coreTeamModel.js";
import ExperiencesCard from "../models/experiencesCardDataModel.js";
import HeadData from "../models/headDataModel.js";
import HiringCard from "../models/hiringCardsDataModel.js";
import LandingCard from "../models/landingCardsDataModel.js";

const ADMINPANELROOT =  "/swc_website/api/admin";

const DEFAULT_ADMIN = {
  email: process.env.ADMIN_PANEL_EMAIL,
  password: process.env.ADMIN_PANEL_PASSWORD
};

AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
});

const authenticate = async (email, password) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return DEFAULT_ADMIN;
  }
  return null;
};

mongoose.connect(process.env.MONGO_URI);

const adminOptions = {
  resources: [
    CoreTeam,
    ExperiencesCard,
    HeadData,
    HiringCard,
    LandingCard
  ],
  rootPath: ADMINPANELROOT,
  loginPath: ADMINPANELROOT + "/login",
  logoutPath: ADMINPANELROOT + "/logout"
};

const admin = new AdminJS(adminOptions);

const adminRouter = AdminJSExpress.buildAuthenticatedRouter(admin, {
  authenticate,
  cookieName: "adminjs",
  cookiePassword: "sessionsecret",
}, null, {
  resave: false,
  saveUninitialized: true,
  secret: "sessionsecret",
});

export { admin, adminRouter };