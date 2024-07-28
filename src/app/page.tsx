import SigninButton from "@/components/SigninButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import {redirect } from 'next/navigation'

export default async function Home() {
  const session = await getAuthSession()
  if(session?.user){
    redirect('/dashboard');
  }

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Welcome to AiQuiz!</CardTitle>
          <CardDescription>asd</CardDescription>
        </CardHeader>

        <CardContent>
          <SigninButton text="Sign In with google"></SigninButton>
        </CardContent>
      </Card>
    </div>
  );
}
