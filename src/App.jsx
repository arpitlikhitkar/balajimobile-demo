import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BatteryCharging,
  Cable,
  CheckCircle2,
  Clock,
  ExternalLink,
  Headphones,
  Instagram,
  Layers3,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  PackageCheck,
  Search,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Star,
  Store,
  Wrench,
  X,
} from "lucide-react";

const justdialUrl =
  "https://www.justdial.com/Betul/Balaji-Mobile-Accessories-Near-Nagar-Palika-Kothi-Bazaar/9999P7141-7141-190218111845-R2Z7_BZDET";
const instagramUrl = "https://www.instagram.com/balaji_mobile_betul/?hl=en";
const mapsUrl =
  "https://www.google.com/maps/place/BALAJI+MOBILE/@21.9112733,77.8911643,16z/data=!4m10!1m2!2m1!1sBalaji+Mobile+Accessories+Near+Nagar+Palika+Kothi+Bazaar+Betul!3m6!1s0x3bd6090c7621af73:0x7cb51dba02187351!8m2!3d21.9112733!4d77.9006915!15sCj5CYWxhamkgTW9iaWxlIEFjY2Vzc29yaWVzIE5lYXIgTmFnYXIgUGFsaWthIEtvdGhpIEJhemFhciBCZXR1bJIBEGNlbGxfcGhvbmVfc3RvcmXgAQA!16s%2Fg%2F11wplwmb18?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Gallery", id: "gallery" },
  { label: "Visit", id: "visit" },
];

const shopPhotos = {
  storefront: "https://indofast.in/uploaded_files/products/dfzN2re.jpg",
  interior: "https://indofast.in/uploaded_files/products/fdZDIJ.jpg",
  frontage: "https://indofast.in/uploaded_files/products/zdfmA9f.jpg",
  evening: "https://indofast.in/uploaded_files/products/jsdbUYRJ.jpg",
  product: "https://indofast.in/uploaded_files/custom_product/motoZLlO.jpg",
};

const gallery = [
  {
    title: "Signature Storefront",
    text: "Kothi Bazaar me Balaji Mobile ki strong visual presence.",
    image: shopPhotos.storefront,
  },
  {
    title: "Customer Counter",
    text: "Mobiles, accessories aur service enquiries ke liye clean counter experience.",
    image: shopPhotos.interior,
  },
  {
    title: "Front Display",
    text: "Walk-in customers ke liye visible and recognizable mobile-store display.",
    image: shopPhotos.frontage,
  },
  {
    title: "Phone Showcase",
    text: "Phone enquiry aur product highlights ke liye focused visual space.",
    image: shopPhotos.product,
  },
];

const services = [
  {
    icon: Smartphone,
    title: "Mobile Sales",
    description:
      "New phone purchase aur upgrade enquiries ke liye clear and polished section.",
    points: ["Phone enquiries", "Brand options", "Upgrade guidance"],
  },
  {
    icon: Wrench,
    title: "Repair & Service",
    description:
      "Device issue, repair support aur service enquiries ke liye dedicated section.",
    points: ["Device check", "Service support", "Issue guidance"],
  },
  {
    icon: ShoppingBag,
    title: "Mobile Accessories",
    description:
      "Covers, chargers, audio aur daily-use accessories ko premium category ke roop me present kiya gaya hai.",
    points: ["Cases", "Chargers", "Audio accessories"],
  },
  {
    icon: ShieldCheck,
    title: "Screen Protection",
    description:
      "Screen guard, tempered glass aur back cover jaise protection items ke liye section.",
    points: ["Tempered glass", "Back covers", "Screen protection"],
  },
];

const accessoryHighlights = [
  { icon: Cable, label: "Cables" },
  { icon: BatteryCharging, label: "Chargers" },
  { icon: Headphones, label: "Audio" },
  { icon: BadgeCheck, label: "Cases" },
];

const marqueeItems = [
  "Mobiles",
  "Repair Support",
  "Premium Covers",
  "Chargers & Cables",
  "Audio Accessories",
  "Screen Protection",
  "Kothi Bazaar, Betul",
];

const storePillars = [
  {
    title: "Strong brand presence",
    text: "Website ka first impression Balaji Mobile ke name, location aur real visuals par based hai.",
  },
  {
    title: "Customer ko clear next step",
    text: "Directions, Instagram aur listing links polished layout me easily available hain.",
  },
  {
    title: "Complete service clarity",
    text: "Mobiles, accessories, repair aur screen protection clearly separated hain.",
  },
];

