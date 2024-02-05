import { FC, CSSProperties, ReactElement } from "react";
import classes from "./LinkTo.module.css";
import TopRightSVG from "@public/Assets/top-right.svg";


type Props = {
    children: ReactElement | string;
    href: string;
    target?: string;
    isActive?: boolean;
    isArrow?: boolean;
    style?: CSSProperties;
    className?: string;
};

export const LinkTo: FC<Props> = ({
    children,
    href,
    target,
    isActive,
    isArrow,
    style,
    className,
}): ReactElement => {
    return (
        <>
            <a
                href={href}
                rel="noreferrer"
                target={target}
                style={style}
                className={`${
                    isActive ? classes.linkWrapperActive : classes.linkWrapper
                } ${className}`}
            >
                <span>{children} {isArrow && <TopRightSVG />}</span>
            </a>
        </>
    );
};
