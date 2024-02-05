import { FC } from "react";
import { Aligner } from "@Components/Common/Aligner/Aligner";
import { Footer } from "@Components/Common/Footer/Footer";
import { Navigation } from "@Components/Common/Navigation/Navigation";
import { Paragraph } from "@Components/Common/Paragraph/Paragraph";
import { ThemeToggle } from "@Components/Common/ThemeToggle/ThemeToggle";
import { NameTitle } from "@Components/Common/Title/NameTitle";
import { Title } from "@Components/Common/Title/Title";
import { Blog } from "./Blog";
import classes from "./Blogs.module.css";
import data from "./BlogsData.json";

const Blogs: FC<BlogProps> = ({ blogList }) => {
    return (
        <Aligner>
            <>
                <div className={classes.titleWrapper}>
                    <NameTitle name="Carson Loyal | " page="blogs" />
                    <ThemeToggle />
                </div>
                <Navigation />
                <Paragraph>{data.intro}</Paragraph>
                <div className={classes.blogsContainer}>
                    <Title>✍️ Blogs</Title>
                    <Blog blogList={blogList} />
                </div>
                <Footer />
            </>
        </Aligner>
    );
};

export default Blogs;
