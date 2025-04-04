<script setup lang="ts">
import { MailPlus, MessageCircleMore } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <div class="container mx-auto p-4 max-w-full sm:max-w-md md:max-w-lg lg:max-w-3xl xl:max-w-5xl">
    <div class="prose max-w-none lg:prose-xl">
      <div class="flex items-center">
        <h1 class="text-4xl font-bold mb-2 mr-4 hidden sm:block">{{ t("contact.contact-title") }}</h1>
        <h1 class="text-2xl font-bold mb-2 mr-4 sm:hidden">{{ t("contact.contact-title-mobile") }}</h1>
        <div class="space-x-2 flex sm:block">
          <a
            href="mailto:brunosilvinosilva@gmail.com?subject=Bruno Silva: Portfolio inquery"
            class="btn btn-primary btn-sm"
          >
            <span class="hidden sm:block">{{ t("contact.email") }}</span>
            <MailPlus :size="16" />
          </a>
          <a
            href="https://wa.me/447792951314?text=Hi%20Bruno,%20I%20would%20like%20to%20message%20you."
            target="_blank"
            class="btn btn-secondary btn-sm"
          >
          <span class="hidden sm:block">{{ t("contact.phone") }}</span>
            <MessageCircleMore :size="16" />
          </a>
        </div>
      </div>

      <p class="mb-4 mt-3 md:mt-0">
        {{ t("contact.instruction") }}
      </p>

      <h2 class="text-2xl font-semibold mb-2">{{ t("contact.step-1") }}</h2>
      <p class="mb-2">
        {{ t("contact.step-1-instruction") }}:
      </p>
      <div class="tabs tabs-lift tabs-sm sm:tabs-md w-full mb-2">
        <!-- NPM Tab (default checked) -->
        <input
          type="radio"
          name="install[packagemanager]"
          class="tab checked:text-neutral-content! text-neutral [--tab-bg:var(--color-neutral)] [--tab-border-color:var(--color-neutral)]"
          aria-label="NPM"
          checked
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
        <div class="bg-neutral text-neutral-content tab-content relative p-4 text-left shadow-lg overflow-w-x-hidden overflow-x-auto">
          <pre data-prefix="$"><code>deno install -A -n contact-bruno https://deno.land/x/contact-bruno</code></pre>
        </div>
      </div>

      <div class="divider divider-primary" />
      <h2 class="text-2xl font-semibold mb-2">{{ t("contact.step-2") }}</h2>
      <p class="mb-2">
        {{ t("contact.step-2-instruction") }}:
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

      <div class="divider divider-primary" />
      <h2 class="text-2xl font-semibold mb-2">{{ t("contact.step-3") }}</h2>
      <p class="mb-2">
        {{ t("contact.step-3-instruction") }}:
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