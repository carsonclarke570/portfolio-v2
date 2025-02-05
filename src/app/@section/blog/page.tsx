import Parser from "rss-parser";

export default async function Blog() {
    const parser = new Parser();
    const body = await parser.parseURL('https://blog.cclarke-magrab.me/index.xml')
    const items = body.items.filter(item => {
        return item.link?.includes("graphics")
    })

    return (
        <div className="my-6 mx-8 space-y-8">

            <div>
                <h1 className="dark:text-zinc-50 text-zinc-800 font-header font-semibold text-4xl">
                    Blog
                </h1>

                <div className="rounded-full w-40 h-1.5 dark:bg-primary-400 bg-primary-600 mt-2 mb-4" />

                <p className="dark:text-zinc-400 text-zinc-600 font-paragraph font-medium text-lg">
                    In my spare time, I occasionally write articles about the graphic
                    techniques I explore while developing my game, The Far Reaches.
                    Though it&apos;s not a regular activity, I enjoy documenting the tips and
                    tricks I discover along the way whenever inspiration strikes.
                </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
                {items.map((item, idx) => {

                    const date = new Date(item.pubDate ? item.pubDate : "");

                    return (
                        <Post key={idx} title={item.title} date={date.toLocaleDateString()} description={item.contentSnippet} link={item.link} tags={[]} />
                    )
                })}
            </div>
        </div>
    )
}

function Post({ title, date, description, link }: {
    title?: string;
    date?: string;
    description?: string;
    link?: string;
    tags: string[];
}) {

    return (
        <a className="flex flex-col border dark:border-primary-400/20 dark:bg-primary-300/5 bg-primary-50 border-primary-300 shadow-lg rounded-xl sm:px-3 px-2 py-2 sm:space-y-1" href={link}>
            <div className="flex flex-col pl-2 sm:pl-0">
                <h2 className="font-header text-xl font-semibold text-zinc-50">{title}</h2>
                {/* <ul className="flex flex-row">
                    <li className="dark:bg-primary-400/60 bg-primary-500 text-zinc-50 rounded-full text-center px-2 font-header text-sm">Tag 1</li>
                </ul> */}

            </div>


            <div className="flex flex-row pt-1 pb-1 sm:pt-0">
                <div className="rounded-lg min-w-24 h-24 bg-zinc-700 hidden sm:inline-block">

                </div>

                <div className="font-paragraph px-2 space-y-1 mt-0.5">
                    <p className="bg-zinc-700 rounded w-fit px-2 text-zinc-300">{date}</p>
                    <p className="dark:text-zinc-400 italic text-primary-800 font-paragraph text-md font-medium">{description}</p>


                </div>
            </div>
        </a>
    )
}