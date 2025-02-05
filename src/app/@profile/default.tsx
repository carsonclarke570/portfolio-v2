import Image from 'next/image'

export default function Profile() {
    return (
        <div className="flex flex-row space-x-6 xl:p-8 p-4 xl:space-x-0 xl:flex-col items-center xl:px-4 xl:py-8 xl:space-y-6">

            {/* Picture */}
            <Image src="/prof-pic.webp" width={200} height={200} alt="Profile Picture" className="xl:w-50 xl:h-50 w-30 h-30 bg-zinc-700 rounded-lg shadow-2xl" />


            <div className="flex flex-col items-start space-y-6 sm:space-y-4 xl:space-y-8 sm:mt-0 mt-0.5 xl:items-center">

                {/* Title Banner */}
                <div className="flex flex-col items-start sm:space-y-2 space-y-1 xl:items-center">
                    <div className="dark:text-zinc-50 font-header sm:text-2xl text-xl font-semibold">Carson Clarke-Magrab</div>
                    <div className="dark:bg-zinc-700 dark:text-zinc-50 rounded-md px-3 py-0.5 font-paragraph sm:text-base text-sm grow-0">Software Engineer @ Toast</div>
                </div>

                {/* Socials */}
                <div className="dark:text-zinc-50 font-paragraph flex flex-row space-x-3 items-center">
                    <a href="https://github.com/carsonclarke570">
                        <GithubIcon className="w-7 h-7 xl:w-9 xl:h-9 fill-zinc-600 hover:fill-primary-400/80 mr-[-3px] transition-all duration-500" />
                    </a>

                    <a href="https://www.linkedin.com/in/carsonclarke/">
                        <LinkedInIcon className="w-6 h-6 xl:w-8 xl:h-8 fill-zinc-600 hover:fill-primary-400/80 transition-all duration-500" />
                    </a>
                    <a href="https://blog.cclarke-magrab.me/">
                        <BlogIcon className="w-6 h-6 xl:w-8 xl:h-8 fill-zinc-600 hover:fill-primary-400/80 mb-1 " />
                    </a>
                </div>
            </div>

        </div >
    );
}

function GithubIcon({ className }: {
    className?: string
}) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 30 30">
            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
        </svg>
    )
}

function LinkedInIcon({ className }: {
    className?: string
}) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
        </svg>
    )
}

function BlogIcon({ className }: {
    className?: string
}) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512">
            <path d="M421.073,221.719c-0.578,11.719-9.469,26.188-23.797,40.094v183.25c-0.016,4.719-1.875,8.719-5.016,11.844
		c-3.156,3.063-7.25,4.875-12.063,4.906H81.558c-4.781-0.031-8.891-1.844-12.047-4.906c-3.141-3.125-4.984-7.125-5-11.844V152.219
		c0.016-4.703,1.859-8.719,5-11.844c3.156-3.063,7.266-4.875,12.047-4.906h158.609c12.828-16.844,27.781-34.094,44.719-49.906
		c0.078-0.094,0.141-0.188,0.219-0.281H81.558c-18.75-0.016-35.984,7.531-48.25,19.594c-12.328,12.063-20.016,28.938-20,47.344
		v292.844c-0.016,18.406,7.672,35.313,20,47.344C45.573,504.469,62.808,512,81.558,512h298.641c18.781,0,36.016-7.531,48.281-19.594
		c12.297-12.031,20-28.938,19.984-47.344V203.469c0,0-0.125-0.156-0.328-0.313C440.37,209.813,431.323,216.156,421.073,221.719z"/>
            <path d="M498.058,0c0,0-15.688,23.438-118.156,58.109C275.417,93.469,211.104,237.313,211.104,237.313
		c-15.484,29.469-76.688,151.906-76.688,151.906c-16.859,31.625,14.031,50.313,32.156,17.656
		c34.734-62.688,57.156-119.969,109.969-121.594c77.047-2.375,129.734-69.656,113.156-66.531c-21.813,9.5-69.906,0.719-41.578-3.656
		c68-5.453,109.906-56.563,96.25-60.031c-24.109,9.281-46.594,0.469-51-2.188C513.386,138.281,498.058,0,498.058,0z"/>
        </svg>
    )
}
