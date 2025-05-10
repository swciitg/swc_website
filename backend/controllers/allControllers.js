import CoreTeam from "../models/coreTeamModel.js";
import ExperiencesCard from "../models/experiencesCardDataModel.js";
import HeadData from "../models/headDataModel.js";
import HiringCard from "../models/hiringCardsDataModel.js";
import LandingCard from "../models/landingCardsDataModel.js";

export const getCoreTeam = async (req, res) => {
    try {
        const coreTeam = await CoreTeam.find();
        return res.status(200).json(coreTeam);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getExperiencesCardData = async (req, res) => {
    try {
        const experiencesCard = await ExperiencesCard.find();
        res.status(200).json(experiencesCard);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getHeadData = async (req, res) => {
    try {
        const headData = await HeadData.find();
        return res.status(200).json(headData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getHiringCardsData = async (req, res) => {
    try {
        const hiringCard = await HiringCard.find();
        res.status(200).json(hiringCard);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getLandingCardsData = async (req, res) => {
    try {
        const landingCard = await LandingCard.find();
        res.status(200).json(landingCard);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}