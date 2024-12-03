import { NextResponse } from 'next/server';
import db from '@/lib/db';
import type { TodoInput } from '@/lib/types';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const todo = db.prepare('SELECT * FROM todos WHERE id = ?').get(params.id);
  
  if (!todo) {
    return new NextResponse('Todo not found', { status: 404 });
  }

  return NextResponse.json(todo);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body: TodoInput & { completed?: boolean } = await request.json();
  
  const updateFields = [];
  const values = [];
  
  if (body.title !== undefined) {
    updateFields.push('title = ?');
    values.push(body.title);
  }
  
  if (body.description !== undefined) {
    updateFields.push('description = ?');
    values.push(body.description);
  }
  
  if (body.completed !== undefined) {
    updateFields.push('completed = ?');
    values.push(body.completed ? 1 : 0);
  }
  
  updateFields.push('updated_at = CURRENT_TIMESTAMP');
  
  const query = `
    UPDATE todos 
    SET ${updateFields.join(', ')}
    WHERE id = ?
  `;
  
  values.push(params.id);
  
  db.prepare(query).run(...values);
  
  const updatedTodo = db
    .prepare('SELECT * FROM todos WHERE id = ?')
    .get(params.id);
    
  return NextResponse.json(updatedTodo);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  db.prepare('DELETE FROM todos WHERE id = ?').run(params.id);
  return new NextResponse(null, { status: 204 });
}