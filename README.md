# Developer Portfolio Built with Next.js and Tailwind CSS

#### Video Demo: [Dev Portfolio](https://youtu.be/6BwMD2iDJpY)

#### Description:

This is my CS50 Final Project: a **developer portfolio** built using **Next.js** and styled with **Tailwind CSS**. The portfolio is designed to showcase my skills, projects, services, and testimonials from people I’ve worked with. It features a modern, responsive design with smooth animations powered by **Framer Motion**. Below, I’ll provide a detailed explanation of the project, including its structure, design choices, and how to run it locally.

---

## **Project Overview**

This portfolio serves as a comprehensive showcase of my work as a developer. It includes the following key sections:

1. **Navbar**: A responsive navigation bar that allows users to easily navigate between sections of the website.
2. **Hero Section**: A visually appealing introduction that highlights my expertise and provides a call-to-action.
3. **Projects Section**: A dynamic section that showcases my projects with details like project name, description, and technologies used.
4. **Services and Skills Section**: A detailed breakdown of the services I offer and the skills I possess.
5. **Testimonials Section**: Quotes and feedback from people I’ve worked with, adding credibility to my work.
6. **Footer**: A clean and informative footer with links to my social media profiles and contact information.

The portfolio is built with **Next.js**, a powerful React framework that enables server-side rendering, static site generation, and excellent performance. I chose Next.js for its scalability, ease of use, and ability to handle dynamic content seamlessly.

---

## **Technologies Used**

- **Next.js**: For building the website and handling routing.
- **Tailwind CSS**: For styling the website with a utility-first approach.
- **Framer Motion**: For adding smooth animations and transitions.
- **Lucide React**: For using scalable and customizable icons throughout the website.
- **TypeScript**: For type safety and better developer experience.

---

## **Folder Structure**

The project is organized into the following folders for better maintainability and scalability:

<pre>
src
  ├───app
  │   └───projects
  ├───app-data
  ├───assets
  │   └───icons
  ├───components
  │   ├───footer
  │   ├───header
  │   ├───hero
  │   ├───projects
  │   ├───services
  │   ├───testimonials
  │   └───ui
  ├───fonts
  ├───hooks
  ├───services
  ├───types
  └───utils
</pre>

---

## **Design Choices**

### **Responsiveness**

The portfolio is designed to be fully responsive, ensuring it looks great on all devices, from desktops to mobile phones. I used **Tailwind CSS** to create a mobile-first design, leveraging its utility classes for responsive layouts, grids, and flexbox. Media queries were used sparingly, as Tailwind’s built-in responsive classes handled most of the work.

### **Scalability**

The project is structured in a way that makes it easy to scale. For example:

- The **`/app-data`** folder contains files for projects, services, and skills, making it easy to add or update content without modifying the code.
- Reusable components like **`ProjectCard`** and **`TestimonialCard`** ensure consistency and reduce code duplication.
- The use of **Next.js** ensures the website can handle increased traffic and content without compromising performance.

### **Animations**

To enhance the user experience, I used **Framer Motion** to add smooth animations and transitions. For example:

- The hero section features a fade-in animation when the page loads.
- Project cards have hover effects and subtle animations to draw attention.
- When scrolling down it's have smooth and visually appealing transition between sections.

### **Icons**

I used the **Lucide React** library for icons throughout the website. Lucide provides a wide range of scalable and customizable icons, ensuring a consistent and professional look.

---

## **Pages and Routes**

The portfolio has two main routes:

1. **Root Route (`/`)**: The homepage, which includes the hero section, services and skills section, testimonials section, and footer.
2. **Projects Route (`/projects`)**: A dedicated page that lists all my projects with details like project name, description, technologies used, and links to live demos or repositories.

---

## **Key Features**

### **Dynamic Content**

- The **Projects Section** and **Skills Section** are powered by data from files stored in the **`/app-data`** folder. This makes it easy to update content without modifying the code.
- The **Projects Page** dynamically generates project cards based on the data provided.

### **Reusable Components**

- **Navbar**: A responsive navigation bar that collapses into a hamburger menu on smaller screens.
- **Footer**: A consistent footer with links to my social media profiles and contact information.
- **ProjectCard**: A reusable component for displaying project details.
- **TestimonialCard**: A reusable component for displaying testimonials.

### **Animations and Transitions**

- **Framer Motion** is used to add subtle animations to various elements, enhancing the user experience.

---

## Challenges Faced

- **Learning Curve:** As this was my first time using Framer Motion, I spent time understanding their documentation and best practices.

- **Responsive Design:** Ensuring the portfolio looked great on all screen sizes required careful testing and adjustments.

- **Animations:** Implementing smooth animations with Framer Motion required experimentation and fine-tuning.

## Future Improvements

- **Blog Section:** Add a blog section where I can share insights, tutorials, and updates.

- **Themes:** Implement several themes for better accessibility.

## Conclusion

This portfolio project represents my journey as a developer and showcases my ability to build modern, responsive, and scalable web applications. I’m proud of the design choices I made and the technologies I used to bring this project to life.
