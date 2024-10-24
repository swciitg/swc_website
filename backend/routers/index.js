import express from 'express';
import { getCoreTeam, getExperiencesCardData, getHeadData, getHiringCardsData, getLandingCardsData } from '../controllers/allControllers.js';

const router = express.Router();

router.get('/coreTeam', getCoreTeam);
router.get('/experiencesCardData', getExperiencesCardData);
router.get('/headData', getHeadData);
router.get('/hiringCardsData', getHiringCardsData);
router.get('/landingCardsData', getLandingCardsData);

export default router;