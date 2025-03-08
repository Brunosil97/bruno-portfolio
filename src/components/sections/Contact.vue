<template>
  <div class="container mx-auto p-4">
    <div class="prose lg:prose-xl">
      <div class="flex items-center">
        <h1 class="text-4xl font-bold mb-2 mr-4">Installation Guide: Contact Bruno Silva</h1>
        <div class="space-x-2">
          <a 
            href="mailto:brunosilvinosilva@gmail.com?subject=Bruno Silva: Portfolio inquery"
            class="btn btn-primary"
          >
            Email Me
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-plus"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="M19 16v6"/><path d="M16 19h6"/></svg>
          </a>
          <a 
            href="https://wa.me/447792951314?text=Hi%20Bruno,%20I%20would%20like%20to%20message%20you."
            target="_blank"
            class="btn btn-secondary"
          >
            Message Me
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-more"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/></svg>
          </a>
        </div>
      </div>
      
      <p class="mb-4">
        Follow these steps to properly "install" my contact details into your project.
      </p>

      <h2 class="text-2xl font-semibold mb-2">Step 1: Install the Contact Module</h2>
      <p class="mb-2">
        Choose your package manager to install:
      </p>
      <div class="tabs tabs-lift tabs-sm sm:tabs-md w-full mb-2">
        <!-- NPM Tab (default checked) -->
        <input 
          type="radio" 
          name="install[packagemanager]" 
          class="tab checked:text-neutral-content! text-neutral [--tab-bg:var(--color-neutral)] [--tab-border-color:var(--color-neutral)]" 
          aria-label="NPM" 
          checked="checked"
        />
        <div class="bg-neutral text-neutral-content tab-content relative p-4 text-left shadow-lg">
          <pre data-prefix="$"><code>npm install contact-bruno</code></pre>
        </div>

        <!-- PNPM Tab -->
        <input 
          type="radio" 
          name="install[packagemanager]" 
          class="tab checked:text-neutral-content! text-neutral [--tab-bg:var(--color-neutral)] [--tab-border-color:var(--color-neutral)]" 
          aria-label="PNPM"
        />
        <div class="bg-neutral text-neutral-content tab-content relative p-4 text-left shadow-lg">
          <pre data-prefix="$"><code>pnpm add contact-bruno</code></pre>
        </div>

        <!-- Yarn Tab -->
        <input 
          type="radio" 
          name="install[packagemanager]" 
          class="tab checked:text-neutral-content! text-neutral [--tab-bg:var(--color-neutral)] [--tab-border-color:var(--color-neutral)]" 
          aria-label="Yarn"
        />
        <div class="bg-neutral text-neutral-content tab-content relative p-4 text-left shadow-lg">
          <pre data-prefix="$"><code>yarn add contact-bruno</code></pre>
        </div>

        <!-- Bun Tab -->
        <input 
          type="radio" 
          name="install[packagemanager]" 
          class="tab checked:text-neutral-content! text-neutral [--tab-bg:var(--color-neutral)] [--tab-border-color:var(--color-neutral)]" 
          aria-label="Bun"
        />
        <div class="bg-neutral text-neutral-content tab-content relative p-4 text-left shadow-lg">
          <pre data-prefix="$"><code>bun add contact-bruno</code></pre>
        </div>

        <!-- Deno Tab -->
        <input 
          type="radio" 
          name="install[packagemanager]" 
          class="tab checked:text-neutral-content! text-neutral [--tab-bg:var(--color-neutral)] [--tab-border-color:var(--color-neutral)]" 
          aria-label="Deno"
        />
        <div class="bg-neutral text-neutral-content tab-content relative p-4 text-left shadow-lg">
          <pre data-prefix="$"><code>deno install -A -n contact-bruno https://deno.land/x/contact-bruno</code></pre>
        </div>
      </div>

      <h2 class="text-2xl font-semibold mb-2">Step 2: Configure Your Environment</h2>
      <p class="mb-2">
        Create a configuration file with the following details:
      </p>
      <pre class="mockup-code mb-4">
      <code>
      {
        "name": "Bruno Silva",
        "address": "Leyton, London",
        "phone": "07792951314",
        "email": "brunosilvinosilva@gmail.com",
        "linkedin": "https://www.linkedin.com/in/bruno-silvino-silva/",
        "website": "https://brunosilvinosilva.medium.com/",
        "github": "https://github.com/Brunosil97"
      }
      </code>
      </pre>

      <h2 class="text-2xl font-semibold mb-2">Step 3: Import and Initialise</h2>
      <p class="mb-2">
        Import and initialise the module in your project:
      </p>
      <pre class="mockup-code mb-4">
      <code>
      import ContactBruno from 'contact-bruno';

      ContactBruno.init({
        email: "brunosilvinosilva@gmail.com",
        phone: "07792951314"
      });
      </code>
      </pre>
    </div>
  </div>
</template>