import express from 'express';

import { adminRouter } from '../admin_panel/admin-config.js';

const adminPanelRouter = express.Router();

adminPanelRouter.use('/admin', adminRouter);

export default adminPanelRouter;