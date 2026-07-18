<template>
  <div class="min-h-screen bg-[var(--color-background)] font-sans antialiased">
    <!-- ========== HEADER ========== -->
    <header class="sticky top-0 z-50 bg-[var(--color-surface)] shadow-md transition-shadow">
      <div class="container mx-auto flex items-center justify-between px-4 py-2 md:py-3">
        <!-- Logo + nombre -->
        <div class="flex items-center gap-2 md:gap-3">
          <img src="/logo.png" alt="FIRSTLINE ELECTRIC & ENERGY" class="h-10 w-auto md:h-12" />
          <span class="text-base font-bold text-[var(--color-primary)] md:text-xl">
            FIRSTLINE <span class="text-[var(--color-secondary)]">ELECTRIC</span> & ENERGY
          </span>
        </div>

        <!-- Navegación centrada (escritorio) -->
        <nav class="hidden flex-1 items-center justify-center space-x-8 text-sm font-medium md:flex">
          <a href="#home" @click.prevent="scrollTo('home')"
             class="text-[var(--color-text-secondary)] transition hover:text-[var(--color-primary)]"
             :class="{ 'active': activeSection === 'home' }">{{ t.nav.home }}</a>
          <a href="#services" @click.prevent="scrollTo('services')"
             class="text-[var(--color-text-secondary)] transition hover:text-[var(--color-primary)]"
             :class="{ 'active': activeSection === 'services' }">{{ t.nav.services }}</a>
          <a href="#why" @click.prevent="scrollTo('why')"
             class="text-[var(--color-text-secondary)] transition hover:text-[var(--color-primary)]"
             :class="{ 'active': activeSection === 'why' }">{{ t.nav.why }}</a>
          <a href="#work" @click.prevent="scrollTo('work')"
             class="text-[var(--color-text-secondary)] transition hover:text-[var(--color-primary)]"
             :class="{ 'active': activeSection === 'work' }">{{ t.nav.work }}</a>
          <a href="#map" @click.prevent="scrollTo('map')"
             class="text-[var(--color-text-secondary)] transition hover:text-[var(--color-primary)]"
             :class="{ 'active': activeSection === 'map' }">{{ t.nav.map }}</a>
          <a href="#contact" @click.prevent="scrollTo('contact')"
             class="text-[var(--color-text-secondary)] transition hover:text-[var(--color-primary)]"
             :class="{ 'active': activeSection === 'contact' }">{{ t.nav.contact }}</a>
        </nav>

        <!-- Botones de acción (escritorio) -->
        <div class="hidden items-center gap-3 md:flex">
          <a href="tel:+13057839498"
            class="flex items-center gap-1 rounded-full bg-[var(--color-secondary)] px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-dark)]">
            <PhoneIcon class="h-4 w-4" />
            <span>Call</span>
          </a>
          <div class="flex items-center gap-1 rounded-full bg-[var(--color-surface-alt)] p-1">
            <button @click="setLanguage('en')"
              class="flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold transition"
              :class="locale === 'en' ? 'bg-[var(--color-primary)] text-white' : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-border)]'">
              <img src="/eglich.png" alt="English" class="h-3.5 w-3.5 rounded-full object-cover" />
              EN
            </button>
            <button @click="setLanguage('es')"
              class="flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold transition"
              :class="locale === 'es' ? 'bg-[var(--color-primary)] text-white' : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-border)]'">
              <img src="/spanich.png" alt="Español" class="h-3.5 w-3.5 rounded-full object-cover" />
              ES
            </button>
          </div>
        </div>

        <!-- Botón menú móvil -->
        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden" aria-label="Menu">
          <Bars3Icon v-if="!isMenuOpen" class="h-7 w-7 text-[var(--color-primary)]" />
          <XMarkIcon v-else class="h-7 w-7 text-[var(--color-primary)]" />
        </button>
      </div>

      <!-- Menú móvil (desplegable) -->
      <div v-if="isMenuOpen"
        class="border-t border-[var(--color-divider)] bg-[var(--color-surface)] px-4 py-4 shadow-lg md:hidden">
        <nav class="flex flex-col space-y-3 text-sm font-medium">
          <a href="#home" @click.prevent="scrollTo('home'); isMenuOpen = false"
             class="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
             :class="{ 'active': activeSection === 'home' }">{{ t.nav.home }}</a>
          <a href="#services" @click.prevent="scrollTo('services'); isMenuOpen = false"
             class="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
             :class="{ 'active': activeSection === 'services' }">{{ t.nav.services }}</a>
          <a href="#why" @click.prevent="scrollTo('why'); isMenuOpen = false"
             class="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
             :class="{ 'active': activeSection === 'why' }">{{ t.nav.why }}</a>
          <a href="#work" @click.prevent="scrollTo('work'); isMenuOpen = false"
             class="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
             :class="{ 'active': activeSection === 'work' }">{{ t.nav.work }}</a>
          <a href="#map" @click.prevent="scrollTo('map'); isMenuOpen = false"
             class="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
             :class="{ 'active': activeSection === 'map' }">{{ t.nav.map }}</a>
          <a href="#contact" @click.prevent="scrollTo('contact'); isMenuOpen = false"
             class="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
             :class="{ 'active': activeSection === 'contact' }">{{ t.nav.contact }}</a>
          <div class="flex items-center gap-3 pt-2">
            <a href="tel:+13057839498"
              class="flex items-center gap-1 rounded-full bg-[var(--color-secondary)] px-3 py-1.5 text-sm font-semibold text-white">
              <PhoneIcon class="h-4 w-4" />
              {{ t.nav.call }}
            </a>
            <div class="flex items-center gap-1 rounded-full bg-[var(--color-surface-alt)] p-1">
              <button @click="setLanguage('en')"
                class="flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold transition"
                :class="locale === 'en' ? 'bg-[var(--color-primary)] text-white' : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-border)]'">
                <img src="/eglich.png" alt="English" class="h-3.5 w-3.5 rounded-full object-cover" />
                EN
              </button>
              <button @click="setLanguage('es')"
                class="flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold transition"
                :class="locale === 'es' ? 'bg-[var(--color-primary)] text-white' : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-border)]'">
                <img src="/spanich.png" alt="Español" class="h-3.5 w-3.5 rounded-full object-cover" />
                ES
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <!-- ========== HOME (HERO) ========== -->
    <section id="home" class="relative flex min-h-[80vh] items-center overflow-hidden bg-cover bg-center"
      style="background-image: url('/1.jpeg');">
      <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      <div class="container relative mx-auto px-4 text-center text-white">
        <div class="mx-auto max-w-4xl animate-fade-up">
          <img src="/logo.png" alt="FIRSTLINE ELECTRIC & ENERGY" class="mx-auto h-28 w-auto md:h-40 lg:h-48" />
          <h1 class="mt-4 text-3xl font-extrabold md:text-5xl lg:text-6xl">
            FIRSTLINE<br class="hidden md:block" />
            <span class="text-[var(--color-secondary-light)]">ELECTRIC & ENERGY</span>
          </h1>
          <p class="mt-4 text-lg text-white/80 md:text-xl">{{ t.hero.subtitle }}</p>
          <div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="tel:+13057839498"
              class="flex items-center gap-2 rounded-full bg-[var(--color-secondary)] px-8 py-3 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-[var(--color-accent-dark)]">
              <PhoneIcon class="h-5 w-5" />
              {{ t.hero.callBtn }}
            </a>
            <a href="https://wa.me/13057839498" target="_blank"
              class="flex items-center gap-2 rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10">
              <ChatBubbleLeftRightIcon class="h-5 w-5" />
              {{ t.hero.whatsappBtn }}
            </a>
          </div>
          <div class="mt-10 flex flex-wrap justify-center gap-6 text-sm">
            <span class="flex items-center gap-2"><span class="text-[var(--color-secondary-light)]">✓</span> {{ t.hero.badge1 }}</span>
            <span class="flex items-center gap-2"><span class="text-[var(--color-secondary-light)]">✓</span> {{ t.hero.badge2 }}</span>
            <span class="flex items-center gap-2"><span class="text-[var(--color-secondary-light)]">✓</span> {{ t.hero.badge3 }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== SERVICES (fondo claro) ========== -->
    <section id="services" class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="mb-12 text-center" data-aos="fade-up">
          <span
            class="inline-block rounded-full bg-[var(--color-primary)]/10 px-4 py-1 text-sm font-semibold text-[var(--color-primary)]">
            {{ t.services.tag }}
          </span>
          <h2 class="mt-2 text-3xl font-bold text-[var(--color-text-primary)] md:text-4xl">{{ t.services.title }}</h2>
          <p class="mx-auto mt-3 max-w-2xl text-[var(--color-text-secondary)]">{{ t.services.subtitle }}</p>
        </div>

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="(service, index) in servicesList" :key="index"
            class="service-card relative h-72 overflow-hidden rounded-2xl bg-cover bg-center shadow-lg transition-all duration-300 hover:shadow-2xl cursor-pointer"
            :style="{ backgroundImage: `url(${service.backgroundImage})` }"
            @click="toggleService(index)"
            @mouseenter="hoveredIndex = index"
            @mouseleave="hoveredIndex = null">
            <div class="absolute inset-0 bg-black/50 transition-opacity duration-300"
              :class="{ 'bg-black/30': isActive(index) || hoveredIndex === index }"></div>
            <div
              class="absolute inset-0 flex flex-col items-center justify-center p-4 text-white transition-all duration-500"
              :class="{ 'transform -translate-y-8': isActive(index) || hoveredIndex === index }">
              <div class="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
                <img :src="service.icon" class="h-10 w-10 object-contain" alt="Icono servicio" />
              </div>
              <h3 class="text-xl font-bold text-center md:text-2xl">{{ service.title }}</h3>
            </div>
            <div class="absolute inset-x-0 bottom-0 p-4 transition-all duration-500" :class="{
              'opacity-0 translate-y-6 pointer-events-none': !isActive(index) && hoveredIndex !== index,
              'opacity-100 translate-y-0 pointer-events-auto': isActive(index) || hoveredIndex === index
            }">
              <p class="text-center text-sm font-medium text-white drop-shadow-lg md:text-base whitespace-pre-line">
                {{ service.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== WHY CHOOSE US (fondo primario) ========== -->
    <section id="why" class="py-16 md:py-24" style="background-color: var(--color-primary);">
      <div class="container mx-auto px-4">
        <div class="mb-12 text-center" data-aos="fade-up">
          <span class="inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-semibold text-white">
            {{ t.why.tag }}
          </span>
          <h2 class="mt-2 text-3xl font-bold text-white md:text-4xl">{{ t.why.title }}</h2>
          <p class="mx-auto mt-3 max-w-2xl text-white/80">{{ t.why.subtitle }}</p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div v-for="(step, idx) in whySteps" :key="idx"
            class="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-lg" data-aos="fade-up"
            :data-aos-delay="idx * 100">
            <div
              class="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
              <component :is="step.icon" class="h-7 w-7" />
            </div>
            <h3 class="text-xl font-bold text-[var(--color-text-primary)]">{{ step.title }}</h3>
            <p class="mt-2 text-sm text-[var(--color-text-secondary)]">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== NUESTRO TRABAJO (fondo claro) ========== -->
    <section id="work" class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="mb-12 text-center" data-aos="fade-up">
          <span
            class="inline-block rounded-full bg-[var(--color-primary)]/10 px-4 py-1 text-sm font-semibold text-[var(--color-primary)]">
            {{ t.work.tag }}
          </span>
          <h2 class="mt-2 text-3xl font-bold text-[var(--color-text-primary)] md:text-4xl">{{ t.work.title }}</h2>
          <p class="mx-auto mt-3 max-w-2xl text-[var(--color-text-secondary)]">{{ t.work.subtitle }}</p>
        </div>

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="(item, idx) in workItems" :key="idx" class="group relative overflow-hidden rounded-2xl shadow-lg"
            data-aos="fade-up" :data-aos-delay="idx * 80">
            <img :src="item.image" alt="Trabajo"
              class="h-64 w-full object-cover transition duration-300 group-hover:scale-105" />
            <div
              class="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p class="text-lg font-semibold text-white">{{ item.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== MAPA DE SERVICIO (fondo claro) ========== -->
    <section id="map" class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="mb-12 text-center" data-aos="fade-up">
          <span
            class="inline-block rounded-full bg-[var(--color-primary)]/10 px-4 py-1 text-sm font-semibold text-[var(--color-primary)]">
            {{ t.map.tag }}
          </span>
          <h2 class="mt-2 text-3xl font-bold text-[var(--color-text-primary)] md:text-4xl">{{ t.map.title }}</h2>
          <p class="mx-auto mt-3 max-w-2xl text-[var(--color-text-secondary)]">{{ t.map.subtitle }}</p>
        </div>

        <div class="overflow-hidden rounded-2xl shadow-lg" data-aos="fade-up">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227532.3399343094!2d-82.6310066!3d27.4681163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c34b46e80953b5%3A0x4a6b4d3c4b8b0a0a!2sManatee%20County%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Service area map"
            class="w-full">
          </iframe>
        </div>
        <div class="mt-6 text-center text-[var(--color-text-secondary)]" data-aos="fade-up">
          <p class="text-sm">{{ t.map.areas }}</p>
        </div>
      </div>
    </section>

    <!-- ========== CONTACTO (fondo primario) ========== -->
    <section id="contact" class="py-16 md:py-24" style="background-color: var(--color-primary);">
      <div class="container mx-auto px-4">
        <div class="grid gap-12 md:grid-cols-2">
          <div data-aos="fade-right">
            <span class="inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-semibold text-white">
              {{ t.contact.tag }}
            </span>
            <h2 class="mt-2 text-3xl font-bold text-white md:text-4xl">
              {{ t.contact.title }}
            </h2>
            <p class="mt-4 text-white/80">
              {{ t.contact.subtitle }}
            </p>

            <div class="mt-8 space-y-6">
              <div class="flex items-center gap-4">
                <span class="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-2xl text-white">
                  <PhoneIcon class="h-6 w-6" />
                </span>
                <div>
                  <p class="text-sm font-semibold text-white/70">{{ t.contact.phoneLabel }}</p>
                  <a href="tel:+13057839498" class="text-xl font-bold text-white hover:underline">
                    +1 (305) 783-9498
                  </a>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <span class="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-2xl text-white">
                  <EnvelopeIcon class="h-6 w-6" />
                </span>
                <div>
                  <p class="text-sm font-semibold text-white/70">{{ t.contact.emailLabel }}</p>
                  <a href="mailto:sales@flelectricenergy.com" class="text-lg font-bold text-white hover:underline">
                    sales@flelectricenergy.com
                  </a>
                </div>
              </div>
              <div>
                <p class="mb-2 text-sm font-semibold text-white/70">{{ t.contact.socialLabel }}</p>
                <div class="flex gap-4">
                  <a href="#" target="_blank"
                    class="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white hover:text-[var(--color-primary)]">
                    <InstagramIcon class="h-5 w-5" />
                  </a>
                  <a href="#" target="_blank"
                    class="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white hover:text-[var(--color-primary)]">
                    <FacebookIcon class="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <div class="mt-8 flex flex-wrap gap-4">
              <a href="tel:+13057839498"
                class="inline-flex items-center gap-2 rounded-full bg-[var(--color-secondary)] px-6 py-3 font-bold text-white transition hover:bg-[var(--color-accent-dark)] hover:scale-105">
                <PhoneIcon class="h-5 w-5" />
                {{ t.contact.callBtn }}
              </a>
              <a href="https://wa.me/13057839498" target="_blank"
                class="inline-flex items-center gap-2 rounded-full border border-white px-6 py-3 font-bold text-white transition hover:bg-white hover:text-[var(--color-primary)]">
                <ChatBubbleLeftRightIcon class="h-5 w-5" />
                {{ t.contact.whatsappBtn }}
              </a>
            </div>
          </div>

          <div class="rounded-2xl bg-[var(--color-surface)] p-6 shadow-lg md:p-8" data-aos="fade-left">
            <h3 class="mb-4 text-2xl font-bold text-[var(--color-text-primary)]">{{ t.contact.formTitle }}</h3>
            <form @submit.prevent="sendWhatsApp">
              <div class="mb-4">
                <label class="mb-1 block text-sm font-medium text-[var(--color-text-secondary)]">{{ t.contact.formName }}</label>
                <input v-model="form.name" type="text" required
                  class="w-full rounded-lg border border-[var(--color-border)] px-4 py-2 focus:border-[var(--color-primary)] focus:outline-none" />
              </div>
              <div class="mb-4">
                <label class="mb-1 block text-sm font-medium text-[var(--color-text-secondary)]">{{ t.contact.formLocation }}</label>
                <div class="flex flex-col gap-2">
                  <input v-model="form.location" type="text" placeholder="Type your address or use geolocation"
                    class="w-full rounded-lg border border-[var(--color-border)] px-4 py-2 focus:border-[var(--color-primary)] focus:outline-none" />
                  <button type="button" @click="getLocation"
                    class="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--color-primary)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[var(--color-primary)] hover:text-white">
                    <MapPinIcon class="h-4 w-4" />
                    {{ t.contact.getLocation }}
                  </button>
                  <p v-if="locationStatus" class="text-xs text-[var(--color-text-secondary)]">{{ locationStatus }}</p>
                </div>
              </div>
              <button type="submit"
                class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] py-3 font-bold text-white transition hover:bg-[var(--color-primary-dark)] hover:scale-105">
                <ChatBubbleLeftRightIcon class="h-5 w-5" />
                {{ t.contact.formSubmit }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== FOOTER ========== -->
    <footer class="bg-[var(--color-primary-dark)] py-8 text-center text-sm text-[var(--color-text-light)]">
      <div class="container mx-auto px-4">
        <p>&copy; {{ new Date().getFullYear() }} FIRSTLINE ELECTRIC & ENERGY. {{ t.footer.rights }}</p>
        <p class="mt-1">{{ t.footer.license }}</p>
        <div class="mt-4 flex justify-center gap-4">
          <a href="#" class="text-white/60 hover:text-white">
            <InstagramIcon class="h-5 w-5" />
          </a>
          <a href="#" class="text-white/60 hover:text-white">
            <FacebookIcon class="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import {
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  MapPinIcon,
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  DocumentTextIcon,
  WrenchScrewdriverIcon,
  LifebuoyIcon,
} from '@heroicons/vue/24/outline'
import { InstagramIcon, FacebookIcon } from 'vue3-simple-icons'

// ---------- IDIOMA ----------
const locale = ref('en')
const isMenuOpen = ref(false)
const activeSection = ref('home')

const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      why: 'Why Us',
      work: 'Our Work',
      map: 'Service Area',
      contact: 'Contact',
      call: 'Call'
    },
    hero: {
      subtitle: '24/7 professional electrical services in Manatee County – from new installations to emergency repairs.',
      callBtn: 'Call Now',
      whatsappBtn: 'WhatsApp',
      badge1: 'Licensed & Insured',
      badge2: '24/7 Emergency',
      badge3: 'Free Estimates'
    },
    services: {
      tag: 'What We Do',
      title: 'Full-Service Electrical',
      subtitle: 'From residential to commercial, we handle every project with precision and safety.'
    },
    why: {
      tag: 'Why Choose Us',
      title: 'Our Process',
      subtitle: 'We make it simple and reliable for you.'
    },
    work: {
      tag: 'Portfolio',
      title: 'Our Recent Projects',
      subtitle: 'Take a look at some of the quality work we have done for our customers.'
    },
    map: {
      tag: 'Service Area',
      title: 'Where We Work',
      subtitle: 'We proudly serve the following areas in Manatee County and beyond.',
      areas: '📍 Bradenton, Palmetto, Lakewood Ranch, Sarasota, Anna Maria Island & surrounding areas'
    },
    contact: {
      tag: 'Get in Touch',
      title: 'Ready to start your project?',
      subtitle: 'Contact us today for a free estimate and expert advice.',
      phoneLabel: 'Call us',
      emailLabel: 'Email us',
      socialLabel: 'Follow us',
      callBtn: 'Call Now',
      whatsappBtn: 'WhatsApp',
      formTitle: 'Send us a message',
      formName: 'Your name',
      formLocation: 'Your location',
      getLocation: 'Get my location',
      formSubmit: 'Send via WhatsApp',
      locationSuccess: 'Location obtained!',
      locationError: 'Unable to get location. Please enter manually.'
    },
    footer: {
      rights: 'All rights reserved.',
      license: 'Licensed & Insured Electrician in Manatee County, FL'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      why: 'Por qué',
      work: 'Nuestro Trabajo',
      map: 'Área de Servicio',
      contact: 'Contacto',
      call: 'Llamar'
    },
    hero: {
      subtitle: 'Servicios eléctricos profesionales 24/7 en el Condado de Manatee – desde instalaciones nuevas hasta reparaciones de emergencia.',
      callBtn: 'Llama Ahora',
      whatsappBtn: 'WhatsApp',
      badge1: 'Con Licencia y Seguro',
      badge2: 'Emergencias 24/7',
      badge3: 'Presupuestos Gratis'
    },
    services: {
      tag: 'Lo Que Hacemos',
      title: 'Electricidad Integral',
      subtitle: 'Desde residencial hasta comercial, manejamos cada proyecto con precisión y seguridad.'
    },
    why: {
      tag: '¿Por qué elegirnos?',
      title: 'Nuestro Proceso',
      subtitle: 'Lo hacemos simple y confiable para ti.'
    },
    work: {
      tag: 'Portafolio',
      title: 'Nuestros Proyectos Recientes',
      subtitle: 'Echa un vistazo a algunos de los trabajos de calidad que hemos realizado para nuestros clientes.'
    },
    map: {
      tag: 'Área de Servicio',
      title: 'Dónde Trabajamos',
      subtitle: 'Servimos con orgullo las siguientes áreas del Condado de Manatee y alrededores.',
      areas: '📍 Bradenton, Palmetto, Lakewood Ranch, Sarasota, Anna Maria Island y áreas circundantes'
    },
    contact: {
      tag: 'Contáctanos',
      title: '¿Listo para empezar tu proyecto?',
      subtitle: 'Contáctanos hoy para un presupuesto gratuito y asesoría experta.',
      phoneLabel: 'Llámanos',
      emailLabel: 'Escríbenos',
      socialLabel: 'Síguenos',
      callBtn: 'Llama Ahora',
      whatsappBtn: 'WhatsApp',
      formTitle: 'Envíanos un mensaje',
      formName: 'Tu nombre',
      formLocation: 'Tu ubicación',
      getLocation: 'Obtener mi ubicación',
      formSubmit: 'Enviar por WhatsApp',
      locationSuccess: '¡Ubicación obtenida!',
      locationError: 'No se pudo obtener la ubicación. Por favor, ingrésala manualmente.'
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      license: 'Electricista con Licencia y Seguro en el Condado de Manatee, FL'
    }
  }
}

