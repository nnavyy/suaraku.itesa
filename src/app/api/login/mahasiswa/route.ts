import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { comparePassword } from '../../../lib/hash';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json();
  const { nim, email, password } = body;

  const user = await prisma.mahasiswa.findFirst({
    where: { nim, email },
  });

  if (!user || !comparePassword(password, user.password)) {
    return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 });
  }

  return NextResponse.json({ success: true, data: user });
}

