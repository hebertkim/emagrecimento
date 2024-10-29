<template>
  <div>
    <HeroSection />
    <FeaturesSection />
    <TestimonialsSection />
    <CallToAction />
    <Footer />
  </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue';
import FeaturesSection from './components/FeaturesSection.vue';
import TestimonialsSection from './components/TestimonialsSection.vue';
import CallToAction from './components/CallToAction.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    HeroSection,
    FeaturesSection,
    TestimonialsSection,
    CallToAction,
    Footer,
  },
};
</script>

<style>
/* Estilos globais, se necessário */
</style>
