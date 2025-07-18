
import Image from "next/image"
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react"
import TextSplit from "@/components/animations/text-split"
import TextStagger from "@/components/animations/text-stagger"

const services = [
  {
    title: "Web Development & Design Integration",
    items: [
      "Custom website development (React, Vue, Next, Laravel)",
      "Design-to-code conversions (Figma to responsive code)",
      "Pixel-perfect UI with animations & interactions",
      "Headless CMS integration (Sanity)",
      "Creative e-commerce (Shopify, WordPress)",
    ],
  },
  {
    title: "Interaction & Animation",
    items: [
      "GSAP-powered animations (scroll, hover, entrance)",
      "WebGL/Canvas visuals (Three.js, Pixi.js)",
      "SVG animations and creative interactions",
    ],
  },
  {
    title: "Additional Services",
    items: ["API integrations", "Custom CMS development", "Portfolio platforms", "SEO & performance optimization"],
    fullWidth: true,
  },
]

const experiences = [
  {
    period: "September 2024 - Present",
    role: "Freelance Web Developer & UI/UX Designer",
    company: "Various Clients (Remote)",
    responsibilities: [
      "Built and deployed full-stack websites using Next.js, TailwindCSS, Node.js, and Laravel",
      "Designed and developed custom Shopify themes for clothing and lifestyle brands",
      "Collaborated directly with clients to plan, prototype, and deliver user-focused web solutions",
      "Integrated headless CMS platforms (Sanity, Contentful) for dynamic content management",
      "Implemented GSAP and ScrollTrigger animations for interactive and engaging experiences",
      "Handled version control, deployments, and performance optimization using Git, Vercel, and Lighthouse",
    ],
  },
  {
    period: "August 2021 - December 2022",
    role: "Front-end Web Developer",
    company: "KidTech Web Solutions",
    responsibilities: [
      "Developed and maintained responsive websites using HTML, CSS, JavaScript, and React",
      "Developed custom websites using WordPress and PHP",
      "Translated Figma designs into interactive, pixel-perfect UI components",
      "Collaborated with Back-end developers to improve website functionality and performance",
      "Optimized web pages for speed, SEO, and accessibility",
      "Integrated REST APIs",
    ],
  },
]

const education = [
  {
    year: "2024",
    institution: "MSU-IIT",
    degree: "Bachelor of Science in Information Technology",
  },
  {
    year: "2019",
    institution: "Iligan Computer Institute",
    degree: "ICT",
  },
]

export default function About() {
  return (
    <main className="">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 space-y-16 pt-32">
        <div className="container mx-auto max-w-6xl">
          <TextSplit
            text1="About"
            text2=""
            className="text-zinc-900 text-4xl md:text-6xl lg:text-7xl font-bold uppercase text-center leading-tight mb-16"
          />

          <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-zinc-100 to-zinc-200">
                <Image
                  src="/profile.jpg?height=400&width=400"
                  alt="Christian Penales - Profile"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-zinc-900 rounded-2xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-zinc-300 rounded-xl -z-10"></div>
            </div>

            {/* Introduction */}
            <div className="flex-1 max-w-2xl space-y-8 text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900">Hi, I&apos;m Christian</h1>

              <div className="space-y-6">
                <TextStagger className="text-lg md:text-xl lg:text-2xl text-zinc-700 leading-relaxed">
                  A passionate and detail-oriented Freelance Web Developer and UI/UX Designer with 3 years of experience
                  crafting visually stunning, user-friendly, and responsive web applications.
                </TextStagger>

                <TextStagger className="text-lg md:text-xl text-zinc-600 leading-relaxed">
                  I specialize in turning creative ideas into seamless digital experiences by leveraging effective
                  technologies and best practices in web development.
                </TextStagger>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-zinc-900">3+</div>
                  <div className="text-sm text-zinc-600 uppercase tracking-wide">Years Experience</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-zinc-900">50+</div>
                  <div className="text-sm text-zinc-600 uppercase tracking-wide">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase text-zinc-500 tracking-wider mb-4">Services</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900">What I Can Do For You</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-zinc-50 hover:bg-zinc-100 p-8 lg:p-10 rounded-3xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  service.fullWidth ? "lg:col-span-2" : ""
                }`}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-zinc-900 mb-6 group-hover:text-zinc-800 transition-colors">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-zinc-700 text-lg">
                      <div className="w-2 h-2 bg-zinc-400 rounded-full mt-3 flex-shrink-0 group-hover:bg-zinc-600 transition-colors"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-4 ">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase text-zinc-500 tracking-wider mb-4 flex items-center justify-center gap-2">
              <Briefcase className="w-4 h-4" />
              Experience
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900">Professional Journey</h2>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-2 text-zinc-600 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-lg font-medium">{exp.period}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-zinc-900 mb-2">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-zinc-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-lg">{exp.company}</span>
                    </div>
                  </div>

                  <div className="lg:w-2/3">
                    <ul className="space-y-4">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-3 text-zinc-700 text-lg">
                          <div className="w-2 h-2 bg-zinc-900 rounded-full mt-3 flex-shrink-0"></div>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase text-zinc-500 tracking-wider mb-4 flex items-center justify-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Education
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900">Academic Background</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-zinc-50 hover:bg-zinc-100 p-8 lg:p-10 rounded-3xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="text-zinc-600 text-lg font-medium mb-2">{edu.year}</div>
                <h3 className="text-xl md:text-2xl font-bold text-zinc-900 mb-2">{edu.degree}</h3>
                <div className="text-zinc-700 text-lg">{edu.institution}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-zinc-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s create something amazing together. I&apos;m always excited to take on new challenges and bring creative
            ideas to life.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-zinc-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-100 hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </main>
  )
}
