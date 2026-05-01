import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Phone,
  Smartphone,
  Facebook,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Mail,
  MapPin,
  Leaf,
  Menu,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const LOGO =
  "https://residencialpacaembu.com.br/wp-content/uploads/2019/05/logo2-02.png";

const WHATSAPP_NUMBER = "5511981929799";
const PHONE_FIXED = "1138715853";
const PHONE_MOBILE = "11981929799";
const EMAIL = "contato@residencialpacaembu.com.br";
const ADDRESS = "Av. Pacaembú, 1730 - Pacaembú - São Paulo - SP";
const FACEBOOK_URL = "https://www.facebook.com/Casaderepousopacaembu";

const slides = [
  {
    img: "https://residencialpacaembu.com.br/wp-content/uploads/2019/05/home-03_Easy-Resize.com_-1024x574.jpg",
    title: "40 ANOS DE EXPERIÊNCIA",
    subtitle: "A família é sua... mas o carinho é nosso",
  },
  {
    img: "https://residencialpacaembu.com.br/wp-content/uploads/2019/05/enfer-03_Easy-Resize.com_-1024x574.jpg",
    title: "RESPEITO E CUIDADO",
    subtitle: "Acompanhamento diferenciado e profissionais especializados",
  },
  {
    img: "https://residencialpacaembu.com.br/wp-content/uploads/2019/05/recu-03_Easy-Resize.com_-1024x574.jpg",
    title: "ESTRUTURA ADAPTADA",
    subtitle: "100% adaptada para os nossos clientes",
  },
  {
    img: "https://residencialpacaembu.com.br/wp-content/uploads/2019/05/car-03_Easy-Resize.com_-1024x574.jpg",
    title: "CARINHO E ATENÇÃO",
    subtitle: "Cuidado humano e individualizado",
  },
];

const diferenciais = [
  {
    img: "https://residencialpacaembu.com.br/wp-content/uploads/2019/05/21305.jpg",
    title: "Home Care",
    desc: "Perfeito ambiente com os melhores profissionais para recuperação pós operatório.",
  },
  {
    img: "https://residencialpacaembu.com.br/wp-content/uploads/2019/05/31305.jpg",
    title: "Enfermagem 24 horas",
    desc: "Todo o apoio físico e emocional, ajudando para maior conforto, prevenção de dores e identificação de problemas de maneira individualizada.",
  },
  {
    img: "https://residencialpacaembu.com.br/wp-content/uploads/2019/05/41305.jpg",
    title: "Acessibilidade",
    desc: "Sempre preocupados com o bem-estar e comodidade dos nossos hóspedes, o residencial está totalmente pronto e acessível.",
  },
];

const estruturaImgs = [
  { src: "https://residencialpacaembu.com.br/wp-content/uploads/2019/05/11305.jpg", caption: "Sala de estar" },
  { src: "https://residencialpacaembu.com.br/wp-content/uploads/2019/05/51305.jpg", caption: "Entrada" },
  { src: "https://residencialpacaembu.com.br/wp-content/uploads/2019/05/061305.jpg", caption: "Quartos" },
  { src: "https://residencialpacaembu.com.br/wp-content/uploads/2020/12/WhatsApp-Image-2020-12-09-at-15.33.45-1024x768.jpeg", caption: "Ambiente" },
  { src: "https://residencialpacaembu.com.br/wp-content/uploads/2020/12/WhatsApp-Image-2020-12-10-at-11.06.28-1024x768.jpeg", caption: "Áreas comuns" },
  { src: "https://residencialpacaembu.com.br/wp-content/uploads/2020/12/WhatsApp-Image-2020-12-09-at-15.32.53-4-1024x768.jpeg", caption: "Espaço de convivência" },
  { src: "https://residencialpacaembu.com.br/wp-content/uploads/2019/04/087250b5-d321-4647-b329-b8994b75025a-1-1024x768.jpg", caption: "Jardim" },
  { src: "https://residencialpacaembu.com.br/wp-content/uploads/2020/12/WhatsApp-Image-2020-12-09-at-15.35.02-2-1024x768.jpeg", caption: "Refeitório" },
];

