import { NextResponse } from 'next/server';
import db from '@/lib/db';
import type { TodoInput } from '@/lib/types';

export async function GET() {
  const todos = db.prepare('SELECT * FROM todos ORDER BY created_at DESC').all();
  return NextResponse.json(todos);
}

export async function POST(request: Request) {
  const body: TodoInput = await request.json();
  
  const result = db
    .prepare('INSERT INTO todos (title, description) VALUES (?, ?)')
    .run(body.title, body.description);

  const todo = db
    .prepare('SELECT * FROM todos WHERE id = ?')
    .get(result.lastInsertRowid);

  return NextResponse.json(todo);
}