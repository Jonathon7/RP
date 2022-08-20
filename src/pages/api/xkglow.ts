import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/pages/db";

const getXkglow = async (req: NextApiRequest, res: NextApiResponse) => {
    const products = await prisma.product.findMany();

    res.status(200).json(products);
};

export default getXkglow;
