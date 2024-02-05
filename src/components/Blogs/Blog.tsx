import { FC, ReactElement } from "react";
import { Paragraph } from "@Components/Common/Paragraph/Paragraph";
import { Subtitle } from "@Components/Common/Title/Subtitle";
import { Tag } from "@Components/Common/Tag/Tag";
import classes from "./Blogs.module.css";
import { LinkTo } from "@Components/Common/LinkTo/LinkTo";

export const Blog: FC<BlogProps> = ({ blogList }): ReactElement => {
    return (
        <div className={classes.blogsWrapper}>
            {blogList.map((obj, index) => (
                <div className={classes.blog} key={index}>
                    <LinkTo isArrow href={obj.url}>
                        <Subtitle className={classes.title}>
                            {obj.title}
                        </Subtitle>
                    </LinkTo>
                    <Paragraph className={classes.paragraph}>
                        {obj.description}
                    </Paragraph>
                    <h6 className={classes.secondaryText}>
                        {obj.published_at}
                        <span className={classes.dot}>⬤</span>
                        {obj.reading_time_minutes} Minute Read
                    </h6>
                    <div className={classes.tagsContainer}>
                        {obj.tag_list.map((tag, idx) => (
                            <Tag key={idx}>{tag}</Tag>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
