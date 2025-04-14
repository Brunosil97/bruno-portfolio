import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue';
import DocsPage from '../views/DocsPage.vue';
import AboutMe from '../components/sections/AboutMe.vue';
import ContactDetails from '../components/sections/ContactDetails.vue';
import WorkExperience from '../components/sections/WorkExperience.vue';
import CareerSkills from '../components/sections/CareerSkills.vue';
import ProjectsDisplay from '../components/sections/ProjectsDisplay.vue';
import BlogPosts from '../components/sections/BlogPosts.vue';
import CvDownload from '../components/sections/CvDownload.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(_to, _from, _savedPosition) {
    return { left: 0, top: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingPage,
    },
    {
      path: '/docs',
      name: 'documentation',
      component: DocsPage,
      children: [
        { path: 'about', name: 'AboutMe', component: AboutMe },
        { path: 'contact', name: 'Contact', component: ContactDetails },
        { path: 'work', name: 'WorkExperience', component: WorkExperience },
        { path: 'skills', name: 'Skills', component: CareerSkills },
        { path: 'projects', name: 'Projects', component: ProjectsDisplay },
        { path: 'blogs', name: 'Blogs', component: BlogPosts },
        { path: 'cv', name: 'CV', component: CvDownload },
      ],
    },
  ],
})

export default router
