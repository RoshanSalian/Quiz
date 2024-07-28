import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

type Props = {}

const RecentActivity = (props: Props) => {
  return (
    <Card className='col-span-4'>
        <CardHeader>
            <CardTitle className='text-2xl font-bold'>
                Recent Activities
            </CardTitle>

            <CardDescription>
                Yoy have played 7 games
            </CardDescription>
        </CardHeader>

        <CardContent className='max-h-[580px] lg:col-span-3'>
            Historues
        </CardContent>

    </Card>
  )
}

export default RecentActivity