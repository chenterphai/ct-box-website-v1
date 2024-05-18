import React from 'react'
import {
    Card,
    CardHeader,
    Image
} from '@nextui-org/react'
interface Props {
    title?: string;
    subtitle?: string;
    src?: string;
}
export default function CardServiceComponent({
    title,
    subtitle,
    src
}: Props) {
    return (
        <Card className=''>
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">{title}</p>
                <h4 className="text-white font-medium text-large">{subtitle}</h4>
            </CardHeader>
            <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-52 object-cover"
                src={src}
            />
        </Card>
    )
}
