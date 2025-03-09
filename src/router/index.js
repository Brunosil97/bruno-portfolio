import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import DocsPage from '../views/DocsPage.vue';
import AboutMe from '../components/sections/AboutMe.vue';
import Contact from '../components/sections/Contact.vue';
import WorkExperience from '../components/sections/WorkExperience.vue';
import Skills from '../components/sections/Skills.vue';
import Projects from '../components/sections/Projects.vue';
import Blogs from '../components/sections/Blogs.vue';
import FAQs from '../components/sections/FAQs.vue';
import CV from '../components/sections/CV.vue';
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
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
                { path: 'contact', name: 'Contact', component: Contact },
                { path: 'work', name: 'WorkExperience', component: WorkExperience },
                { path: 'skills', name: 'Skills', component: Skills },
                { path: 'projects', name: 'Projects', component: Projects },
                { path: 'blogs', name: 'Blogs', component: Blogs },
                { path: 'faqs', name: 'FAQs', component: FAQs },
                { path: 'cv', name: 'CV', component: CV },
            ],
        },
    ],
});
export default router;
