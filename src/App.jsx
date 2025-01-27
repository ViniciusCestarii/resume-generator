export default function Resume() {
  return (
    <div className="max-w-[8.5in] min-h-[11in] mx-auto bg-white p-[0.75in] print:p-[0.75in] print:max-w-none print:mx-0 print:my-0">
      {/* Header */}
      <header className="text-center mb-8">
        <div className="flex justify-between mb-2">
          <div className="text-left">
            <p>1234 Street Address</p>
            <p>City Two, UP</p>
          </div>
          <h1 className="text-4xl font-normal">First Last</h1>
          <div className="text-right">
            <p>123-456-7890</p>
            <p>first.last@gmail.com</p>
          </div>
        </div>
      </header>

      {/* Experience Section */}
      <section className="mb-6">
        <h2 className="text-xl font-bold border-b border-black pb-1 mb-4">
          Experience
        </h2>

        <div className="mb-6">
          <div className="flex justify-between mb-1">
            <h3 className="font-bold">Engineering Co-op Student</h3>
            <h3 className="font-bold">Manufactoring Company Ltd.</h3>
            <span>Aug 2016 - Dec 2016</span>
          </div>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              Created Excel utilities with VBA that massively stream-lined SAP
              processes, saving Project Managers 10 hours every week
            </li>
            <li>
              Developed Python GUI database app with SQLite to reduce time
              searching for SAP materials by 50%
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex justify-between mb-1">
            <h3 className="font-bold">Data Analyst Intern</h3>
            <h3 className="font-bold">Logistics Company</h3>
            <span>Dec 2015 - Apr 2016</span>
          </div>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              Replaced manual processes with Python to efficiently consolidate
              all data saving 2 hours per day
            </li>
            <li>
              Improved hiring practices by analyzing compiled data to
              demonstrate the low retention rates associated with hiring through
              labor agencies
            </li>
            <li>
              Utilized Excel pivot tables to summarize, categorize, and present
              data allowing the owner to make informed decisions about company
              operations
            </li>
          </ul>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-6">
        <h2 className="text-xl font-bold border-b border-black pb-1 mb-4">
          Education
        </h2>
        <div className="flex justify-between mb-1">
          <span>City One, UP</span>
          <span className="font-bold">University of Unknown Province</span>
          <span>Sep 2013 - Apr 2018</span>
        </div>
        <p>
          Bachelor of Applied Science in Mechanical Engineering GPA: 3.6/4.33
        </p>
      </section>

      {/* Projects Section */}
      <section className="mb-6">
        <h2 className="text-xl font-bold border-b border-black pb-1 mb-4">
          Projects
        </h2>

        <div className="space-y-4">
          <div>
            <p className="mb-1">
              <span className="font-bold">Workout Logger</span> (
              <a
                href="https://play.google.com/store"
                className="text-blue-600 hover:underline"
              >
                Google Play Store
              </a>
              ) (
              <a
                href="https://github.com"
                className="text-blue-600 hover:underline"
              >
                Github
              </a>
              ) <span className="italic">Kotlin, Java, XML, SQLite</span>
            </p>
            <p>
              An Android workout tracker that let's you jump straight into
              recording your exercises
            </p>
          </div>

          <div>
            <p className="mb-1">
              <span className="font-bold">Element Eraser</span> (
              <a
                href="https://chrome.google.com/webstore"
                className="text-blue-600 hover:underline"
              >
                Chrome Web Store
              </a>
              ) (
              <a
                href="https://github.com"
                className="text-blue-600 hover:underline"
              >
                Github
              </a>
              ){' '}
              <span className="italic">JavaScript, Chrome API, HTML, CSS</span>
            </p>
            <p>
              A chrome extension that automatically removes any content that the
              user does not want to see. Furthermore users can save multiple
              profiles for any website
            </p>
          </div>

          <div>
            <p className="mb-1">
              <span className="font-bold">Blob Combat Simulation</span> (
              <a
                href="https://github.com"
                className="text-blue-600 hover:underline"
              >
                Github
              </a>
              ) <span className="italic">C++, SFML, QtCreator, Eigen</span>
            </p>
            <p>
              Developed a simulation where 'blobs' evolve to fight using neural
              networks and different genetic selection algorithms
            </p>
          </div>

          <div>
            <p className="mb-1">
              <span className="font-bold">Water Jet Propelled Vehicle</span> (
              <a href="#" className="text-blue-600 hover:underline">
                Portfolio Link
              </a>
              ){' '}
              <span className="italic">C, MATLAB, SolidWorks, 3D Printing</span>
            </p>
            <p>
              Built a water-jet propelled RC car that came 1st place out of 20
              teams in competition, scoring major points for a time marching
              simulation that predicted vehicle kinematics to within 12%
              accuracy
            </p>
          </div>

          <div>
            <p className="mb-1">
              <span className="font-bold">Improved UUP Transcript</span> (
              <a
                href="https://github.com"
                className="text-blue-600 hover:underline"
              >
                Github
              </a>
              ) <span className="italic">Python, Flask, JavaScript</span>
            </p>
            <p>
              A JavaScript bookmarklet that users can easily click to enhance
              the unofficial UUP Transcript by removing clutter and adding
              course information to grades. Retrieves information from web app
              with REST API
            </p>
          </div>
        </div>
      </section>

      {/* Languages and Technologies Section */}
      <section>
        <h2 className="text-xl font-bold border-b border-black pb-1 mb-4">
          Languages and Technologies
        </h2>
        <ul className="list-disc ml-5 space-y-2">
          <li>
            General Programming: Python, C++, Java, Kotlin, C, MATLAB, VBA
          </li>
          <li>
            Web Development: Flask, Django, Selenium, Javascript, HTML, CSS
          </li>
          <li>
            IDEs: Visual Studio, Android Studio, QtCreator, PyCharm, IntelliJ
          </li>
        </ul>
      </section>
    </div>
  )
}
