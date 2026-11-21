# Design System: LPK Tsubo JLTC (Master Source of Truth)

## Pattern & Visual Direction
- **Pattern:** Trust & Authority + Feature-Rich Conversion Showcase
- **Style:** Minimalism & Clean Modern Japanese Aesthetic
- **Conversion Focus:** Clear credibility proof (4.9 rating, 8,800+ followers, PT. Miraibo INC), one primary message per card, consistent CTA paths (Form Siswa Baru & WhatsApp Admin).
- **Section Order:** Hero > Trust Bar > Program Utama (4 cards) > Alur Pendaftaran & Keberangkatan (4 steps) > Galeri & Fasilitas > FAQ (5 items) > Footer & Peta Lokasi.

## Color Tokens (Tailwind v4 `@theme`)
| Role | Hex | Token (`@theme`) | Usage |
|------|-----|------------------|-------|
| Brand Primary (Deep Indigo) | `#1B2A4A` | `--color-indigo-deep` / `--color-primary` | Primary surface, headings, brand header/footer |
| On Primary | `#FFFFFF` | `--color-primary-foreground` | Text on Deep Indigo |
| Brand Accent (Torii Red) | `#D93829` | `--color-torii` / `--color-accent` | Primary CTA buttons, step badges, active highlights |
| Brand Accent Hover | `#B82D20` | `--color-torii-dark` | Hover/active state for Torii Red CTAs |
| On Accent | `#FFFFFF` | `--color-accent-foreground` | Text on Torii Red |
| Background | `#FFFFFF` | `--color-background` | Main page background |
| Surface / Muted | `#F8F9FA` | `--color-surface` / `--color-muted` | Alternating section background & cards |
| Foreground | `#1B2A4A` | `--color-foreground` | Primary body and heading text |
| Muted Foreground | `#475569` | `--color-muted-foreground` | Secondary text (≥ 4.5:1 contrast on `#FFFFFF` and `#F8F9FA`) |
| Border | `#E2E8F0` | `--color-border` | Card and accordion dividers |
| Ring | `#D93829` | `--color-ring` | Keyboard `:focus-visible` indicator |

## Typography
- **Heading (`--font-display`):** Plus Jakarta Sans (`600`, `700`, `800`)
- **Body (`--font-sans`):** Inter (`400`, `500`, `600`)
- **Scale & Measure:** Base `16px` (`1rem`), line-height `1.65`, comfortable measure (`60ch–70ch`).

## Accessibility & Responsive Rules
- Mobile-first from `375px` up to `1440px` (`sm:`, `md:`, `lg:`, `xl:`).
- Zero horizontal overflow (`document.documentElement.scrollWidth <= window.innerWidth`).
- Minimum touch target `44×44px` (`min-h-11` / `min-h-12`) on all interactive controls.
- Visible `:focus-visible` outline (`3px solid #D93829`, offset `3px`).
- Respect `prefers-reduced-motion: reduce`.
- SVG icons for UI controls; Japanese characters (`あ`, `学`, `働`, `縁`) used purely as decorative visual accents (`aria-hidden="true"`).
