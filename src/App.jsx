import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BatteryCharging,
  Cable,
  Clock,
  ExternalLink,
  Headphones,
  Instagram,
  MapPin,
  Menu,
  Navigation,
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
  "https://www.google.com/maps/search/?api=1&query=Balaji%20Mobile%20Accessories%20Near%20Nagar%20Palika%20Kothi%20Bazaar%20Betul";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "Gallery", id: "gallery" },
  { label: "Visit", id: "visit" },
];

const retailPhotos = {
  storefront: "https://indofast.in/uploaded_files/products/dfzN2re.jpg",
  interior: "https://indofast.in/uploaded_files/products/fdZDIJ.jpg",
  frontage: "https://indofast.in/uploaded_files/products/zdfmA9f.jpg",
  evening: "https://indofast.in/uploaded_files/products/jsdbUYRJ.jpg",
  product: "https://indofast.in/uploaded_files/custom_product/motoZLlO.jpg",
};

const gallery = [
  {
    title: "Storefront Presence",
    text: "Clear brand visibility for walk-in customers.",
    image: retailPhotos.storefront,
  },
  {
    title: "Retail Counter",
    text: "Phones and accessories presented with a clean showroom focus.",
    image: retailPhotos.interior,
  },
  {
    title: "Front Display",
    text: "A practical local-store look with strong mobile brand recall.",
    image: retailPhotos.frontage,
  },
  {
    title: "Product Highlight",
    text: "Focused product space for phones, offers and arrivals.",
    image: retailPhotos.product,
  },
];

const services = [
  {
    icon: Smartphone,
    title: "Mobile Sales",
    description:
      "Clear enquiry flow for customers looking for phones and brand options.",
  },
  {
    icon: Wrench,
    title: "Repair & Service",
    description:
      "Professional service positioning for walk-in repair and support needs.",
  },
  {
    icon: ShoppingBag,
    title: "Mobile Accessories",
    description:
      "Covers, chargers, audio and daily mobile essentials shown as a premium range.",
  },
  {
    icon: ShieldCheck,
    title: "Screen Protection",
    description:
      "Dedicated protection block for tempered glass and device safety enquiries.",
  },
];

const accessoryHighlights = [
  { icon: Cable, label: "Cables" },
  { icon: BatteryCharging, label: "Chargers" },
  { icon: Headphones, label: "Audio" },
  { icon: BadgeCheck, label: "Cases" },
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
            src={retailPhotos.storefront}
            alt="Balaji Mobile storefront with mobile brand displays"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.88),rgba(0,0,0,0.52),rgba(0,0,0,0.18))]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(0deg,#f8f7f2,rgba(248,247,242,0))]" />

          <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-center px-5 py-28 sm:px-8 lg:px-10">
            <div className="max-w-3xl" data-reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm text-white/86 backdrop-blur-md">
                <MapPin className="h-4 w-4 text-[#f3ba45]" />
                Kothi Bazaar, Betul
              </div>
              <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] sm:text-6xl lg:text-7xl">
                Balaji Mobile & Accessories
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
                Premium mobile retail, accessories and service support for
                customers who want a reliable local store experience.
              </p>

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

        <section className="section-wrap" id="services">
          <div className="section-heading" data-reveal>
            <span className="section-kicker">Services</span>
            <h2>Retail, accessories and service in one clear experience.</h2>
            <p>
              Built around the public business categories customers already
              search for: phones, accessories, repairs and screen protection.
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
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#121212] py-20 text-white sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
            <div className="flex flex-col justify-center" data-reveal>
              <span className="section-kicker text-[#f3ba45]">Retail Identity</span>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">
                A sharper brand presentation for a high-trust mobile store.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/68">
                Dark retail styling, verified business links and real storefront
                visuals give the page a more credible showroom feel.
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

        <section className="section-wrap" id="gallery">
          <div className="section-heading" data-reveal>
            <span className="section-kicker">Gallery</span>
            <h2>Real storefront and retail visuals.</h2>
            <p>
              Publicly available business visuals are used for a grounded,
              client-facing presentation with a stronger local retail feel.
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

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:px-10">
            <div data-reveal>
              <span className="section-kicker">Social proof</span>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">
                Listing and social presence customers can verify.
              </h2>
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
                Customers can open directions, Instagram or the listing for the
                latest store details and contact information.
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
