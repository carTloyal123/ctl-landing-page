/* Props for text, wrapper divs etc.  */
type GeneralProps = {
    children: ReactElement,
    style?: CSSProperties,
    className?: string
}

/* Technology */

interface Technology{
    name: string;
    description: string;
    url: string;
};

/* Social Links */
interface ISocialLink {
    name: string,
    url: string
    svg?: string,
}

type SocialLinksProps = {
    links: ISocialLink[],
    style?: CSSProperties,
    isActive?: boolean,
    className?: string
}

/*Blog Format*/
interface IBlog {
    title: string;
    description: string;
    published_at: string;
    reading_time_minutes: number;
    tag_list: string[];
    url: string;
}

interface IRemoteBlog {
    title: string;
    description: string;
    published_at: string;
    reading_time_minutes: number;
    tag_list: string[];
    url: string;
}

type BlogProps = {
    blogList: IBlog[]
}

/*Experience */

interface Experience{
    company: string,
    role: string,
    duration: string,
    description: string,
    techStack: string,
    url: string
}

interface Project{
    name: string;
    description: string;
    techStack: string;
    links: ISocialLink[]
}