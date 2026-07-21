export const SITE = {
  name: "AhsanWP",
  domain: "ahsanwp.com",
  email: "info@ahsanwp.com",
  whatsappNumber: "923054838799",
  whatsappDisplay: "+92 305 4838799",
};

export const whatsappLink = (message?: string) => {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
