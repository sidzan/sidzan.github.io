import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="mb-12 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
        My Portfolio
      </h1>
      <div className="space-y-16">
        <section className="about-me">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I am Sijan, a seasoned Senior Software Engineer with over 9 years of experience building scalable,
            high-performance solutions. I specialize in <strong className="text-indigo-600 dark:text-indigo-400">Node.js</strong>,
            <strong className="text-indigo-600 dark:text-indigo-400"> React</strong>,
            <strong className="text-indigo-600 dark:text-indigo-400"> AWS</strong>, and
            <strong className="text-indigo-600 dark:text-indigo-400"> PostgreSQL</strong>, with a strong focus on backend development,
            architecture, and design thinking. Passionate about crafting user-focused digital products, I excel at driving
            innovation and mentoring teams to deliver impactful software solutions.
          </p>
        </section>

        <section className="what-i-do">
          <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">What I Do</h2>
          <ul className="space-y-4">
            {[
              ["Backend Engineering", "Designing and implementing robust, scalable server-side solutions."],
              ["Frontend Development", "Creating seamless user experiences with React and modern UI practices."],
              ["Cloud Architecture", "Leveraging AWS to deliver secure, reliable, and cost-effective solutions."],
              ["Database Management", "Optimizing database structures and performance for complex applications."],
              ["Team Leadership", "Mentoring developers and introducing tools to improve efficiency and reduce development time."]
            ].map(([title, desc]) => (
              <li key={title} className="flex flex-col sm:flex-row sm:items-start">
                <strong className="min-w-[200px] text-indigo-600 dark:text-indigo-400">{title}:</strong>
                <span className="text-gray-700 dark:text-gray-300">{desc}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="key-projects">
          <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">Key Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              ["Digital Voucher System", "Developed a digital voucher distribution system for Thailand's largest theater chain."],
              ["Grocery Delivery Service", "Built a grocery delivery platform for Norwegian senior citizens during COVID-19."],
              ["High-Traffic PWA", "Engineered a high-traffic Progressive Web App serving over 10 million users across Southeast Asia."],
              ["Cloud Services for ISUZU Japan", "Managed serverless cloud services and streamlined operations."]
            ].map(([title, desc]) => (
              <div key={title} className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800">
                <h3 className="mb-2 font-semibold text-indigo-600 dark:text-indigo-400">{title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="core-values">
          <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">Core Values</h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I believe in being positive, humble, and a good influence in the workplace. My leadership style emphasizes
            collaboration, clear communication, and fostering a growth mindset within teams.
          </p>
        </section>

        <section className="contact bg-indigo-50 dark:bg-gray-800 rounded-xl p-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">Let's Work Together</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            If you're looking for someone to bring expertise, innovation, and leadership to your project, feel free to connect!
          </p>
        </section>
      </div>

      <div className="mt-16">
        <BlogPosts />
      </div>
    </section>
  )
}