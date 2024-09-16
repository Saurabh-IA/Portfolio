export function useConstants() {
  const navigation = [
    {
      id: 1,
      name: "About",
      href: "/about",
    },
    {
      id: 2,
      name: "Skills",
      href: "/skills",
    },
    {
      id: 4,
      name: "Projects",
      href: "/projects",
    },
    {
      id: 5,
      name: "Contact",
      href: "/contact",
    },
    {
      id: 6,
      name: "Blog",
      href: "/blog",
    },
  ];

  const skillWithLogo = [
    {
      imgUrl: "/logos/html5-original.svg",
      name: "HTML",
      alt: "HTML logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/css3-plain-wordmark.svg",
      name: "CSS",
      alt: "CSS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/javascript-original.svg",
      name: "JavaScript",
      alt: "JavaScript logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/vuejs-original.svg",
      name: "Vue",
      alt: "Vue logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/nuxtjs-original.svg",
      name: "NuxtJS",
      alt: "NuxtJS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/react-original.svg",
      name: "React",
      alt: "React logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/nextjs-original.svg",
      name: "NextJS",
      alt: "NextJs logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/tailwindcss-plain.svg",
      name: "TailwindCSS",
      alt: "TailwindCSS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/firebase-plain.svg",
      name: "Firebase",
      alt: "Firebase logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/typescript-original.svg",
      name: "TypeScript",
      alt: "TypeScript logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/nodejs-original.svg",
      name: "NodeJS",
      alt: "NodeJS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/git-original.svg",
      name: "Git",
      alt: "Git logo",
      width: 150,
      height: 150,
    },
  ];
  const hobbies = [
    {
      title: "Adventuring",
      text: "A great way to heal my soul",
      classBg: "bg-adventure",
    },
    {
      title: "Gaming",
      text: "Love exploring the virtual works and great stories. Current favs : Ghost of Tsushima, Black myth Wukong",
      classBg: "bg-gaming",
    },
    {
      title: "Learning new technologies/framework",
      text: "Recently learnt Nuxtjs while making this site",
      classBg: "bg-programming",
    },
    {
      title: "Listening to music",
      text: "All time favourates : Radiohead, Joji, Tame impala, Nirvana, Coldplay and many more",
      classBg: "bg-music",
    },
  ];
  const projects = [
    {
      isReverse: true,
      title: "My Portfolio",
      titleColor: "text-white",
      filterColor: "bg-slate-900 bg-opacity-60",
      imageUrl: "/project-ss/Portfolio.png",
      description:
        "A sleek, modern portfolio showcasing my expertise in web development, design, and user-centric solutions.",
      techStack: [
        "NuxtJS",
        "Vuejs",
        "TailwindCSS",
        "Firebase"
      ],
      isUrl: true,
      urlLink: "https://my-portfolio-7e81f.web.app/",
      githubLink: "https://github.com/saurabhsingh0212/Portfolio",
      // githubLink: "https://github.com/eazypau/my-blog",
    },
    {
      isReverse: true,
      title: "Products Showcase Website",
      titleColor: "text-white",
      filterColor: "bg-slate-900 bg-opacity-60",
      imageUrl: "/project-ss/Product.png",
      description:
        "An products and services showcase web app. It can be also used to get inquiries and share other details.",
      techStack: [
        "React",
        "TailwindCSS",
        "Firebase",
        "Google APIs",
        "Django for CMS",
      ],
      isUrl: true,
      urlLink: "https://productshowcase.web.app/",
      githubLink: "https://github.com/saurabhsingh0212/BlisterPacking",
    },
  ];
  const workingProjects = [
    {
      image: {
        src: "/work/jagaapp/jagaapp-logo.png",
        alt: "JagaApp",
        width: "225",
        height: "225",
        maxWidth: "max-w-[35%] 3xl:max-w-[35%]",
      },
      imageShowcase: [
        {
          title: "Visitor Setting",
          src: "/work/jagaapp/visitor-setting.png",
          alt: "Visitor Setting",
          width: "1920",
          height: "959",
        },
        {
          title: "Visitor Setting - Note From Management",
          src: "/work/jagaapp/visitor-setting-note.png",
          alt: "Visitor Setting - Note From Management",
          width: "1920",
          height: "953",
        },
        {
          title: "Facility Log",
          src: "/work/jagaapp/facility-log.png",
          alt: "Facility Log",
          width: "1920",
          height: "953",
        },
        {
          title: "Revamped Visitor Log",
          src: "/work/jagaapp/visitor-log.png",
          alt: "Revamped Visitor Log",
          width: "1920",
          height: "953",
        },
      ],
      heading: "JagaApp",
      description: `JagaApp Admin Panel is a property management admin panel. It is mainly for internal and client (Management) 
      side use. It can be use for managing visitors, post notice, managing user feedbacks, etc. *Disclaimer: all data shown here 
      are testing/dummy data.`,
      teamMembers: [
        {
          name: "Max Leong",
          linkedIn: "",
        },
      ],
      techStack: ["ReactJs", "NextJs", "Material-UI", "Firebase"],
      highlights:
        "Visitor Setting Enhancement, Creating Logs for monitoring, Module Migration",
      urls: [
        {
          name: "JagaApp Admin Panel",
          link: "https://admin.jagaapp.com/login",
        },
      ],
    },
    {
      image: {
        src: "/work/LVLY_logo.webp",
        alt: "LVLY",
        width: "410",
        height: "117",
        maxWidth: "max-w-[60%] md:max-w-[50%] 3xl:max-w-[55%]",
      },
      imageShowcase: [
        {
          title: "Cart Page - Step 1",
          src: "/work/lvly-cart-s1.png",
          alt: "Cart Page - Step 1",
          width: "800",
          height: "446",
        },
        {
          title: "Cart Page - Step 2",
          src: "/work/lvly-cart-s2.png",
          alt: "Cart Page - Step 2",
          width: "800",
          height: "404",
        },
        {
          title: "Cart Page - Step 3",
          src: "/work/lvly-cart-s3.png",
          alt: "Cart Page - Step 3",
          width: "800",
          height: "637",
        },
        {
          title: "Cart Page - Step 4",
          src: "/work/lvly-cart-s4.png",
          alt: "Cart Page - Step 4",
          width: "800",
          height: "520",
        },
        {
          title: "Product Page - Build A Bundle",
          src: "/work/lvly/lvly-bab.png",
          alt: "Product Page - Build A Bundle",
          width: "1920",
          height: "5503",
        },
        {
          title: "General Product Page",
          src: "/work/lvly/lvly-product-page.png",
          alt: "General Product Page",
          width: "1920",
          height: "1902",
        },
      ],
      heading: "LVLY",
      description: `LVLY is an online flower shop that offers beautiful, fragrant, fresh flowers for any occasion.
      The aim was to work on the features for the cart page and product page. Creating a step by step user interface to guide customer 
      to checkout page. It allows the customer to pick their desired delivery date based on the postcode and suburb 
      provided. Moreover, customer can also provide their card message, choose their desired jar message and greeting 
      cards.`,
      teamMembers: [
        {
          name: "Sylvia Chan",
          linkedIn: "https://www.linkedin.com/in/sylviaachann/",
        },
        {
          name: "Chan Sin Yee",
          linkedIn: "https://www.linkedin.com/in/sin-yee-chan-2865bbaa/",
        },
      ],
      techStack: ["HTML", "CSS", "JavaScript", "jQuery", "Shopify Liquid"],
      highlights:
        "Cart page layout & functionality, Product Page Addons UI & functionality",
      urls: [
        {
          name: "LVLY AU",
          link: "https://www.lvly.com.au/",
        },
        {
          name: "LVLY MY",
          link: "https://www.lvly.my/",
        },
      ],
    },
    {
      image: {
        src: "/work/FC-MY.webp",
        alt: "Flowerchimp",
        width: "410",
        height: "205",
        maxWidth: "max-w-[60%] md:max-w-[50%] 3xl:max-w-[55%]",
      },
      imageShowcase: [
        {
          title: "Product Page",
          src: "/work/fc-product-page.png",
          alt: "Product Page",
          width: "745",
          height: "432",
        },
        {
          title: "Product Page - Addon Product Modal",
          src: "/work/fc-product-addon-modal.png",
          alt: "Product Page - Addon Product Modal",
          width: "1000",
          height: "492",
        },
        {
          title: "Cart Page",
          src: "/work/fc-cart-page.png",
          alt: "Cart Page",
          width: "745",
          height: "476",
        },
        {
          title: "Cart Page - Empty Cart",
          src: "/work/fc-empty-cart.png",
          alt: "Cart Page - Empty Cart",
          width: "745",
          height: "351",
        },
      ],
      heading: "Flowerchimp",
      description: `Flowerchimp is an online flower shop that offers a wide selection of beautiful bouquets and
      arrangements to suit any occasion. Customers can choose from a variety of flowers, vases and boxes to make
      sure their gift is special and unique. The aim was to work on revamping the product page and cart page. 
      Making the user interface better and user friendly. The process also includes rewrite the functionality 
      to the website slightly faster, improving user experience and making the codebase easier to maintain.`,
      teamMembers: [
        {
          name: "Sylvia Chan",
          linkedIn: "https://www.linkedin.com/in/sylviaachann/",
        },
        {
          name: "Chan Sin Yee",
          linkedIn: "https://www.linkedin.com/in/sin-yee-chan-2865bbaa/",
        },
      ],
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "jQuery",
        "Shopify Liquid",
        "Splide",
        "Modaal",
      ],
      highlights: "Product Page Revamp & Cart Page Revamp",
      urls: [
        {
          name: "Flowerchimp MY",
          link: "https://www.flowerchimp.com/",
        },
      ],
    },
    {
      image: {
        src: "/work/BR_Logo.webp",
        alt: "Bloomeroo",
        width: "410",
        height: "82",
        maxWidth: "max-w-[70%] md:max-w-[60%] 3xl:max-w-[55%]",
      },
      imageShowcase: [
        {
          title: "Cart Page",
          src: "/work/bl-cart.png",
          alt: "Cart Page",
          width: "800",
          height: "543",
        },
      ],
      heading: "Bloomeroo",
      description: `Bloomeroo is an e-commerce website that specializes in selling fresh flowers and providing same-day
      delivery in Australia. The aim was to work on generating the date picker by postcode input for the cart page. This 
      requires user to provide postcode in order to choose their desired delivery date. Moreover, customer can also 
      provide their card message and choose addon products before going to checkout page.`,
      techStack: ["HTML", "CSS", "JavaScript", "jQuery", "Shopify Liquid"],
      teamMembers: [
        {
          name: "Sylvia Chan",
          linkedIn: "https://www.linkedin.com/in/sylviaachann/",
        },
        {
          name: "Chan Sin Yee",
          linkedIn: "https://www.linkedin.com/in/sin-yee-chan-2865bbaa/",
        },
      ],
      highlights:
        "Render selectable dates based on postcode input, website maintenance",
      urls: [
        {
          name: "Bloomeroo",
          link: "https://www.bloomeroo.com.au/",
        },
      ],
    },
    {
      image: {
        src: "/work/cr-footer-logo.webp",
        alt: "Cakerush MY",
        width: "183",
        height: "42",
        maxWidth: "max-w-[70%] md:max-w-[60%] 3xl:max-w-[55%]",
      },
      imageShowcase: [
        {
          title: "Home Page",
          src: "/work/cakerush-homepage-revamp.png",
          alt: "Home Page",
          width: "1920",
          height: "6199",
        },
        {
          title: "Explosion Box Product Template",
          src: "/work/cakerush-explosion-box-page.png",
          alt: "Explosion Box Product Template",
          width: "1920",
          height: "4847",
        },
      ],
      heading: "Cakerush MY",
      description: `Cakerush MY is an innovative online platform offering a wide selection of exquisite cakes and pastries. 
      With a user-friendly interface, customers can easily browse and customize their orders for any occasion. From classic 
      flavors to personalized designs, each cake is meticulously crafted using the finest ingredients. Cakerush MY ensures 
      timely delivery, bringing fresh and visually stunning cakes to your doorstep. Elevate your celebrations with their 
      exceptional creations and exceptional service.`,
      techStack: ["HTML", "CSS", "JavaScript", "jQuery", "Shopify Liquid"],
      teamMembers: [
        {
          name: "Sylvia Chan",
          linkedIn: "https://www.linkedin.com/in/sylviaachann/",
        },
      ],
      highlights: "Home Page Revamp & Explosion Box Product Template Page",
      urls: [
        {
          name: "Cakerush MY",
          link: "https://www.cakerush.my/",
        },
      ],
    },
    {
      image: {
        src: "/work/thc-logo.webp",
        alt: "The Hacker Collection Website",
        width: "62",
        height: "65",
        maxWidth: "max-w-[70%] md:max-w-[60%] 3xl:max-w-[55%]",
      },
      imageShowcase: [
        {
          title: "Home Page",
          src: "/work/thc-home-full.png",
          alt: "Home Page",
          width: "874",
          height: "4796",
        },
        {
          title: "Fundraising Page",
          src: "/work/thc-fundraising.png",
          alt: "Fundraising Page",
          width: "805",
          height: "5208",
        },
      ],
      heading: "The Hacker Collection Website",
      description: `The Hacker Collection (THC) is an innovative landing page website that offers a comprehensive
      overview of a company's mission, products, and services. With a modern and user-friendly design, THC offers
      an intuitive way to showcase a company's offerings and provides visually appealing and easy-to-understand
      information. THC also offers a number of tools, such as a contact form, a blog, and registration forms, to
      help customers interact with the company in a meaningful way.`,
      techStack: ["Vue", "Nuxt3", "TailwindCSS", "HeadlessUI", "Heroicons"],
      teamMembers: [
        {
          name: "Bryan Liaw",
          linkedIn: "",
        },
        {
          name: "Pierce Ong",
          linkedIn: "",
        },
        {
          name: "Adri Shahri",
          linkedIn: "",
        },
      ],
      highlights: "Manage and work with the team to create the entire website.",
      urls: [
        {
          name: "THC Website",
          link: "https://hackercollective.co/",
        },
      ],
    },
  ];

 
  const timeline = [
    {
      logo: "",
      logoBorderColor: "#f9f9f9",
      companyName: "Internet Academy",
      duration: "Feb 2022 - Current",
      jobScope: [
        "Spearheaded development and maintenance of Internet Academy's corporate platform and LMS, serving 10,000 daily users.",
        "Built a CRM tool using VueJS/Django, reducing the sales cycle by 40% and boosting sales by 50%.",
        "Developed an Admin System for corporate clients, cutting manual analysis time by 60% and adding key features like test score analysis.",
        "Led the transformation of the LMS to VueJS, improving performance, and boosting daily users by 20%.",
        "Deployed systems using Docker, AWS S3, and EC2, ensuring seamless streaming and robust infrastructure.",
        "Developed a DX Assessment system to evaluate the technical and behavioral competencies of new joinees, now offered as a service by the company.",
        "Integrated an online payment system into the company's websites, streamlining transactions for users.",
      ],
    },
    {
      logo: "/work/ltg/ltg-logo.jpeg",
      logoBorderColor: "#7303C0",
      companyName: "Eclerx Services Pvt Ltd",
      duration: "June 2021 - Feb 2022",
      jobScope: [
        "Developed a Transaction Verification Application using React and Node.js, ensuring rigorous cash flow examination.",
        "Automated payment quote generation post-verification, streamlining financial processes.",
        "Enabled seamless communication by dispatching verified quotes to relevant parties.",
        "Utilized Jest for testing, ensuring application reliability and performance.",
      ],
    },
  ];


  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development",
      date: "2024-09-16",
      content: `
        The landscape of web development is continuously evolving, and the future promises even greater innovations that will redefine how we build and interact with digital experiences. The emergence of cutting-edge technologies like WebAssembly, AI integration, and low-code platforms is giving developers an unprecedented array of tools to create more immersive, interactive, and scalable solutions.

WebAssembly is one of the most transformative technologies on the horizon. By allowing code to run at near-native speeds in the browser, WebAssembly is opening up possibilities for complex applications like video editing, gaming, and even machine learning directly in the browser. This shifts the paradigm from traditional web applications to a future where almost anything can be done without leaving the browser.

In parallel, AI integration is making its way into web development in various forms. From AI-driven user interfaces that adapt to individual users to automated backend operations, AI is not only improving the user experience but also optimizing the development process. Imagine websites that can predict user behavior, adapt in real-time, and offer hyper-personalized experiences — all powered by artificial intelligence.

Low-code platforms are another game-changer, enabling non-developers to build sophisticated applications with minimal coding. These platforms streamline the development process, reducing the time and resources needed to bring a project to life. While they won’t replace traditional coding entirely, they democratize development, allowing more people to participate in the creation of digital products.

Overall, the future of web development is exciting, with new technologies continuously breaking down barriers and expanding possibilities. As these innovations mature, developers will be empowered to build more powerful, efficient, and interactive web experiences that push the boundaries of what's possible.
      `,
    },
    {
      id: 2,
      title: "Why Nuxt 3 is Perfect for SEO",
      date: "2024-08-25",
      content: `
        Search engine optimization (SEO) has always been a critical factor in the success of websites. With Nuxt 3, developers have a powerful framework at their disposal to improve SEO without much effort. Its built-in server-side rendering (SSR) and static site generation (SSG) make it an ideal choice for creating highly optimized, SEO-friendly websites.

One of the key advantages of Nuxt 3 is its ability to render pages on the server before sending them to the browser. This process, known as server-side rendering, ensures that search engines can easily crawl and index your site's content. Many client-side rendered frameworks, like traditional Vue.js or React.js applications, rely heavily on JavaScript to display content, which can pose challenges for search engines. With SSR in Nuxt 3, the full content of each page is immediately available, allowing for better indexing and faster page load times, both of which are critical for SEO.

Another feature that makes Nuxt 3 stand out for SEO is automatic static optimization. When you use static site generation, your website becomes faster and more secure, which not only improves the user experience but also boosts SEO rankings. Static sites are inherently more secure because they don’t rely on databases or dynamic code execution, reducing the risk of hacking. Additionally, search engines reward fast-loading pages, and static sites typically load significantly faster than their dynamic counterparts.

Nuxt 3 also offers enhanced support for meta tags, structured data, and other essential SEO elements. By making it easy to define these attributes on a per-page basis, Nuxt helps developers ensure that each page is optimized for search engines.

In conclusion, Nuxt 3 combines the best of modern web development with a focus on performance and SEO, making it a top choice for developers looking to create highly optimized, search-engine-friendly websites.


      `,
    },
    {
      id: 3,
      title: "The Rise of Static Site Generators",
      date: "2024-07-10",
      content: `
        Static site generators (SSGs) have been gaining significant traction in recent years, offering an elegant solution for creating fast, secure, and scalable websites. Tools like Nuxt and Next.js have emerged as leading options for developers, providing simplicity and performance that traditional content management systems (CMSes) often struggle to match.

One of the primary reasons for the rise of static site generators is their incredible speed. Unlike dynamic websites, which require server-side processing for each user request, static sites are pre-generated during the build process. This means that when a user visits the site, all they need to do is download pre-rendered HTML, CSS, and JavaScript files. As a result, static sites load incredibly fast, which not only improves user experience but also has a positive impact on SEO rankings.

Security is another compelling advantage of SSGs. Because static sites don’t rely on databases or server-side code, the attack surface is significantly reduced. Traditional CMS platforms like WordPress often require constant updates and security patches to protect against vulnerabilities, whereas static sites are inherently safer since there's no dynamic code execution on the server.

Static site generators also offer a level of simplicity and efficiency that makes them ideal for certain types of websites, such as blogs, portfolios, and e-commerce sites. For example, developers can write content in Markdown or another simple format, and the SSG will automatically generate the necessary HTML. This reduces the complexity of development while still providing flexibility in design and functionality.

Furthermore, many static site generators integrate seamlessly with headless CMS platforms, allowing developers to decouple the content management system from the frontend. This provides a powerful combination of flexibility and performance, enabling content editors to easily update content while developers focus on building highly optimized, fast-loading websites.

In summary, the rise of static site generators is a testament to their ability to provide performance, security, and simplicity in web development. As more developers and businesses seek out faster and more secure solutions, SSGs like Nuxt and Next.js are likely to play an even larger role in the future of web development.
      `,
    },
    {
      id: 4,
      title: "Harnessing the Power of WebAssembly for Next-Gen Web Apps",
      date: "2024-09-16",
      content: `
        WebAssembly (Wasm) has emerged as a groundbreaking technology poised to revolutionize the web development landscape. By allowing code written in languages like C, C++, and Rust to run natively in the browser at near-native speeds, WebAssembly has opened up a new realm of possibilities for building high-performance web applications that were previously thought to be impossible.

One of the key advantages of WebAssembly is its ability to execute complex tasks that were traditionally limited to desktop applications. For instance, video editing, 3D modeling, and even real-time gaming can now be done directly within the browser without sacrificing performance. This not only enhances user experience but also allows developers to bring a wider array of services and applications online without needing to rely on powerful client hardware.

WebAssembly also plays a crucial role in improving the performance of existing JavaScript applications. Instead of rewriting entire applications in WebAssembly, developers can strategically use it to handle performance-intensive tasks, such as data processing, cryptography, or complex algorithms. This hybrid approach leverages both the ease of JavaScript and the power of WebAssembly, resulting in faster and more efficient web apps.

Another noteworthy aspect is WebAssembly's platform-agnostic nature. It runs seamlessly across different devices and operating systems, making it ideal for cross-platform development. Whether users are on desktops, laptops, or mobile devices, they can experience the same high performance and responsiveness.

As WebAssembly continues to mature, we can expect to see more web applications taking advantage of this technology. Developers now have the tools to push the boundaries of what web apps can do, creating faster, more interactive, and resource-intensive applications that deliver desktop-level performance right in the browser.
      `,
    },
    {
      id: 5,
      title: "Headless CMS: The Future of Content Management",
      date: "2024-09-16",
      content: `
        The traditional content management system (CMS) model is rapidly evolving, and headless CMS platforms are leading the charge. Unlike traditional CMSes, which tightly couple the backend (where content is created and managed) with the frontend (how that content is displayed), a headless CMS decouples the two, providing unparalleled flexibility and scalability in content delivery.

At the core of a headless CMS is an API-first approach. Instead of rendering content directly to HTML or templates, headless CMS platforms expose content via APIs that can be consumed by any frontend framework or device. This means developers are free to choose whatever frontend technology they prefer, whether it’s a modern framework like Nuxt.js or React, or even mobile applications and IoT devices.

One of the key benefits of headless CMS is the ability to serve content across multiple platforms. In today’s multi-device world, content needs to be delivered to websites, mobile apps, smart devices, and more. A headless CMS allows businesses to centralize their content and serve it dynamically to any platform via APIs, ensuring consistency across all digital touchpoints.

Additionally, a headless CMS excels in performance and scalability. By offloading content delivery to APIs, the frontend can focus entirely on performance and optimization, while the CMS backend can scale independently based on content needs. This separation allows businesses to optimize each part of their architecture for its specific purpose, resulting in faster, more reliable, and easily maintainable websites and applications.

Moreover, headless CMS platforms are well-suited for modern web development workflows. They integrate smoothly with static site generators like Nuxt.js and Next.js, making it easy to create blazing-fast websites that leverage the power of static rendering while still pulling dynamic content from the headless CMS.

As content delivery becomes more complex and multi-faceted, the future of content management lies in headless CMS solutions. They provide the flexibility, scalability, and performance needed to thrive in an increasingly connected digital world.`,
    },
  ];

  return {
    navigation,
    hobbies,
    skillWithLogo,
    projects,
    workingProjects,
    timeline,
    blogPosts,
  };
}
