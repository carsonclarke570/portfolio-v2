import { ApachePulsarIcon, ApacheSparkIcon, AWSIcon, CSHarpIcon, GodotIcon, JavaIcon, KotlinIcon, NextJSIcon, ReactIcon, TailwindCSSIcon, UnityIcon } from "../icons";

export default function About() {
    return (
        <div className="sm:my-6 my-5 sm:mx-8 mx-4 sm:space-y-8 space-y-4">

            <div>
                <h1 className="dark:text-zinc-50 text-zinc-800 font-header font-semibold sm:text-4xl text-3xl">
                    Hello!
                </h1>

                <div className="rounded-full w-40 h-1.5 dark:bg-primary-400 bg-primary-600 mt-2 mb-4" />

                <p className="dark:text-zinc-400 text-zinc-600 font-paragraph font-medium text-lg">
                    As a developer with expertise in building professional RESTful APIs and
                    modern, large-scale data products, I am driven by a passion for creating
                    seamless, user-centered experiences. I aim to design applications that not
                    only excel in functionality but also delight users with intuitive UI/UX
                    solutions. Outside of my professional work, I bring the same attention to
                    detail and creativity to my hobby as a game developer, exploring new ideas
                    and building engaging experiences.
                </p>
                <p className="dark:text-zinc-400 text-zinc-800 font-paragraph font-medium text-lg">
                    {/* I am actively seeking opportunities in full-stack or game development, where I can continue to grow and contribute to building impactful, cutting-edge applications. */}
                </p>
            </div>

            <div>
                {/* <h2 className="mb-4 dark:text-zinc-50 text-zinc-800 font-header font-medium text-2xl">My Expertise</h2> */}

                <div className="md:grid md:grid-cols-2 md:gap-4 md:space-y-0 space-y-4">

                    <ExpertiseCard title="DATA ENGINEERING" tags={[
                        {
                            name: "Kotlin",
                            link: "https://kotlinlang.org/",
                            icon: KotlinIcon
                        },
                        {
                            name: "Java",
                            link: "https://www.java.com/en/",
                            icon: JavaIcon
                        },
                        {
                            name: "AWS",
                            link: "https://aws.amazon.com/",
                            icon: AWSIcon
                        },
                        {
                            name: "Apache Spark",
                            link: "https://spark.apache.org/",
                            icon: ApacheSparkIcon
                        },
                        {
                            name: "Apache Pulsar",
                            link: "https://pulsar.apache.org/",
                            icon: ApachePulsarIcon
                        },
                    ]}>
                        Specialized in designing and implementing scalable data tools and efficient
                        ETL pipelines, leveraging cloud-based technologies to streamline data flow
                        and drive impactful results
                    </ExpertiseCard>

                    <ExpertiseCard title="FULLSTACK DEVELOPMENT" tags={[
                        {
                            name: "React",
                            link: "https://react.dev/",
                            icon: ReactIcon
                        },
                        {
                            name: "NextJS",
                            link: "https://nextjs.org/",
                            icon: NextJSIcon
                        },
                        {
                            name: "TailwindCSS",
                            link: "https://tailwindcss.com/",
                            icon: TailwindCSSIcon
                        }
                    ]}>
                        Passionate for full-stack development, I create dynamic and
                        user-friendly web applications with modern React frameworks and
                        tools.
                    </ExpertiseCard>
                    <ExpertiseCard title="GAME DEVELOPMENT" tags={[
                        {
                            name: "Godot",
                            link: "https://godotengine.org/",
                            icon: GodotIcon
                        },
                        {
                            name: "Unity",
                            link: "https://unity.com/",
                            icon: UnityIcon
                        },
                        {
                            name: "C#",
                            link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
                            icon: CSHarpIcon
                        }
                    ]}>
                        As a hobbyist, I’m developing an open-world tactics RPG, <span className="font-semibold">The Far Reaches</span>,
                        using the Godot engine, and documenting my journey in a development blog.
                    </ExpertiseCard>
                </div>
            </div>
        </div>
    );
}

function ExpertiseCard({ title, children, tags }: {
    title: string,
    children: React.ReactNode,
    tags: {
        name: string,
        link: string,
        icon: React.FunctionComponent<{ className: string; }>
    }[]
}) {

    return (
        <div className="border dark:border-primary-400/20 dark:bg-primary-300/5 bg-primary-50 border-primary-300 shadow-lg rounded-xl p-4 flex flex-col md:min-h-[200px] min-h-[160px]">
            <h3 className="dark:text-zinc-200 text-primary-950 font-header text-xl font-semibold">{title}</h3>
            <p className="dark:text-zinc-400 italic grow text-primary-800 font-paragraph text-md font-medium">{children}</p>
            <div className="flex flex-row shrink gap-2 mt-3">
                {tags.map((tag) => {
                    return (
                        <a key={tag.name} href={tag.link} className="group dark:bg-primary-400/60 bg-primary-500 text-zinc-50 rounded-full text-center h-8 w-8 hover:w-auto font-header flex flex-row items-center ">
                            <tag.icon className="ml-1.5 w-5 h-5 fill-zinc-50" />
                            <p className="group-hover:inline-block group-hover:w-fit hidden font-paragraph px-2 transition-all">{tag.name}</p>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}
