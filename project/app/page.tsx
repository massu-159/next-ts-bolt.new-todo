"use client";

import { useState } from 'react';
import { Todo } from '@/lib/types';
import { TodoList } from '@/components/todo-list';
import { TodoForm } from '@/components/todo-form';
import { TodoDetails } from '@/components/todo-details';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function Home() {
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Todo App</h1>
        <Button onClick={() => setIsCreating(true)}>
          <Plus className="mr-2 h-4 w-4" /> New Todo
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <TodoList
            onSelect={(todo) => {
              setSelectedTodo(todo);
              setIsCreating(false);
            }}
          />
        </div>
        <div>
          {isCreating ? (
            <TodoForm
              onSuccess={() => {
                setIsCreating(false);
                const listElement = document.querySelector('todo-list');
                if (listElement) {
                  listElement.dispatchEvent(new Event('update'));
                }
              }}
              onCancel={() => setIsCreating(false)}
            />
          ) : selectedTodo ? (
            <TodoDetails
              todo={selectedTodo}
              onUpdate={() => {
                const listElement = document.querySelector('todo-list');
                if (listElement) {
                  listElement.dispatchEvent(new Event('update'));
                }
              }}
              onClose={() => setSelectedTodo(null)}
            />
          ) : (
            <div className="flex items-center justify-center h-full text-muted-foreground">
              Select a todo or create a new one
            </div>
          )}
        </div>
      </div>
    </div>
  );
}