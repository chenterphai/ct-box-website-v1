'use client'
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
interface Props {
    name?: any;
    email?: any;
    position?: any;
    profile?: any;
    details?: any;
}

export default function OurTeamCardComponent({
    name,
    email,
    position,
    profile,
    details
}: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:p-8 p-3 rounded-xl bg-default-50 md:mx-20 mx-5 mb-10 shadow-md">
            <div className="grid grid-cols-4 lg:gap-x-10 gap-x-3">
                <div className="flex items-center justify-center overflow-hidden rounded-xl">
                    <Image
                        src={profile}
                        alt="Image Profile"
                        width={500}
                        height={500}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="p-2 flex flex-col space-y-1 col-span-3">
                    <div className="flex flex-col space-y-1">
                        <p className="md:text-lg lg:text-xl text-base font-semibold tracking-widest uppercase">{name}</p>
                        <p className="text-default-300 md:text-sm text-xs">{email}@gmail.com</p>
                    </div>
                    <div className="py-2">
                        <span className="bg-primary-100 p-1 px-2 md:text-sm text-xs rounded-lg text-primary-500">
                            {position}
                        </span>
                    </div>
                    <div>
                        <p className="text-sm text-default-400">
                            {details}
                        </p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
