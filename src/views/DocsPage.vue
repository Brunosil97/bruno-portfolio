<template>
  <div class="flex h-full">
    <!-- Left-hand navigation panel styled with DaisyUI menu -->
    <aside class="w-64 bg-base-200 p-4">
      <ul class="menu bg-base-200 rounded-box w-56">
        <li>
          <h2 class="menu-title">Getting Started</h2>
          <ul>
            <li>
              <router-link to="/docs/about" exact-active-class="menu-active">
                About Me
              </router-link>
            </li>
            <li>
              <router-link to="/docs/contact" exact-active-class="menu-active">
                Contact
              </router-link>
            </li>
            <li>
              <router-link to="/docs/work" exact-active-class="menu-active">
                Work Experience
              </router-link>
            </li>
            <li>
              <router-link to="/docs/skills" exact-active-class="menu-active">
                Skills
              </router-link>
            </li>
            <li>
              <router-link to="/docs/projects" exact-active-class="menu-active">
                Projects
              </router-link>
            </li>
            <li>
              <router-link to="/docs/blogs" exact-active-class="menu-active">
                Blogs
              </router-link>
            </li>
            <li>
              <router-link to="/docs/faqs" exact-active-class="menu-active">
                FAQs
              </router-link>
            </li>
            <li>
              <router-link to="/docs/cv" exact-active-class="menu-active">
                CV
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
    <!-- Main Content Area: Child routes render here -->
    <main class="flex-1 p-4">
      <router-view />
    </main>

    <aside><ul class="menu bg-base-200 rounded-box w-56"></ul></aside>
  </div>
</template>