const t = computed(() => translations[locale.value])

function setLanguage(lang) {
  locale.value = lang
}

// ---------- SCROLL SUAVE ----------
function scrollTo(sectionId) {
  activeSection.value = sectionId
  const el = document.getElementById(sectionId)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  if (isMenuOpen.value) isMenuOpen.value = false
}

// ---------- SERVICIOS: BASE DE DATOS COMPARTIDA (icon + background) ----------
const servicesBase = [
  { icon: '/taladro-de-mano.png', backgroundImage: '/services/1.jpeg' },
  { icon: '/piscina.png', backgroundImage: '/services/2.webp' },
  { icon: '/generador.png', backgroundImage: '/services/3.webp' },
  { icon: '/cable.png', backgroundImage: '/services/4.jpeg' },
  { icon: '/energia-renovable.png', backgroundImage: '/services/5.webp' },
  { icon: '/cable-roto.png', backgroundImage: '/services/6.webp' },
  { icon: '/planta-de-energia.png', backgroundImage: '/services/7.jpg' },
  { icon: '/idea.png', backgroundImage: '/services/8.jpg' },
  { icon: '/11498252.png', backgroundImage: '/services/9.webp' }
]

// Textos por idioma (9 elementos, mismo orden que la base)
const servicesTexts = {
  en: [
    { title: 'Complete Home Wiring', description: 'Full wiring for new homes, additions, and complete remodels.' },
    { title: 'Pool & Spa Electrical', description: 'Safe and code-compliant electrical for pools, spas, and fountains.' },
    { title: 'Generator Installation', description: 'Standby and portable generator hookups with transfer switches.' },
    { title: 'New Construction Wiring', description: 'Professional wiring for commercial and residential new builds.' },
    { title: 'Renovations & Upgrades', description: 'Update your electrical system to modern standards.' },
    { title: 'Repairs & Troubleshooting', description: 'Fast diagnostics and repairs for any electrical issue.' },
    { title: 'Backup Systems Integration', description: 'Seamless integration of battery and generator backup systems.' },
    { title: 'Indoor/Outdoor Lighting', description: 'Design and installation of energy-efficient lighting solutions.' },
    { title: 'Panel Upgrades & Service', description: 'Upgrade your electrical panel for more capacity and safety.' }
  ],
  es: [
    { title: 'Instalación Eléctrica Completa', description: 'Cableado completo para casas nuevas, ampliaciones y remodelaciones.' },
    { title: 'Electricidad para Piscinas y Spa', description: 'Electricidad segura y conforme a código para piscinas, spas y fuentes.' },
    { title: 'Instalación de Generadores', description: 'Conexión de generadores de respaldo y portátiles con interruptores de transferencia.' },
    { title: 'Cableado para Nueva Construcción', description: 'Cableado profesional para construcciones nuevas comerciales y residenciales.' },
    { title: 'Renovaciones y Mejoras', description: 'Actualiza tu sistema eléctrico a los estándares modernos.' },
    { title: 'Reparaciones y Diagnóstico', description: 'Diagnóstico y reparación rápida de cualquier problema eléctrico.' },
    { title: 'Integración de Sistemas de Respaldo', description: 'Integración perfecta de sistemas de respaldo con baterías y generadores.' },
    { title: 'Iluminación Interior y Exterior', description: 'Diseño e instalación de soluciones de iluminación eficientes.' },
    { title: 'Actualización de Tableros y Servicio', description: 'Actualiza tu tablero eléctrico para mayor capacidad y seguridad.' }
  ]
}

