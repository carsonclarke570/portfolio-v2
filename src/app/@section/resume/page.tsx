import { AWSIcon, RITIcon, ToastIcon } from '@/app/icons'
import cx from 'classnames'

type Role = {
  title: string
  description: string[],
  start: Date,
  end?: Date
}

type Job = {
  icon?: React.FunctionComponent<{ className: string; }>,
  company: string,
  description: string,
  location: string,
  roles: Role[]
  tags: string[]
  link: string
}

export default function Resume() {
  return (
    <div className="my-6 mx-8 space-y-8">

      <div>
        <div className="flex flex-row items-center justify-between">
          <h1 className="dark:text-zinc-50 text-zinc-800 font-header font-semibold text-4xl">
            Resume
          </h1>

          <div className="space-x-2 hidden lg:flex lg:flex-row ">

            {/* <button className="flex flex-row items-center min-w-30 py-1 rounded-lg dark:bg-zinc-700">
              <div className="w-6 h-6 dark:bg-zinc-500 mx-1" />
              <p className="grow pr-1 font-header text-md font-semibold dark:text-zinc-200">
                Resume
              </p>
            </button>

            <button className="flex flex-row items-center min-w-30 py-1 rounded-lg dark:bg-zinc-700">
              <div className="w-6 h-6 dark:bg-zinc-500 mx-1" />
              <p className="grow pr-1 font-header text-md font-semibold dark:text-zinc-200">
                CV
              </p>
            </button> */}
          </div>
        </div>


        <div className="rounded-full w-40 h-1.5 dark:bg-primary-400 bg-primary-600 mt-2 mb-4" />
      </div>

      {/* Education */}
      <div>
        <h2 className="font-header text-2xl font-semibold">Education</h2>

        <div className='font-paragraph flex flex-row items-center space-x-4 mt-2'>

          <div className='w-20 h-20 rounded-lg dark:bg-zinc-600 flex flex-row justify-evenly items-center'>
            <RITIcon className='w-18 h-18 fill-zinc-50' />
          </div>

          <div>
            <p className='font-header text-lg font-semibold'>Rochester Institute of Technology</p>
            <p className='dark:text-zinc-300'>B.S. in Computer Science and Computer Engineering</p>
            <div className='flex flex-row space-x-2 italic dark:text-primary-300'>
              <p>Rochester, NY</p>
              <p>{'\u00B7'}</p>
              <p>2015 {'\u279D'} 2020</p>
            </div>
          </div>
        </div>
      </div>

      {/* Employment */}
      <div>
        <h2 className="font-header text-2xl font-semibold">Employment</h2>

        <JobSection
          job={{
            icon: ToastIcon,
            company: "Toast",
            description: "All-in-One Restaurant Software",
            location: "Boston, MA",
            roles: [
              {
                title: "Software Engineer II",
                description: [
                  "Design and build robust cloud-based reporting and analytics tools for consuming and processing large volumes of restaurant data",
                  "Manage team projects from conception to delivery, guiding team ceremonies to refine and scope tasks and foster a collabortive environment"
                ],
                start: new Date(2022, 2),
              },
              {
                title: "Software Engineer I",
                description: [
                  "Design and build robust cloud-based reporting and analytics tools for consuming and processing large volumes of restaurant data"
                ],
                start: new Date(2021, 0),
                end: new Date(2022, 2),
              }
            ],
            tags: ["Java + Kotlin", "Python", "Spark", "AWS"],
            link: "https://pos.toasttab.com/"
          }}
        />

        <JobSection
          job={{
            icon: RITIcon,
            company: "Rochester Institute of Technology",
            description: "Upstate New York University",
            location: "Rochester, NY",
            roles: [
              {
                title: "Student Lab Instructor",
                description: [
                  "Organized and led the lab sections of the Interface & Digital Electronics course",
                  "Transitioned some course materials to be compatible with newer lab resources"
                ],
                start: new Date(2020, 7),
                end: new Date(2020, 11),
              },
              {
                title: "Teacher Assistant",
                description: [
                  "Coached students through lab exercises for the Interface & Digital Electronics course",
                  "Transitioned course materials to be remote-friendly in response to the COVID-19 pandemic",
                  "Awarded the Computer Engineering Departments's Teaching Award"
                ],
                start: new Date(2020, 0),
                end: new Date(2020, 4),
              }
            ],
            tags: [],
            link: ""
          }}
        />

        <JobSection
          job={{
            icon: AWSIcon,
            company: "Amazon Web Services",
            description: "Cloud-based Computing",
            location: "Seattle, WA",
            roles: [
              {
                title: "SDE Intern",
                description: [
                  " Designed and implemented a project in augmenting and improving AWS Redshift’s data ingestion capabilities"
                ],
                start: new Date(2020, 5),
                end: new Date(2020, 7),
              }
            ],
            tags: [],
            link: ""
          }}
        />

        <JobSection
          job={{
            company: "Cogo Labs",
            description: "",
            location: "Cambridge, MA",
            roles: [
              {
                title: "Platform Engineer Intern",
                description: [
                  "Developed and maintained various backend APIs for data ingestion and analytics."
                ],
                start: new Date(2019, 5),
                end: new Date(2019, 7),
              }
            ],
            tags: [],
            link: ""
          }}
        />
      </div>

    </div >
  );
}

const formatDates = (start: Date, end?: Date): string[] => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const parsedStart = `${months[start.getMonth()]} ${start.getFullYear()}`
  if (!end) {
    return [parsedStart, "Present"]
  }

  const parsedEnd = `${months[end.getMonth()]} ${end.getFullYear()}`

  return [parsedStart, parsedEnd]
}

function JobSection({ job }: {
  job: Job
}) {

  return (
    <div className="mt-3">

      <div className="flex flex-row items-center space-x-2">
        <div className="w-12 h-12 rounded-lg bg-primary-500/90 flex flex-row justify-evenly items-center" >
          {job.icon && <job.icon className="w-10 h-10 fill-zinc-50" />}
        </div>

        <div className="space-y-[-4px]">
          <h3 className="font-header text-lg font-semibold dark:text-zinc-50">{job.company}</h3>
          <p className="font-paragraph text-md italic dark:text-zinc-300">{job.location}</p>
        </div>
      </div>

      <div className="sm:grid sm:grid-cols-[48px_auto]">
        {job.roles.map((role, idx) => {
          const dates = formatDates(role.start, role.end)

          return (
            <>
              <div key={role.title + "-a" + idx} className="sm:flex flex-col items-center justify-self-center h-full hidden">
                <div className={cx("w-1 bg-zinc-50/20 mb-2 rounded-b", idx == 0 ? "rounded mt-2 h-4" : "h-6")}></div>
                <div className="w-3 h-3 bg-primary-300/80 rounded-sm"></div>
                <div className={cx("w-1 grow bg-zinc-50/20 mt-2 rounded-t", idx == job.roles.length - 1 ? "rounded mb-2" : "")}></div>
              </div>
              <div key={role.title + "-b" + idx} className="font-paragraph mt-2">
                <div className="mt-2">
                  <div className="space-y-[-3px]">
                    <h4 className="font-semibold">{role.title}</h4>
                    <p className="italic dark:text-primary-300">{dates[0]} {'\u279D'} {dates[1]}</p>
                  </div>

                  <ul className="list-disc ml-8">
                    {role.description.map((desc, idx) => {
                      return (
                        <li key={desc + idx}>{desc}</li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </>
          )
        })}
      </div>

    </div>

  )
}