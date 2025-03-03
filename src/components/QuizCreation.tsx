"use client";
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { useForm, FormProvider } from 'react-hook-form'
import { quizCreationSchema } from '@/schema/folder/quiz'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { BookOpen, CopyCheck } from 'lucide-react';
import { Separator } from '@radix-ui/react-dropdown-menu';

type Props = {}

type Input = z.infer<typeof quizCreationSchema>

const QuizCreation = (props: Props) => {
    const form = useForm<Input>({
        resolver: zodResolver(quizCreationSchema),
        defaultValues: {
            amount: 3, 
            topic: "",
            type: "open_ended"
        }
    });

    function onSubmit (input: Input) {
        alert(JSON.stringify(input, null, 2));
    }

    form.watch();

  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <Card>
            <CardHeader>
                <CardHeader> 
                    <CardTitle className='font-bold text-2x'>Quiz Creation</CardTitle>
                </CardHeader>
                <CardDescription>
                    Choose a topic
                </CardDescription>
            </CardHeader>
            <CardContent>
            <FormProvider {...form}>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                        <FormField 
                            control={form.control}
                            name="topic"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Topic</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter a topic" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Please provide a topic to proceed
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField 
                            control={form.control}
                            name="amount"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Number of Question(s)</FormLabel>
                                    <FormControl>
                                        <Input 
                                            placeholder="Enter number of question(s)" 
                                            {...field}
                                            type='number'
                                            min={1}
                                            max={10}
                                            onChange={ (e) => {
                                                form.setValue('amount', parseInt(e.target.value));
                                            }} 
                                    />
                                    </FormControl> 
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-between">
                            <Button 
                                type="button"
                                onClick={()=>{
                                    form.setValue("type", "mcq");
                                }}
                                className='w-1/2 rounded-none rounded-l-lg'
                                variant={form.getValues("type") === "mcq" ? "default" : "secondary"}
                            >
                                <CopyCheck className='h-9 w-9 mr-2'/>Multiple Choice
                            </Button>
                            <Separator/>
                            <Button
                                type="button"
                                onClick={()=>{
                                    form.setValue("type", "open_ended");
                                }}
                                className='w-1/2 rounded-none rounded-r-lg'
                                variant={form.getValues("type") === "open_ended" ? "default" : "secondary"}
                            >
                                <BookOpen className='h-4 w-4 mr-2'/>Open Ended
                            </Button>
                        </div>
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
                </FormProvider>
            </CardContent>
        </Card>
    </div>
  )
}

export default QuizCreation