// Computed que fusiona la base con los textos del idioma actual
const servicesList = computed(() => {
  const texts = servicesTexts[locale.value]
  return servicesBase.map((base, index) => ({
    ...base,
    title: texts[index]?.title || `Servicio ${index + 1}`,
    description: texts[index]?.description || 'Descripción pendiente'
  }))
})

const activeService = ref(null)
const hoveredIndex = ref(null)

function toggleService(index) {
  activeService.value = activeService.value === index ? null : index
}

function isActive(index) {
  return activeService.value === index
}

// ---------- WHY STEPS CON ICONOS DE HEROICONS ----------
const whySteps = computed(() => {
  const steps = {
    en: [
      { 
        icon: MagnifyingGlassIcon, 
        title: 'Consultation', 
        desc: 'We start with a thorough assessment of your power requirements and site conditions.' 
      },
      { 
        icon: DocumentTextIcon, 
        title: 'Recommendation', 
        desc: 'Based on the assessment, we recommend the best generator options tailored to your needs.' 
      },
      { 
        icon: WrenchScrewdriverIcon, 
        title: 'Installation', 
        desc: 'Our skilled technicians perform the installation and ensure everything is set up correctly.' 
      },
      { 
        icon: LifebuoyIcon, 
        title: 'Support', 
        desc: 'Our team is always available for support, whether it\'s routine service or emergency repairs.' 
      }
    ],
    es: [
      { 
        icon: MagnifyingGlassIcon, 
        title: 'Consulta', 
        desc: 'Comenzamos con una evaluación exhaustiva de tus requisitos de energía y condiciones del sitio.' 
      },
      { 
        icon: DocumentTextIcon, 
        title: 'Recomendación', 
        desc: 'Basado en la evaluación, recomendamos las mejores opciones de generador adaptadas a tus necesidades.' 
      },
      { 
        icon: WrenchScrewdriverIcon, 
        title: 'Instalación', 
        desc: 'Nuestros técnicos capacitados realizan la instalación y aseguran que todo quede correctamente configurado.' 
      },
      { 
        icon: LifebuoyIcon, 
        title: 'Soporte', 
        desc: 'Nuestro equipo siempre está disponible para soporte, ya sea para servicio de rutina o reparaciones de emergencia.' 
      }
    ]
  }
  return steps[locale.value]
})