const servicos = [
  {
    img: "https://residencialpacaembu.com.br/wp-content/uploads/2019/05/enfer-03_Easy-Resize.com_-1024x574.jpg",
    title: "Enfermaria 24h/dia",
    desc: "Todo o apoio físico e emocional, ajudando para maior conforto, prevenção de dores, identificação de problemas de maneira individualizada com estudos clínicos e preventivos em tratamentos de feridas, úlceras e escaras.",
  },
  {
    img: "https://residencialpacaembu.com.br/wp-content/uploads/2019/05/recu-03_Easy-Resize.com_-1024x574.jpg",
    title: "Recuperação pós-hospitalar",
    desc: "Facilitando o retorno da pessoa da 3ª idade à vida ativa, assistindo todo o processo físico-psíquico direcionando ao melhor caminho possível.",
  },
  {
    img: "https://residencialpacaembu.com.br/wp-content/uploads/2019/05/car-03_Easy-Resize.com_-1024x574.jpg",
    title: "Home Care",
    desc: "Perfeito ambiente com os melhores profissionais para recuperação pós operatório.",
  },
  {
    img: "https://residencialpacaembu.com.br/wp-content/uploads/2019/05/home-03_Easy-Resize.com_-1024x574.jpg",
    title: "Equipe multidisciplinar",
    desc: "Médicos, nutricionista, fisioterapeuta, terapeuta ocupacional e sessões de musicoterapia. Confiança, segurança e cuidados especiais com muito amor e carinho.",
  },
];

const depoimentos = [
  {
    text: "Recomendo de olhos fechados, aqui meu pai é tratado com muito carinho e respeito.",
    author: "Maria Alice dos Santos",
    role: "Filha de cliente",
  },
  {
    text: "O atendimento é muito bom, a estrutura do residencial, a equipe, gostei de tudo. Recomendo, são profissionais muito competentes.",
    author: "Maria Cecilia dos Santos",
    role: "Filha de hóspede",
  },
  {
    text: "Tratamento muito bom, aliado a um ótimo ambiente com profissionais qualificados e ótima rotina.",
    author: "Rogério dos Reis Fernandes",
    role: "Hóspede",
  },
];

const navLinks = [
  { href: "#quem-somos", label: "QUEM SOMOS" },
  { href: "#estrutura", label: "ESTRUTURA" },
  { href: "#servicos", label: "SERVIÇOS" },
  { href: "#contato", label: "CONTATO" },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-8">
        <a href="#inicio" className="shrink-0">
          <img src={LOGO} alt="Residencial Pacaembu" className="h-16 w-auto md:h-20" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold tracking-wide text-primary transition-colors hover:text-[oklch(0.55_0.1_195)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3b5998] text-white transition-transform hover:scale-110"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=Solicito%20contato%20comercial`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-110"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <div className="flex flex-col gap-1 border-l border-border pl-4 text-sm">
            <a href={`tel:+55${PHONE_FIXED}`} className="flex items-center gap-2 text-foreground hover:text-primary">
              <Phone className="h-4 w-4 text-primary" /> (11) 3871-5853
            </a>
            <a href={`tel:+55${PHONE_MOBILE}`} className="flex items-center gap-2 text-foreground hover:text-primary">
              <Smartphone className="h-4 w-4 text-primary" /> (11) 98192-9799
            </a>
          </div>
        </div>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-primary"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <nav className="flex flex-col px-4 py-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm font-semibold text-primary"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <a href={`tel:+55${PHONE_FIXED}`} className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> (11) 3871-5853</a>
              <a href={`tel:+55${PHONE_MOBILE}`} className="flex items-center gap-2"><Smartphone className="h-4 w-4 text-primary" /> (11) 98192-9799</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function HeroSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);
  const prev = () => setI((v) => (v - 1 + slides.length) % slides.length);
  const next = () => setI((v) => (v + 1) % slides.length);

  return (
    <section id="inicio" className="hero-gradient relative">
      <div className="container mx-auto px-4 py-6 lg:px-8">
        <div className="relative h-[400px] overflow-hidden rounded-md md:h-[520px]">
          {slides.map((s, idx) => (
            <div
              key={idx}
              className={`fade-mask absolute inset-0 transition-opacity duration-1000 ${
                idx === i ? "opacity-100" : "opacity-0"
              }`}
            >
              <img src={s.img} alt={s.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center text-white">
                <h2 className="max-w-3xl text-3xl font-extrabold tracking-wide drop-shadow-lg md:text-5xl lg:text-6xl">
                  {s.title}
                </h2>
                <p className="mt-4 max-w-2xl text-lg drop-shadow-md md:text-xl">{s.subtitle}</p>
              </div>
            </div>
          ))}

          <button
            onClick={prev}
            aria-label="Anterior"
            className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/30 text-white backdrop-blur transition hover:bg-white/50"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={next}
            aria-label="Próximo"
            className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/30 text-white backdrop-blur transition hover:bg-white/50"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-2 w-8 rounded-full transition-all ${
                  idx === i ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-6">
        <Leaf className="h-7 w-7 text-white" />
      </div>
    </section>
  );
}

