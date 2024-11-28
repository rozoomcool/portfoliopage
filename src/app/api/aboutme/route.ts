import { Education, PrismaClient } from '@prisma/client';
import { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

interface AboutMeRequest {
    name: string;
    experience: string;
    nationality: string;
    freelance: string;
    phone: string;
    telegram: string;
    email: string;
    languages: string;
}

export async function POST(req: NextRequest) {
    try {
        const request: AboutMeRequest = await req.json();

        const data = await prisma.aboutMe.create({
            data: { ...request }
        })
        return NextResponse.json(data);
    } catch (e) {
        return NextResponse.json({ error: e })
    }
}

export async function GET(req: Request) {
    try {
        const info = (await prisma.aboutMe.findMany());
        return NextResponse.json(info[info.length - 1]);
    } catch (e) {
        console.log({ error: e })
        return NextResponse.json([]);
    }
}