// ---------- WORK ITEMS CON IMÁGENES (actualizado) ----------
// Lista completa de imágenes de la carpeta /work (según el listado proporcionado)
const workImages = [
  '/work/10.jpeg',
  '/work/11.jpeg',
  '/work/12.jpeg',
  '/work/3.jpeg',
  '/work/3.jpg',
  '/work/4.jpg',
  '/work/4.jpeg',
  '/work/5.jpeg',
  '/work/6.jpeg',
  '/work/7.jpeg',
  '/work/8.jpeg',
  '/work/9.jpeg'
]

// Títulos para cada idioma (6 títulos, se repetirán cíclicamente)
const workTitles = {
  en: [
    'Residential Wiring',
    'Pool Installation',
    'Generator Setup',
    'Panel Upgrade',
    'Outdoor Lighting',
    'Commercial Project'
  ],
  es: [
    'Cableado Residencial',
    'Instalación de Piscina',
    'Montaje de Generador',
    'Actualización de Tablero',
    'Iluminación Exterior',
    'Proyecto Comercial'
  ]
}

// Construimos los items combinando imágenes y títulos (cíclicos)
const workItems = computed(() => {
  const titles = workTitles[locale.value]
  return workImages.map((image, index) => ({
    image,
    title: titles[index % titles.length]
  }))
})