function Diferenciais() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="section-title">Diferenciais</h2>
        <div className="leaf-divider" />
        <div className="grid gap-8 md:grid-cols-3">
          {diferenciais.map((d) => (
            <article key={d.title} className="overflow-hidden rounded-lg shadow-md transition-transform hover:-translate-y-1 hover:shadow-xl">
              <img src={d.img} alt={d.title} className="h-64 w-full object-cover" />
              <div className="bg-white p-6 text-center">
                <h3 className="mb-3 text-xl font-bold text-foreground">{d.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuemSomos() {
  return (
    <section id="quem-somos" className="bg-secondary py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="section-title">Quem Somos</h2>
        <div className="leaf-divider" />
        <div className="grid items-center gap-10 md:grid-cols-2">
          <img
            src="https://residencialpacaembu.com.br/wp-content/uploads/2019/05/071305.jpg"
            alt="Quem somos"
            className="h-full w-full rounded-lg object-cover shadow-lg"
          />
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              Estamos localizados no bairro do Pacaembu na Zona Oeste de São Paulo, em um imóvel
              totalmente adaptado para os nossos clientes.
            </p>
            <p>
              Oferecemos para a terceira idade não só um lugar para se hospedar, mas uma Residência
              com ampla área, equipada com corrimãos, rampas e elevador garantindo aos seus
              hóspedes total acessibilidade, espaço para caminhada e amplo jardim.
            </p>
            <p>
              Possuímos alas separadas por sexo, visando maior privacidade. O nosso cardápio
              balanceado respeita as necessidades individuais de cada hóspede.
            </p>
            <p>
              Contamos com uma equipe altamente qualificada, enfermagem 24 horas e visitas
              semanais de Médico, Nutricionista, Fisioterapeuta, Terapeuta Ocupacional e
              sessões de musicoterapia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Estrutura() {
  return (
    <section id="estrutura" className="bg-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="section-title">Nossa Estrutura</h2>
        <div className="leaf-divider" />
        <p className="mx-auto mb-10 max-w-3xl text-center text-muted-foreground">
          Conheça nossa estrutura, localizada no bairro do Pacaembu, Zona Oeste – São Paulo.
          Nosso imóvel está 100% adaptado às necessidades dos nossos clientes.
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {estruturaImgs.map((it) => (
            <figure key={it.src} className="group relative overflow-hidden rounded-lg shadow">
              <img
                src={it.src}
                alt={it.caption}
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-sm font-semibold text-white">
                {it.caption}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href="#contato"
            className="rounded-full bg-primary px-8 py-3 font-semibold uppercase tracking-wide text-primary-foreground shadow-md transition hover:bg-[oklch(0.6_0.1_195)] hover:shadow-lg"
          >
            Agende uma visita
          </a>
        </div>
      </div>
    </section>
  );
}

function Servicos() {
  return (
    <section id="servicos" className="bg-secondary py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="section-title">Serviços</h2>
        <div className="leaf-divider" />
        <div className="grid gap-8 md:grid-cols-2">
          {servicos.map((s) => (
            <article key={s.title} className="overflow-hidden rounded-lg bg-white shadow-md">
              <img src={s.img} alt={s.title} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-primary">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", assunto: "", mensagem: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text =
      `Olá! Solicito contato.%0A%0A` +
      `*Nome:* ${encodeURIComponent(form.nome)}%0A` +
      `*Email:* ${encodeURIComponent(form.email)}%0A` +
      `*Telefone:* ${encodeURIComponent(form.telefone)}%0A` +
      `*Assunto:* ${encodeURIComponent(form.assunto)}%0A` +
      `*Mensagem:* ${encodeURIComponent(form.mensagem)}`;
    window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${text}`, "_blank");
  }

  const input =
    "w-full rounded-md border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30";

  return (
    <section id="contato" className="bg-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="section-title">Contato</h2>
        <div className="leaf-divider" />
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-foreground/80 leading-relaxed">
              Entre em contato conosco para tirar dúvidas, agendar uma visita ou solicitar mais
              informações sobre os nossos serviços. Estamos prontos para atendê-lo com todo
              carinho e atenção.
            </p>
            <ul className="space-y-4 text-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <a href={`tel:+55${PHONE_FIXED}`} className="hover:text-primary">(11) 3871-5853</a>
              </li>
              <li className="flex items-center gap-3">
                <Smartphone className="h-5 w-5 shrink-0 text-primary" />
                <a href={`tel:+55${PHONE_MOBILE}`} className="hover:text-primary">(11) 98192-9799</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <a href={`mailto:${EMAIL}`} className="hover:text-primary break-all">{EMAIL}</a>
              </li>
            </ul>
            <div className="overflow-hidden rounded-lg shadow">
              <iframe
                title="Mapa"
                src="https://www.google.com/maps?q=Av.+Pacaembu,+1730,+S%C3%A3o+Paulo&output=embed"
                className="h-64 w-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 rounded-lg bg-secondary p-6 shadow-md">
            <input
              required
              maxLength={100}
              className={input}
              placeholder="Nome"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
            />
            <input
              required
              type="email"
              maxLength={120}
              className={input}
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              required
              maxLength={20}
              className={input}
              placeholder="Telefone"
              value={form.telefone}
              onChange={(e) => setForm({ ...form, telefone: e.target.value })}
            />
            <input
              maxLength={120}
              className={input}
              placeholder="Assunto"
              value={form.assunto}
              onChange={(e) => setForm({ ...form, assunto: e.target.value })}
            />
            <textarea
              required
              maxLength={1000}
              rows={5}
              className={input}
              placeholder="Mensagem"
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
            />
            <button
              type="submit"
              className="w-full rounded-md bg-primary py-3 font-bold uppercase tracking-wider text-primary-foreground transition hover:bg-[oklch(0.6_0.1_195)]"
            >
              Enviar
            </button>
            <p className="text-center text-xs text-muted-foreground">
              Sua mensagem será enviada por WhatsApp.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Depoimentos() {
  return (
    <section className="hero-gradient py-16 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold uppercase tracking-wide md:text-4xl">
          Depoimentos dos nossos clientes
        </h2>
        <div className="mx-auto mt-4 mb-10 h-1 w-10 rounded bg-white" />
        <div className="grid gap-6 md:grid-cols-3">
          {depoimentos.map((d, i) => (
            <blockquote
              key={i}
              className="flex flex-col rounded-lg bg-white/10 p-6 backdrop-blur-sm"
            >
              <p className="flex-1 text-base italic leading-relaxed">&ldquo;{d.text}&rdquo;</p>
              <footer className="mt-4 border-t border-white/30 pt-4">
                <p className="font-bold">{d.author}</p>
                <p className="text-sm text-white/80">{d.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[oklch(0.25_0.02_240)] py-12 text-white/90">
      <div className="container mx-auto grid gap-8 px-4 md:grid-cols-3 lg:px-8">
        <div>
          <img src={LOGO} alt="Residencial Pacaembu" className="mb-4 h-20 w-auto bg-white/10 p-2 rounded" />
          <p className="text-sm leading-relaxed text-white/70">
            Casa de repouso com 40 anos de experiência no cuidado da terceira idade.
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-lg font-bold uppercase text-primary">Atendimento</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> (11) 3871-5853</li>
            <li className="flex items-center gap-2"><Smartphone className="h-4 w-4 text-primary" /> (11) 98192-9799</li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-primary" /> <span className="break-all">{EMAIL}</span></li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> {ADDRESS}</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-lg font-bold uppercase text-primary">Redes sociais</h4>
          <div className="flex gap-3">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3b5998] transition-transform hover:scale-110"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] transition-transform hover:scale-110"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
          <a
            href="#inicio"
            className="mt-6 inline-block text-sm text-white/70 underline hover:text-primary"
          >
            ↑ Voltar para o topo
          </a>
        </div>
      </div>
      <div className="container mx-auto mt-10 border-t border-white/10 px-4 pt-6 text-center text-xs text-white/50 lg:px-8">
        © {new Date().getFullYear()} Residencial Pacaembu. Todos os direitos reservados.
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=Solicito%20contato%20comercial`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSlider />
        <Diferenciais />
        <QuemSomos />
        <Estrutura />
        <Servicos />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
