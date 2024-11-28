import { Education, PrismaClient } from '@prisma/client';
import { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export interface EducationRequest {
    title: string;
    subject: string;
    term: string;
}

export interface EducationResponse {
    id: number;
    title: string;
    subject: string;
    term: string;
}

export async function POST(req: NextRequest) {
    try {
        const { title, subject, term }: EducationRequest = await req.json();

        const data = await prisma.education.create({
            data: { title, subject, term }
        })
        return NextResponse.json(data);
    } catch (e) {
        return NextResponse.json({ error: e })
    }
}

export async function GET(req: Request) {
    try {
        const users = await prisma.education.findMany();
        return NextResponse.json(users);
    } catch (e) {
        console.log({ error: e });
        return NextResponse.json([]);
    }
}
