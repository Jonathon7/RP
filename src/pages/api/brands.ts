import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/pages/db";

const getBrands = async (req: NextApiRequest, res: NextApiResponse) => {
    const brands = await prisma.brand.findMany();

    res.status(200).json(brands);
};

export default getBrands;
