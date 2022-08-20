import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/pages/db";

const getModels = async (req: NextApiRequest, res: NextApiResponse) => {
    const year: number = parseInt(req.query.year);
    const { make } = req.query;
    const models = await prisma.carQueryAPI.findMany({
        distinct: ["model_name"],
        select: {
            model_name: true,
        },
        where: {
            model_year: year,
            model_make_id: make,
        },
    });

    res.status(200).json(models);
};

export default getModels;
