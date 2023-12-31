import Navbar from './Navigation';
const jobOpenings = [
    {
      id: 1,
      role: 'Full-time designer',
      href: '#',
      description:
        'We are seeking a creative and skilled designer to join our team. If you have a passion for design and a keen eye for detail, we want to hear from you.',
      salary: '$75,000 USD',
      location: 'Gulshan 1,Dhaka',
    },
    {
      id: 2,
      role: 'Laravel developer',
      href: '#',
      description:
        ' We are looking for a Laravel developer who is passionate about crafting high-quality web applications. Join our team and work on exciting projects.',
      salary: '$125,000 USD',
      location: 'Gulshan 1,Dhaka',
    },
    {
      id: 3,
      role: 'React Native developer',
      href: '#',
      description:
        'Are you a React Native expert? Join our team as a developer and help us create cutting-edge mobile applications.',
      salary: '$105,000 USD',
      location: 'Gulshan 1, CA',
    },
  ]
  
  export default function Example() {
    return (
      <div>
        <Navbar/>
        <div className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
            <div className="w-full lg:max-w-lg lg:flex-auto">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                We're always on the lookout for talented individuals to join our dynamic team. Check out our current job openings below.
              </h2>
              
              <img
                src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80"
                alt=""
                className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
              />
            </div>
            <div className="w-full lg:max-w-xl lg:flex-auto">
              <h3 className="sr-only">Job openings</h3>
              <ul className="-my-8 divide-y divide-gray-100">
                {jobOpenings.map((opening) => (
                  <li key={opening.id} className="py-8">
                    <dl className="relative flex flex-wrap gap-x-3">
                      <dt className="sr-only">Role</dt>
                      <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                        <a href={opening.href}>
                          {opening.role}
                          <span className="absolute inset-0" aria-hidden="true" />
                        </a>
                      </dd>
                      <dt className="sr-only">Description</dt>
                      <dd className="mt-2 w-full flex-none text-base leading-7 text-gray-600">{opening.description}</dd>
                      <dt className="sr-only">Salary</dt>
                      <dd className="mt-4 text-base font-semibold leading-7 text-gray-900">{opening.salary}</dd>
                      <dt className="sr-only">Location</dt>
                      <dd className="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
                        <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 flex-none fill-gray-300" aria-hidden="true">
                          <circle cx={1} cy={1} r={1} />
                        </svg>
                        {opening.location}
                      </dd>
                    </dl>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex border-t border-gray-100 pt-8">
                <a href="#" className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  View all openings <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
  