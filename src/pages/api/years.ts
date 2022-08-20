import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/pages/db";

const getYears = async (req: NextApiRequest, res: NextApiResponse) => {
    const years = await prisma.carQueryAPI.findMany({
        distinct: ["model_year"],
        select: {
            model_year: true,
        },
        orderBy: [
            {
                model_year: "desc",
            },
        ],
    });

    res.status(200).json(years);
};

export default getYears;
