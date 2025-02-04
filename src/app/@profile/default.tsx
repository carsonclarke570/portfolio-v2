export default function Profile() {
    return (
        <div className="flex flex-row space-x-6 md:p-8 p-4 xl:space-x-0 xl:flex-col xl:items-center xl:px-4 xl:py-8 xl:space-y-6">

            {/* Picture */}
            <div className="md:w-50 md:h-50 w-30 h-30 bg-zinc-700 rounded-lg">

            </div>

            <div className="flex flex-col items-start space-y-4 md:space-y-8 xl:items-center">

                {/* Title Banner */}
                <div className="flex flex-col items-start space-y-2 xl:items-center">
                    <div className="dark:text-zinc-50 font-header text-2xl font-semibold">Carson Clarke-Magrab</div>
                    <div className="dark:bg-zinc-700 dark:text-zinc-50 rounded-md px-3 py-0.5 font-paragraph text-md grow-0">Software Engineer @ Toast</div>
                </div>

                {/* Socials */}
                <div className="dark:text-zinc-50 font-paragraph">
                    <a href="https://github.com/carsonclarke570">Github</a>
                    <a href="https://www.linkedin.com/in/carsonclarke/">LinkedIn</a>
                    <a href="https://blog.cclarke-magrab.me/">Blog</a>
                </div>
            </div>

        </div>
    );
}