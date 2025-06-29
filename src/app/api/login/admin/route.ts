import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json();
  const { token } = body;

  const admin = await prisma.adminToken.findFirst({
    where: { token },
  });

  if (!admin) {
    return NextResponse.json({ success: false, message: "Invalid token" }, { status: 401 });
  }

  return NextResponse.json({ success: true });
}
