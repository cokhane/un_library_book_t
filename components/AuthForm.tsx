
"use client"

import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { z, ZodType } from 'zod'
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface Props<T extends FieldValues> {
    schema: ZodType<T>;
    defaultValues: T;
    onSubmit: (data: T) => Promise<{success: boolean, error?: string}>;
    type: 'SIGN_IN' | 'SIGN_UP';
}

const AuthForm = <T extends FieldValues> ({ type, schema, defaultValues, onSubmit}: any) => {
    const isSignIn = type === "SIGN_IN";

    console.log('isSignIn: ', isSignIn)
    const form: UseFormReturn<T> = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: defaultValues as DefaultValues<T>,
    })

    const handleSubmit: SubmitHandler<T> = async (data) => {};

return (
    <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-white">
            {isSignIn ? "Welcome back to BookWise" : "Create your library account"}
        </h1>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                    <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                    This is your public display name.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            <Button type="submit">Submit</Button>
        </form>
        </Form>
    </div>

  )
}

export default AuthForm