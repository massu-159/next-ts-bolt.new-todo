"use client";

import { useState } from 'react';
import { Todo } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { TodoForm } from './todo-form';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Pencil, Trash2 } from 'lucide-react';

interface TodoDetailsProps {
  todo: Todo;
  onUpdate: () => void;
  onClose: () => void;
}

export function TodoDetails({ todo, onUpdate, onClose }: TodoDetailsProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = async () => {
    await fetch(`/api/todos/${todo.id}`, { method: 'DELETE' });
    onUpdate();
    onClose();
  };

  if (isEditing) {
    return (
      <Card className="p-6">
        <TodoForm
          todo={todo}
          onSuccess={() => {
            setIsEditing(false);
            onUpdate();
          }}
          onCancel={() => setIsEditing(false)}
        />
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-bold">{todo.title}</h2>
          <p className="text-sm text-muted-foreground">
            Created: {new Date(todo.created_at).toLocaleDateString()}
          </p>
          {todo.updated_at !== todo.created_at && (
            <p className="text-sm text-muted-foreground">
              Updated: {new Date(todo.updated_at).toLocaleDateString()}
            </p>
          )}
        </div>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsEditing(true)}
          >
            <Pencil className="h-4 w-4" />
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" size="icon">
                <Trash2 className="h-4 w-4" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete Todo</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to delete this todo? This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
      <p className="mt-4 text-gray-700">{todo.description}</p>
    </Card>
  );
}