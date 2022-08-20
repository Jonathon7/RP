import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/pages/db";

const getEngines = async (req: NextApiRequest, res: NextApiResponse) => {
    const year: number = parseInt(req.query.year);
    const { make, model } = req.query;
    const engines = await prisma.carQueryAPI.findMany({
        distinct: ["model_engine_cc"],
        select: {
            model_engine_cc: true,
        },
        where: {
            model_year: year,
            model_make_id: make,
            model_name: model,
        },
    });

    res.status(200).json(engines);
};

export default getEngines;
