const portfolioProjects = [
  {
    id: "amazon",
    img: "ICONS/Amazon-test.png",
    alt: "Amazon Clone Preview",
    title: "Amazon E-commerce Clone",
    description: "A responsive e-commerce site built with HTML, CSS, and JavaScript, inspired by SuperSimpleDev. Includes product filtering, a dynamic cart, and an Amazon-style UI — all built from scratch.",
    link: "https://skinojosh22.github.io/amazon-test/amazon.html",
    buttonText: "View Project"
  },
  {
    id: "admin-dashboard",
    img: "ICONS/Admin-dashboard.png",
    alt: "Admin Dashboard",
    title: "Admin Dashboard",
    description: "Real-time dashboard with product CRUD, animated UI, and Supabase backend integration. Built for speed and scale.",
    link: "https://skinojosh22.github.io/Admin-dashboard/",
    buttonText: "View Project"
  },
  {
    id: "ronald-portfolio",
    img: "ICONS/Ronald-portfolio.png",
    alt: "Ronald Portfolio Site",
    title: "Ronald&Co. Portfolio",
    description: "This live business website was built for a fictional digital agency. Fully responsive, hosted on Netlify + GitHub.",
    link: "https://ronald-porfolio.netlify.app/",
    buttonText: "View Live"
  }
];

// Generate a preview for each project
const portfolioPreviews = portfolioProjects.map(project => ({
  id: `preview-${project.id}`,
  item: { ...project },
  preview: {
    img: project.img,
    alt: project.alt
  }
}));