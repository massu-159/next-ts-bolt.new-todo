"use client";

import { useEffect, useState } from 'react';
import { Todo } from '@/lib/types';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';

interface TodoListProps {
  onSelect: (todo: Todo) => void;
}

export function TodoList({ onSelect }: TodoListProps) {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await fetch('/api/todos');
    const data = await response.json();
    setTodos(data);
  };

  const toggleComplete = async (todo: Todo) => {
    await fetch(`/api/todos/${todo.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !todo.completed }),
    });
    fetchTodos();
  };

  return (
    <ScrollArea className="h-[600px] w-full rounded-md border p-4">
      {todos.map((todo) => (
        <Card
          key={todo.id}
          className="mb-4 p-4 cursor-pointer hover:bg-accent"
          onClick={() => onSelect(todo)}
        >
          <div className="flex items-center space-x-4">
            <Checkbox
              checked={todo.completed}
              onCheckedChange={() => toggleComplete(todo)}
              onClick={(e) => e.stopPropagation()}
            />
            <div className="flex-1">
              <h3 className={`font-medium ${todo.completed ? 'line-through text-muted-foreground' : ''}`}>
                {todo.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {new Date(todo.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </ScrollArea>
  );
}