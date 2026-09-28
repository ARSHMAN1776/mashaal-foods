export const siteConfig = {
  name: "Mashaal Food",
  tagline: "Fresh · Hygienic · Delicious",
  phoneNumber: "+92 315 6704501",
  whatsappNumber: "923156704501", // digits only, country code first, no + or spaces
};

export function telLink() {
  return `tel:${siteConfig.phoneNumber.replace(/\s+/g, "")}`;
}

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
