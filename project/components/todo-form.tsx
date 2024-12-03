"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Todo, TodoInput } from '@/lib/types';

const todoSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string(),
});

interface TodoFormProps {
  todo?: Todo;
  onSuccess: () => void;
  onCancel?: () => void;
}

export function TodoForm({ todo, onSuccess, onCancel }: TodoFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<TodoInput>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      title: todo?.title || '',
      description: todo?.description || '',
    },
  });

  const onSubmit = async (data: TodoInput) => {
    setIsSubmitting(true);
    try {
      const url = todo ? `/api/todos/${todo.id}` : '/api/todos';
      const method = todo ? 'PUT' : 'POST';
      
      await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      onSuccess();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end space-x-2">
          {onCancel && (
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          )}
          <Button type="submit" disabled={isSubmitting}>
            {todo ? 'Update' : 'Create'} Todo
          </Button>
        </div>
      </form>
    </Form>
  );
}