import { Education, PrismaClient } from '@prisma/client';
import { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export interface ExperienceRequest {
    title: string;
    company: string;
    term: string;
}

export async function POST(req: NextRequest) {
    const {title, company, term}: ExperienceRequest = await req.json();

    const data = await prisma.experience.create({
        data: { title, company, term}
    })

    return NextResponse.json(data);
}

export async function GET(req: Request) {
    const users = await prisma.experience.findMany();
    return NextResponse.json(users);
}