// ---------- FORMULARIO CON GEOLOCALIZACIÓN ----------
const form = ref({
  name: '',
  location: ''
})
const locationStatus = ref('')

function getLocation() {
  if (!navigator.geolocation) {
    locationStatus.value = t.value.contact.locationError
    return
  }
  locationStatus.value = 'Obtaining location...'
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude } = pos.coords
      form.value.location = `${latitude},${longitude}`
      locationStatus.value = t.value.contact.locationSuccess
    },
    (err) => {
      console.error(err)
      locationStatus.value = t.value.contact.locationError
    },
    { enableHighAccuracy: true }
  )
}

function sendWhatsApp() {
  if (!form.value.name || !form.value.location) {
    alert('Please fill in all fields.')
    return
  }
  let locationMsg = form.value.location
  if (locationMsg.includes(',')) {
    const [lat, lng] = locationMsg.split(',').map(s => s.trim())
    if (!isNaN(lat) && !isNaN(lng)) {
      locationMsg = `https://www.google.com/maps?q=${lat},${lng}`
    }
  }
  const message = `Hello FIRSTLINE ELECTRIC & ENERGY,%0A%0AName: ${encodeURIComponent(form.value.name)}%0ALocation: ${encodeURIComponent(locationMsg)}%0A%0AI would like to request more information about your services.`
  const url = `https://wa.me/13057839498?text=${message}`
  window.open(url, '_blank')
}

