'use server'
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { login as setSession } from '@/lib/auth';
import { redirect } from 'next/navigation';

export async function loginAction(prevState: { error: string } | null, formData: FormData) {
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;

  if (!username || !password) {
    return { error: 'Username and password are required' };
  }

  // Auto-create admin if zero users
  const usersCount = await prisma.user.count();
  if (usersCount === 0) {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await prisma.user.create({
      data: { username: 'admin', password: hashedPassword }
    });
  }

  const user = await prisma.user.findUnique({ where: { username } });
  if (!user) return { error: 'Invalid credentials' };

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return { error: 'Invalid credentials' };

  await setSession(username);
  redirect('/admin/dashboard');
}

export async function logoutAction() {
  const { logout } = await import('@/lib/auth');
  await logout();
  redirect('/admin/login');
}
