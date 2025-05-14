import { Education, PrismaClient } from '@prisma/client';
import { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export interface ExperienceRequest {
    title: string;
    company: string;
    term: string;
}

export interface ExperienceResponse {
    id: number;
    title: string;
    company: string;
    term: string;
}

export async function POST(req: NextRequest) {
    try {
        const { title, company, term }: ExperienceRequest = await req.json();

        const data = await prisma.experience.create({
            data: { title, company, term }
        })

        return NextResponse.json(data);
    } catch (e) {
        return NextResponse.json({ error: e })
    }
}

export async function GET(req: Request) {
    try {
        const users = await prisma.experience.findMany();
        return NextResponse.json(users);
    } catch (e) {
        console.log({ error: e });
        return NextResponse.json([
            { "id": 1, "title": "Fullstack developer", "company": "Frilance, Project work", "term": "2020 - 2022" },
            { "id": 2, "title": "Backend Developer", "company": "Gybernaty", "term": "2022 - 2023" },
            { "id": 3, "title": "Fullstack Developer", "company": "TeckWizards", "term": "2023 - 2024" },
            { "id": 4, "title": "Backend Developer", "company": "Dekit", "term": "2024 - to date" },
            { "id": 5, "title": "Fullstack Developer", "company": "Clintly, cliently.me", "term": "2024 - to date" },

        ]);
    }
}
