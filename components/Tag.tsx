import React from "react";
import { Chip } from "@nextui-org/react";

export default function Tag({
    tag
}: { tag?: any }) {
    return (
        <Chip color="primary"
            variant="flat"
        >
            {tag}
        </Chip>
    );
}
