import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/pages/db";

const getMakes = async (req: NextApiRequest, res: NextApiResponse) => {
    const year: number = parseInt(req.query.year);

    const makes = await prisma.carQueryAPI.findMany({
        distinct: ["model_make_id"],
        select: {
            model_make_id: true,
        },
        where: {
            model_year: year,
        },
    });

    const urls = await prisma.product.findMany({
        distinct: ["asset_url"],
        select: {
            asset_url: true,
        },
    });

    // res.status(200).json(makes);
    res.status(200).json(urls);
};

export default getMakes;
