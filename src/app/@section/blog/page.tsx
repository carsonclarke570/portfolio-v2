import Parser from "rss-parser";

export default async function Blog() {
    const parser = new Parser();
    const body = await parser.parseURL('https://blog.cclarke-magrab.me/index.xml')
    const items = body.items.filter(item => {
        return item.link?.includes("graphics")
    })

    return (
        <div className="sm:my-6 my-4 sm:mx-8 mx-4 sm:space-y-8 space-y-4">

            <div>
                <h1 className="text-zinc-50 font-header font-semibold sm:text-4xl text-3xl">
                    Blog
                </h1>

                <div className="rounded-full w-40 h-1.5 bg-primary-400 mt-2 mb-4" />

                <p className="text-zinc-400 font-paragraph font-medium text-lg">
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
        <a className="flex flex-col border border-primary-400/20 bg-primary-300/5 shadow-lg rounded-xl sm:px-3 px-2 py-2 sm:space-y-1" href={link}>
            <div className="flex flex-col pl-2 sm:pl-0">
                <h2 className="font-header text-xl font-semibold text-zinc-50">{title}</h2>
                {/* <ul className="flex flex-row">
                    <li className="bg-primary-400/60 bg-primary-500 text-zinc-50 rounded-full text-center px-2 font-header text-sm">Tag 1</li>
                </ul> */}

            </div>


            <div className="flex flex-row pt-1 pb-1 sm:pt-0">
                <div className="rounded-lg min-w-24 h-24 bg-zinc-700 hidden sm:inline-block">

                </div>

                <div className="font-paragraph px-2 space-y-1 mt-0.5">
                    <p className="bg-zinc-700 rounded w-fit px-2 text-zinc-300">{date}</p>
                    <p className="text-zinc-400 italic font-paragraph text-md font-medium">{description}</p>


                </div>
            </div>
        </a>
    )
}