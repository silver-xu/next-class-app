"use client";

import styles from "./readMore.module.scss";
import { useState } from "react";
import { Button } from "antd";

interface ReadMoreProps {
    children: JSX.Element[];
    numOfChildrenWhenCollapsed: number;
    collapsedByDefault: boolean;
}

export const ReadMore = (props: ReadMoreProps) => {
    const { children, numOfChildrenWhenCollapsed, collapsedByDefault } = props;
    const [collapsed, setCollapsed] = useState<boolean>(collapsedByDefault);

    const more = numOfChildrenWhenCollapsed < children.length;

    const displayChildren =
        more && collapsed
            ? children.slice(0, numOfChildrenWhenCollapsed)
            : children;

    const onReadMoreClicked = () => setCollapsed(!collapsed);

    return (
        <>
            {displayChildren}
            <Button
                type="link"
                className={styles.readMoreButton}
                onClick={onReadMoreClicked}
            >
                {collapsed ? "Read more ..." : "Read less ..."}
            </Button>
        </>
    );
};
