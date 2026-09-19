import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, Minus, Plus, ShieldCheck, ShoppingBag, Truck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/us-polo-tee-hero.jpg";
import productImage from "@/assets/us-polo-tee-front.jpg";
import detailImage from "@/assets/us-polo-tee-detail.jpg";
import brickImage from "@/assets/tee-brick.jpg";
import indigoImage from "@/assets/tee-indigo.jpg";
import charcoalImage from "@/assets/tee-charcoal.jpg";
import boneImage from "@/assets/tee-bone.jpg";
import blackImage from "@/assets/tee-black.jpg";
import oliveImage from "@/assets/tee-olive.jpg";
import heatherImage from "@/assets/tee-heather.jpg";

const products = [
  { name: "US Polo Essential Tee", colour: "Deep Forest", image: productImage },
  { name: "US Polo Essential Tee", colour: "Brick", image: brickImage },
  { name: "US Polo Essential Tee", colour: "Bone", image: boneImage },
  { name: "US Polo Essential Tee", colour: "Charcoal", image: charcoalImage },
  { name: "US Polo Washed Tee", colour: "Indigo", image: indigoImage },
  { name: "US Polo Essential Tee", colour: "Black", image: blackImage },
  { name: "US Polo Everyday Tee", colour: "Heather Grey", image: heatherImage },
  { name: "US Polo Essential Tee", colour: "Olive", image: oliveImage },
];

