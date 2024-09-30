import { Education, PrismaClient } from '@prisma/client';
import { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export interface EducationRequest {
    title: string;
    subject: string;
    term: string;
}

export async function POST(req: NextRequest) {
    const {title, subject, term}: EducationRequest = await req.json();

    const data = await prisma.education.create({
        data: { title, subject, term}
    })
    return NextResponse.json(data);
}

export async function GET(req: Request) {
    const users = await prisma.education.findMany();
    return NextResponse.json(users);
}
