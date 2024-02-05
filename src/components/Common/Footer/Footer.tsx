import { ReactElement } from "react";
import { LinkTo } from "@Components/Common/LinkTo/LinkTo";
import classes from "./Footer.module.css";

export const Footer = (): ReactElement => {
    return (
        <>
            <footer className={classes.container}>
                <span>
                    Built with{" "}
                    <LinkTo
                        className={classes.link}
                        href="https://nextjs.org/"
                        isActive
                        target="_blank"
                    >
                        Next.js
                    </LinkTo>
                </span>
                <span className={classes.dot}>⬤</span>
                <span>
                    View Source on{" "}
                    <LinkTo
                        className={classes.link}
                        href="https://github.com/carTloyal123/ctl-landing-page"
                        isActive
                        target="_blank"
                    >
                        GitHub
                    </LinkTo>
                </span>
            </footer>
        </>
    );
};
