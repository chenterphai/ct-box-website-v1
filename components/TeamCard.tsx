import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";

interface Props {
    name?: string;
    username?: string;
    profile?: string;
    description?: string;
    tag?: string
}

export default function TeamCardComponent({
    name,
    username,
    profile,
    tag,
    description
}: Props) {
    return (
        <Card className="w-full">
            <CardHeader className="justify-between">
                <div className="flex gap-5">
                    <Avatar isBordered radius="full" size="md" src="https://nextui.org/avatars/avatar-1.png" />
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">{name}</h4>
                        <h5 className="text-small tracking-tight text-default-400">@{username}</h5>
                    </div>
                </div>
                {/* <Button
                    className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
                    color="primary"
                    radius="full"
                    size="sm"
                    variant={isFollowed ? "bordered" : "solid"}
                    onPress={() => setIsFollowed(!isFollowed)}
                >
                    {isFollowed ? "Unfollow" : "Follow"}
                </Button> */}
            </CardHeader>
            <CardBody className="px-3 pb-5 text-small text-default-400">
                <p>
                    {description}
                </p>
                <span className="pt-2">
                    #{tag}
                </span>
            </CardBody>
            {/* <CardFooter className="gap-3">
                <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small">4</p>
                    <p className=" text-default-400 text-small">Following</p>
                </div>
                <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small">97.1K</p>
                    <p className="text-default-400 text-small">Followers</p>
                </div>
            </CardFooter> */}
        </Card>
    );
}
