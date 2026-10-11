export const siteConfig = {
  name: "Mashaal Food",
  tagline: "Fresh · Hygienic · Delicious",
  phoneNumber: "+92 315 6704501",
  whatsappNumber: "923156704501", // digits only, country code first, no + or spaces
};

export function telLink(phone: string = siteConfig.phoneNumber) {
  return `tel:${phone.replace(/\s+/g, "")}`;
}

export function whatsappLink(message?: string, number: string = siteConfig.whatsappNumber) {
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