const categories = [
  {
    icon: Smartphone,
    title: "Smartphones",
    text: "New phone aur upgrade enquiries ke liye premium product category.",
  },
  {
    icon: ShieldCheck,
    title: "Protection",
    text: "Tempered glass, covers aur screen protection jaise daily-use items.",
  },
  {
    icon: Headphones,
    title: "Audio",
    text: "Earphones aur mobile audio accessories ke liye separate category.",
  },
  {
    icon: BatteryCharging,
    title: "Power",
    text: "Chargers, cables aur power accessories ko quick scanning ke liye group kiya.",
  },
  {
    icon: Wrench,
    title: "Service Desk",
    text: "Repair aur support information ko direct aur easy rakha gaya hai.",
  },
  {
    icon: PackageCheck,
    title: "Daily Essentials",
    text: "Roz use hone wali mobile accessories ke liye practical section.",
  },
];

const processSteps = [
  {
    icon: MessageCircle,
    title: "Customer ki need",
    text: "Phone, accessory, repair ya protection me kya chahiye, page usko clearly guide karta hai.",
  },
  {
    icon: Search,
    title: "Right section tak pahunch",
    text: "Customer ko jaldi samajh aata hai ki phone, accessory ya service ke liye kahan click karna hai.",
  },
  {
    icon: CheckCircle2,
    title: "Dukan tak easy visit",
    text: "Directions, Justdial aur Instagram links se customer store details verify kar sakta hai.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });

    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    const revealNodes = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 },
    );

    revealNodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f7f2] text-[#171717]">
      <Header
        menuOpen={menuOpen}
        onNavigate={scrollToSection}
        setMenuOpen={setMenuOpen}
      />

      <main>
        <section
          id="home"
          className="relative min-h-[92vh] overflow-hidden bg-[#111111] text-white"
        >
          <img
            className="absolute inset-0 h-full w-full object-cover opacity-[0.58]"
            src={shopPhotos.storefront}
            alt="Balaji Mobile storefront with mobile shop displays"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.88),rgba(0,0,0,0.52),rgba(0,0,0,0.18))]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(0deg,#f8f7f2,rgba(248,247,242,0))]" />

          <div className="relative z-10 mx-auto grid min-h-[92vh] max-w-7xl items-center gap-12 px-5 py-28 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
            <div className="max-w-3xl" data-reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm text-white/86 backdrop-blur-md">
                <MapPin className="h-4 w-4 text-[#f3ba45]" />
                Kothi Bazaar, Betul
              </div>
              <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] sm:text-6xl lg:text-7xl">
                Balaji Mobile & Accessories
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
                Mobiles, accessories, screen protection aur service support ke
                liye Betul ka trusted mobile destination.
              </p>

              <div className="hero-proof">
                <span>
                  <Star className="h-4 w-4" />
                  5.0 Justdial rating
                </span>
                <span>
                  <Clock className="h-4 w-4" />
                  10 AM - 10 PM
                </span>
                <span>
                  <ShieldCheck className="h-4 w-4" />
                  Mobiles & accessories
                </span>
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button
                  className="primary-button"
                  type="button"
                  onClick={() => scrollToSection("visit")}
                >
                  Visit Store
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  className="secondary-button"
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </div>
            </div>

            <div className="hero-showcase" data-reveal>
              <div className="showcase-card showcase-main">
                <img
                  src={shopPhotos.interior}
                  alt="Balaji Mobile shop counter and accessory display"
                />
                <div className="showcase-label">
                  <span>Shop counter</span>
                  <strong>Accessories aur service support</strong>
                </div>
              </div>
              <div className="showcase-card showcase-small">
                <img
                  src={shopPhotos.evening}
                  alt="Balaji Mobile evening storefront"
                />
              </div>
              <div className="floating-note note-top">
                <BadgeCheck className="h-4 w-4" />
                Public listing available
              </div>
              <div className="floating-note note-bottom">
                <Store className="h-4 w-4" />
                Balaji Mobile Betul
              </div>
            </div>
          </div>
        </section>

        <section className="relative -mt-16 px-5 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
            <InfoTile
              icon={MapPin}
              label="Location"
              value="Kothi Bazaar, Betul"
            />
            <InfoTile icon={Clock} label="Hours" value="10:00 AM - 10:00 PM" />
            <InfoTile icon={Star} label="Public rating" value="5.0 on Justdial" />
          </div>
        </section>

        <section className="marquee-band" aria-label="Balaji Mobile services">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={`${item}-${index}`}>
                <Layers3 className="h-4 w-4" />
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="section-wrap about-section" id="about">
          <div className="section-heading" data-reveal>
            <span className="section-kicker">Brand Experience</span>
            <h2>Balaji Mobile ko ek polished mobile brand ki tarah showcase kiya.</h2>
            <p>
              Page ka focus brand presence, services, shop visuals, Instagram,
              Justdial listing aur directions par hai. Koi fake offer, pricing
              ya live inventory claim nahi rakha gaya hai.
            </p>
          </div>

          <div className="about-grid">
            <figure className="about-photo" data-reveal>
              <img src={shopPhotos.frontage} alt="Balaji Mobile storefront frontage" />
              <figcaption>
                <strong>Balaji Mobile storefront</strong>
                <span>Betul customers ke liye clear and recognizable presence.</span>
              </figcaption>
            </figure>

            <div className="pillar-list">
              {storePillars.map((item, index) => (
                <article
                  className="pillar-card"
                  data-reveal
                  style={{ transitionDelay: `${index * 90}ms` }}
                  key={item.title}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap" id="services">
          <div className="section-heading" data-reveal>
            <span className="section-kicker">Services</span>
            <h2>Mobiles, accessories aur service support ka complete experience.</h2>
            <p>
              Customer ke common needs ko clean sections me organize kiya gaya
              hai, taaki Balaji Mobile ka offering clear dikhe.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <article
                className="service-card"
                data-reveal
                style={{ transitionDelay: `${index * 70}ms` }}
                key={service.title}
              >
                <service.icon className="h-7 w-7 text-[#0f8f87]" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.points.map((point) => (
                    <li key={point}>
                      <CheckCircle2 className="h-4 w-4" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#121212] py-20 text-white sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
            <div className="flex flex-col justify-center" data-reveal>
              <span className="section-kicker text-[#f3ba45]">Brand Look</span>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">
                Premium visual style jo Balaji Mobile ko strong brand feel de.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/68">
                Dark theme, real store photos, smooth animations aur clear
                calls-to-action se page polished and memorable lagta hai.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:max-w-xl sm:grid-cols-4">
                {accessoryHighlights.map((item) => (
                  <div className="mini-feature" key={item.label}>
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2" data-reveal>
              {gallery.slice(0, 2).map((item) => (
                <ImagePanel key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap collection-section">
          <div className="split-heading" data-reveal>
            <div>
              <span className="section-kicker">Product Categories</span>
              <h2>Balaji Mobile ke key categories ek clean layout me.</h2>
            </div>
            <p>
              Phone enquiry, covers, chargers, audio, screen protection aur
              service support ko premium category blocks me present kiya gaya hai.
            </p>
          </div>

          <div className="category-grid">
            {categories.map((item, index) => (
              <article
                className="category-card"
                data-reveal
                style={{ transitionDelay: `${index * 70}ms` }}
                key={item.title}
              >
                <div className="category-icon">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap" id="gallery">
          <div className="section-heading" data-reveal>
            <span className="section-kicker">Brand Gallery</span>
            <h2>Storefront, counter aur product visuals.</h2>
            <p>
              Real visuals se Balaji Mobile ka customer experience zyada clear,
              polished aur trustworthy lagta hai.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {gallery.map((item, index) => (
              <figure
                className={index === 0 ? "gallery-card md:row-span-2" : "gallery-card"}
                data-reveal
                style={{ transitionDelay: `${index * 80}ms` }}
                key={item.title}
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <figcaption>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="process-section">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="split-heading text-white" data-reveal>
              <div>
                <span className="section-kicker text-[#f3ba45]">Customer Flow</span>
                <h2>Customer ko enquiry se visit tak smooth path milta hai.</h2>
              </div>
              <p className="text-white/68">
                Website clear interest create karti hai, aur customer ko
                directions, Justdial aur Instagram ke through next step deti hai.
              </p>
            </div>

            <div className="process-grid">
              {processSteps.map((step, index) => (
                <article
                  className="process-card"
                  data-reveal
                  style={{ transitionDelay: `${index * 110}ms` }}
                  key={step.title}
                >
                  <span className="process-number">{String(index + 1).padStart(2, "0")}</span>
                  <step.icon className="h-7 w-7 text-[#f3ba45]" />
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="proof-section">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:px-10">
            <div data-reveal>
              <span className="section-kicker">Public Links</span>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">
                Customer listing aur Instagram se details check kar sakta hai.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#171717]/66">
                Justdial aur Instagram links ko visible rakha gaya hai, taaki
                customer latest contact details aur store activity khud verify kar sake.
              </p>
              <div className="source-actions">
                <a href={justdialUrl} target="_blank" rel="noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Justdial profile
                </a>
                <a href={instagramUrl} target="_blank" rel="noreferrer">
                  <Instagram className="h-4 w-4" />
                  Instagram page
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <Metric value="5.0" label="Justdial rating" icon={Star} />
              <Metric value="3" label="Public ratings" icon={BadgeCheck} />
              <Metric value="12 hrs" label="Listed daily window" icon={Clock} />
            </div>
          </div>
        </section>

        <section className="section-wrap" id="visit">
          <div className="visit-band" data-reveal>
            <div>
              <span className="section-kicker text-[#f3ba45]">Visit</span>
              <h2>Near Nagar Palika, Kothi Bazaar, Betul.</h2>
              <p>
                Dukan par aane ke liye directions open karein, ya latest details
                ke liye Instagram aur Justdial listing check karein.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a className="primary-button" href={mapsUrl} target="_blank" rel="noreferrer">
                <Navigation className="h-4 w-4" />
                Get directions
              </a>
              <a className="secondary-button light" href={justdialUrl} target="_blank" rel="noreferrer">
                <ExternalLink className="h-4 w-4" />
                Open listing
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function Header({ menuOpen, onNavigate, setMenuOpen }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#111111]/88 text-white backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <button
          className="brand-button"
          type="button"
          aria-label="Balaji Mobile home"
          onClick={() => onNavigate("home")}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3ba45] text-[#111111]">
            <Store className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-base font-semibold">Balaji Mobile</span>
            <span className="block text-xs text-white/56">Accessories & Service</span>
          </span>
        </button>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <button
              className="nav-link"
              type="button"
              onClick={() => onNavigate(link.id)}
              key={link.id}
            >
              {link.label}
            </button>
          ))}
        </div>

        <a
          className="hidden rounded-full border border-white/18 px-4 py-2 text-sm text-white/84 transition hover:border-[#f3ba45] hover:text-[#f3ba45] md:inline-flex"
          href={justdialUrl}
          target="_blank"
          rel="noreferrer"
        >
          Justdial listing
        </a>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/16 md:hidden"
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#111111] px-5 py-5 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                className="rounded-full px-4 py-3 text-white/80 transition hover:bg-white/[0.08] hover:text-white"
                type="button"
                onClick={() => {
                  onNavigate(link.id);
                  setMenuOpen(false);
                }}
                key={link.id}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function InfoTile({ icon: Icon, label, value }) {
  return (
    <div className="info-tile" data-reveal>
      <Icon className="h-6 w-6 text-[#f3ba45]" />
      <div>
        <p>{label}</p>
        <strong>{value}</strong>
      </div>
    </div>
  );
}

function ImagePanel({ item }) {
  return (
    <figure className="image-panel">
      <img src={item.image} alt={item.title} loading="lazy" />
      <figcaption>
        <strong>{item.title}</strong>
        <span>{item.text}</span>
      </figcaption>
    </figure>
  );
}

function Metric({ value, label, icon: Icon }) {
  return (
    <div className="metric-card" data-reveal>
      <Icon className="h-6 w-6 text-[#0f8f87]" />
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#111111] px-5 py-10 text-white sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold">Balaji Mobile & Accessories</p>
          <p className="mt-1 text-sm text-white/56">
            Mobile sales, accessories and service support in Kothi Bazaar, Betul.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm">
          <a className="footer-link" href={instagramUrl} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a className="footer-link" href={justdialUrl} target="_blank" rel="noreferrer">
            Justdial
          </a>
          <a className="footer-link" href={mapsUrl} target="_blank" rel="noreferrer">
            Directions
          </a>
        </div>
      </div>
    </footer>
  );
}

export default App;