const featuredProduct = products[0] ?? {
  name: "US Polo Essential Tee",
  colour: "Deep Forest",
  image: productImage,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "US Polo T-shirt — ₹299 | North & Field" },
      { name: "description", content: "Shop the men's US Polo T-shirt in size S for ₹299. Simple, everyday comfort delivered across India." },
      { property: "og:title", content: "US Polo T-shirt — ₹299" },
      { property: "og:description", content: "A comfortable men's everyday T-shirt in size S, available for ₹299." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [quantity, setQuantity] = useState(1);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(featuredProduct);

  const goToProduct = () => document.getElementById("product")?.scrollIntoView({ behavior: "smooth" });
  const selectProduct = (product: (typeof products)[number]) => {
    setSelectedProduct(product);
    window.setTimeout(goToProduct, 0);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="bg-primary px-4 py-2 text-center text-xs font-medium text-primary-foreground">
        Free delivery across India · Easy 7-day returns
      </div>

      <header className="absolute top-8 z-20 w-full border-b border-hero-line/40">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="font-display text-xl font-bold uppercase tracking-brand text-hero-foreground">North & Field</a>
          <nav className="hidden items-center gap-8 text-xs font-medium text-hero-foreground/85 md:flex" aria-label="Main navigation">
            <a href="#shop" className="hover:text-hero-foreground">Shop</a>
            <a href="#details" className="hover:text-hero-foreground">Details</a>
            <a href="#delivery" className="hover:text-hero-foreground">Delivery</a>
          </nav>
          <button onClick={() => setCartOpen(true)} className="relative p-2 text-hero-foreground" aria-label="Open shopping bag">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] text-primary-foreground">{quantity}</span>
          </button>
        </div>
      </header>

      <section id="top" className="relative min-h-[78vh] overflow-hidden sm:min-h-[82vh]">
        <img src={heroImage} width={1600} height={912} alt="Forest green men's T-shirt on a wooden clothing rail" className="absolute inset-0 h-full w-full object-cover object-[65%_center]" />
        <div className="absolute inset-0 bg-hero-shade" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-end px-5 pb-14 pt-32 sm:min-h-[82vh] sm:items-center sm:px-8 sm:pb-0">
          <div className="max-w-lg text-hero-foreground">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest">One tee. Everyday ease.</p>
            <h1 className="font-display text-5xl font-medium leading-[1.02] sm:text-7xl">The US Polo T-shirt</h1>
            <div className="mt-7 flex items-center gap-5">
              <Button size="lg" onClick={goToProduct} className="bg-hero-foreground text-hero-ink hover:bg-hero-foreground/90">
                Shop for ₹299 <ArrowRight size={16} />
              </Button>
              <span className="text-sm text-hero-foreground/80">Size S only</span>
            </div>
          </div>
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="mb-9 flex items-end justify-between border-b border-border pb-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Men's collection</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">Essential T-shirts</h2>
          </div>
          <p className="hidden text-sm text-muted-foreground sm:block">8 colours · Size S</p>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 md:grid-cols-4">
          {products.map((product) => (
            <button key={product.colour} onClick={() => selectProduct(product)} className="group text-left" aria-label={`View ${product.colour} T-shirt`}>
              <div className="aspect-[4/5] overflow-hidden bg-secondary">
                <img src={product.image} loading="lazy" width={900} height={1056} alt={`${product.colour} men's T-shirt`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" />
              </div>
              <h3 className="mt-3 text-xs font-semibold leading-5 sm:text-sm">{product.name}</h3>
              <p className="text-xs text-muted-foreground">{product.colour} · Size S</p>
              <p className="mt-1 text-sm font-semibold">₹299</p>
            </button>
          ))}
        </div>
      </section>

      <section id="product" className="mx-auto grid max-w-7xl gap-10 border-t border-border px-5 py-16 sm:px-8 md:grid-cols-[1.15fr_.85fr] md:py-24">
        <div className="grid gap-3 sm:grid-cols-2">
          <img src={selectedProduct.image} loading="lazy" width={1200} height={1408} alt={`${selectedProduct.colour} US Polo T-shirt front view`} className="h-full w-full bg-secondary object-cover" />
          <img src={detailImage} loading="lazy" width={1200} height={1408} alt="Close-up of the T-shirt collar and cotton texture" className="hidden h-full w-full bg-secondary object-cover sm:block" />
        </div>

        <div className="flex flex-col justify-center md:pl-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Men's essential</p>
          <h2 className="mt-3 font-display text-4xl font-medium sm:text-5xl">{selectedProduct.name}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{selectedProduct.colour}</p>
          <div className="mt-5 flex items-baseline gap-3">
            <span className="text-3xl font-semibold">₹299</span>
            <span className="text-sm text-muted-foreground">inclusive of all taxes</span>
          </div>
          <p className="mt-6 max-w-md leading-7 text-muted-foreground">An easy-wearing crew neck tee made for repeat wear. Clean lines, a comfortable shape, and a deep forest tone that works every day.</p>

          <div className="mt-8 border-t border-border pt-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">Size</span>
              <span className="text-xs text-muted-foreground">Only size available</span>
            </div>
            <div className="mt-3 flex h-12 w-14 items-center justify-center border-2 border-primary bg-secondary text-sm font-semibold">S</div>
          </div>

          <div className="mt-6 flex gap-3">
            <div className="flex h-12 items-center border border-border">
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="h-full w-11 hover:bg-secondary" aria-label="Decrease quantity"><Minus size={15} className="mx-auto" /></button>
              <span className="w-9 text-center text-sm font-semibold">{quantity}</span>
              <button onClick={() => setQuantity((q) => Math.min(5, q + 1))} className="h-full w-11 hover:bg-secondary" aria-label="Increase quantity"><Plus size={15} className="mx-auto" /></button>
            </div>
            <Button size="lg" onClick={() => setCartOpen(true)} className="flex-1">Buy now · ₹{299 * quantity}</Button>
          </div>

          <div id="delivery" className="mt-7 grid gap-4 border-t border-border pt-6 text-sm sm:grid-cols-2">
            <div className="flex gap-3"><Truck className="mt-0.5 shrink-0" size={19} /><div><strong className="block">Free delivery</strong><span className="text-xs text-muted-foreground">Across India</span></div></div>
            <div className="flex gap-3"><ShieldCheck className="mt-0.5 shrink-0" size={19} /><div><strong className="block">Secure purchase</strong><span className="text-xs text-muted-foreground">Protected checkout</span></div></div>
          </div>
        </div>
      </section>

      <section id="details" className="bg-secondary py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-12 px-5 sm:px-8 md:grid-cols-3">
          {[['01','Simple by design','One versatile colour and one clear choice.'],['02','Made for everyday','A classic crew neck shape for effortless daily wear.'],['03','Easy to buy','Size S, ₹299, and free delivery across India.']].map(([n,title,text]) => (
            <article key={n} className="border-t border-border pt-5"><span className="text-xs text-muted-foreground">{n}</span><h3 className="mt-6 font-display text-2xl">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>
          ))}
        </div>
      </section>

      <footer className="border-t border-border px-5 py-8 text-center text-xs text-muted-foreground">© 2026 North & Field · Made for everyday India</footer>

      <div className="fixed inset-x-0 bottom-0 z-30 flex items-center justify-between border-t border-border bg-background/95 px-4 py-3 backdrop-blur sm:hidden">
        <div><span className="block text-xs text-muted-foreground">US Polo Tee · S</span><strong>₹299</strong></div>
        <Button onClick={() => setCartOpen(true)}>Buy now <ArrowRight size={15} /></Button>
      </div>

      {cartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-overlay" role="dialog" aria-modal="true" aria-label="Shopping bag">
          <div className="flex h-full w-full max-w-md flex-col bg-background p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-border pb-5"><h2 className="font-display text-2xl">Your bag</h2><button onClick={() => setCartOpen(false)} className="p-2" aria-label="Close shopping bag"><X size={20} /></button></div>
            <div className="flex gap-4 border-b border-border py-6">
              <img src={selectedProduct.image} alt={`${selectedProduct.colour} T-shirt`} className="h-32 w-28 bg-secondary object-cover" />
              <div className="flex-1"><h3 className="font-semibold">{selectedProduct.name}</h3><p className="mt-1 text-sm text-muted-foreground">{selectedProduct.colour} · Size S</p><p className="mt-4 font-semibold">₹299 × {quantity}</p></div>
            </div>
            <div className="mt-auto">
              <div className="flex justify-between border-t border-border py-5 text-lg"><span>Total</span><strong>₹{299 * quantity}</strong></div>
              <Button size="lg" className="w-full" onClick={() => setCartOpen(false)}>Continue to checkout <ArrowRight size={16} /></Button>
              <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground"><Check size={14} /> Free delivery included</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
