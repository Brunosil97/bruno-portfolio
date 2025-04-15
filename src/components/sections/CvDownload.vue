<script setup lang="ts">
import { computed } from 'vue';
import { Download, Info } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';

const pdfUrl = "/pdf/cv_bruno_silva.pdf";

const { t } = useI18n();
// Dynamically get the DaisyUI info colour (from the CSS variable --color-info)
const infoColour = computed(() => {
  return getComputedStyle(document.documentElement)
    .getPropertyValue('--color-info')
    .trim() || "#0f172a"; // Fallback color if not set
});

/**
 * Download the PDF file
 */
const downloadPDF = () => {
  // Create an invisible link element, set its href and download attribute, then click it.
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'cv_bruno_silva.pdf';

  link.click();
};
</script>

<template>
  <div class="mockup-browser border border-base-300 w-full">
  <div class="mockup-browser-toolbar">
    <div class="input">https://brunosilvinosilva.co.uk</div>
  </div>
  <div class="grid h-200 hidden sm:block">
    <embed
      :src="`${pdfUrl}#navpanes=0`"
      type="application/pdf"
      width="100%"
      height="100%"
    />
  </div>

  <div role="alert" class="block sm:hidden alert alert-vertical sm:alert-horizontal">
  <Info :size="24" :color="infoColour" class="mb-2" />
  <span class="mt-3">{{ t("domain.pdf-not-supported") }}</span>
  <div>
    <button class="btn btn-sm btn-primary mt-6" @click="downloadPDF">
      {{ t("common.download") }}
      <Download :size="16" />
    </button>
  </div>
</div>
</div>
</template>