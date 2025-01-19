import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <div className="portfolio">
        <section className="about-me">
          <p>
            I am Sijan, a seasoned Senior Software Engineer with over 9 years of experience building scalable,
            high-performance solutions. I specialize in <strong>Node.js</strong>, <strong>React</strong>, <strong>AWS</strong>,
            and <strong>PostgreSQL</strong>, with a strong focus on backend development, architecture, and design thinking.
            Passionate about crafting user-focused digital products, I excel at driving innovation and mentoring teams to
            deliver impactful software solutions.
          </p>
        </section>

        <section className="what-i-do">
          <h2>What I Do</h2>
          <ul>
            <li><strong>Backend Engineering:</strong> Designing and implementing robust, scalable server-side solutions.</li>
            <li><strong>Frontend Development:</strong> Creating seamless user experiences with React and modern UI practices.</li>
            <li><strong>Cloud Architecture:</strong> Leveraging AWS to deliver secure, reliable, and cost-effective solutions.</li>
            <li><strong>Database Management:</strong> Optimizing database structures and performance for complex applications.</li>
            <li><strong>Team Leadership:</strong> Mentoring developers and introducing tools to improve efficiency and reduce development time.</li>
          </ul>
        </section>

        <section className="key-projects">
          <h2>Key Projects</h2>
          <ul>
            <li><strong>Digital Voucher System:</strong> Developed a digital voucher distribution system for Thailand's largest theater chain.</li>
            <li><strong>Grocery Delivery Service:</strong> Built a grocery delivery platform for Norwegian senior citizens during COVID-19.</li>
            <li><strong>High-Traffic PWA:</strong> Engineered a high-traffic Progressive Web App serving over 10 million users across Southeast Asia.</li>
            <li><strong>Cloud Services for ISUZU Japan:</strong> Managed serverless cloud services and streamlined operations.</li>
          </ul>
        </section>

        <section className="core-values">
          <h2>Core Values</h2>
          <p>
            I believe in being positive, humble, and a good influence in the workplace. My leadership style emphasizes
            collaboration, clear communication, and fostering a growth mindset within teams.
          </p>
        </section>

        <section className="contact">
          <h2>Let’s Work Together</h2>
          <p>If you’re looking for someone to bring expertise, innovation, and leadership to your project, feel free to connect!</p>
        </section>
      </div>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