// ---------- ANIMACIONES Y NAVEGACIÓN ACTIVA ----------
onMounted(() => {
  // Animaciones AOS
  if (typeof IntersectionObserver !== 'undefined') {
    const elements = document.querySelectorAll('[data-aos]')
    const observerAos = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target
          const delay = parseInt(el.getAttribute('data-aos-delay')) || 0
          setTimeout(() => {
            el.classList.add('aos-visible')
          }, delay)
          observerAos.unobserve(el)
        }
      })
    }, { threshold: 0.15 })

    elements.forEach(el => observerAos.observe(el))
  } else {
    document.querySelectorAll('[data-aos]').forEach(el => el.classList.add('aos-visible'))
  }

  // Detectar sección activa en scroll
  const sections = ['home', 'services', 'why', 'work', 'map', 'contact']
  const sectionElements = sections.map(id => document.getElementById(id)).filter(el => el)

  if (sectionElements.length > 0 && 'IntersectionObserver' in window) {
    const headerHeight = document.querySelector('header')?.offsetHeight || 80
    const observerActive = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id
          if (id) activeSection.value = id
        }
      })
    }, {
      threshold: 0.4,
      rootMargin: `-${headerHeight}px 0px 0px 0px`
    })

    sectionElements.forEach(el => observerActive.observe(el))
  }
})
</script>

<style scoped>
@import '@/assets/css/variables.css';

/* Animación de entrada del hero */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-up {
  animation: fadeUp 0.8s ease-out forwards;
}

/* Animaciones AOS */
[data-aos] {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
[data-aos].aos-visible {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

/* Efectos de tarjetas de servicios */
.service-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.service-card:hover {
  transform: translateY(-4px);
}

/* Estilos para navegación activa */
nav a.active {
  color: var(--color-primary);
  font-weight: 600;
  position: relative;
}

nav a.active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--color-secondary);
  border-radius: 2px;
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from { width: 0; }
  to { width: 100%; }
}
</style>