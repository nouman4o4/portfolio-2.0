import { IProject } from "@/types/interfaces"

export const projects: IProject[] = [
  {
    title: "Mini pinterest",
    category: "Next.js Full Stack",
    image: "/project/miniPinterest.jpg",
    description:
      "A Pinterest-inspired image gallery app built with Next.js, featuring organized collections and upcoming AI-based enhancements.",
    liveUrl: "https://image-app-beige.vercel.app",
    repo: "https://github.com/nouman4o4/image-app",
  },
  {
    title: "MERN Blog App",
    category: "Full Stack (MERN)",
    image: "/project/blog.png",
    description:
      "A modern blogging platform featuring a rich text editor, post management, user profiles, and interactive engagement features.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    repo: "https://github.com/nouman4o4/mern-blog-app",
    liveUrl: "https://mern-blog-app-woad-rho.vercel.app/",
  },
  {
    title: "Real-Time Chat App",
    category: "Full Stack (MERN)",
    image: "/project/chat-app.png",
    description:
      "A real-time chat application built with the MERN stack, socket.io, and elegant DaisyUI themes for smooth and responsive communication.",
    repo: "https://github.com/nouman4o4/chat-app",
  },

  {
    title: "Portfolio 2.0",
    category: "Next.js (Frontend)",
    image: "/project/portfolio.png",
    description:
      "A visually appealing and premium portfolio website showcasing projects, skills, and personal branding with a clean, modern layout.",
    liveUrl: "https://portfolio-2-0-weld-three.vercel.app/",
    repo: "https://github.com/nouman4o4/portfolio-2.0",
  },
  {
    title: "YC Directory",
    category: "Next.js 15 (Full Stack)",
    image: "/project/yc-directory.png",
    description:
      "A startup discovery platform inspired by Y Combinator — allowing founders to pitch ideas, connect with entrepreneurs, and vote on innovative projects.",
    repo: "https://github.com/nouman4o4/yc-directory",
  },
  {
    title: "Note Taking App",
    category: "Next.js Full Stack",
    image: "/project/note-app.png",
    description:
      "A secure and minimal note-taking application powered by Next.js, MongoDB, and NextAuth for authentication and data management.",
    liveUrl: "https://notetakingapp-liard.vercel.app/",
    repo: "https://github.com/nouman4o4/notetakingapp",
  },
]
