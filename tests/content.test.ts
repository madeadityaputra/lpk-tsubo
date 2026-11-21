import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  FAQ_ITEMS,
  GALLERY_ITEMS,
  HERO_CONTENT,
  PROGRAMS,
  REGISTRATION_STEPS,
  SITE_IDENTITY,
  TRUST_STATS,
  buildLocalBusinessJsonLd,
  buildMapEmbedUrl,
  buildSeoMetadata,
  resolveActionHref,
} from "../lib/content.ts";

describe("LPK Tsubo JLTC identity, SEO, and actions seam", () => {
  it("builds SEO metadata containing local target keywords", () => {
    const meta = buildSeoMetadata();
    assert.match(String(meta.title), /kursus bahasa jepang bandar lampung/i);
    assert.match(String(meta.description), /lpk lampung/i);
  });

  it("builds LocalBusiness JSON-LD with address and hours, and zero rating leakage", () => {
    const jsonLd = buildLocalBusinessJsonLd();
    const serialized = JSON.stringify(jsonLd);
    assert.equal(jsonLd["@type"], "EducationalOrganization");
    assert.equal(jsonLd.address.postalCode, "35215");
    assert.equal(jsonLd.openingHoursSpecification[0].opens, "09:00");
    assert.doesNotMatch(serialized, /aggregateRating|ratingValue/i);
  });

  it("builds Google Maps embed URL from SITE_IDENTITY", () => {
    const url = buildMapEmbedUrl();
    assert.ok(url.startsWith("https://www.google.com/maps?q="));
    assert.ok(url.endsWith("&output=embed"));
    assert.match(decodeURIComponent(url), /35215/);
  });

  it("resolves every ActionId to the right external destination and WA prefill", () => {
    assert.equal(
      resolveActionHref("formSiswaBaru"),
      "https://forms.gle/tjynDQ9e8PTaGZ266"
    );
    assert.equal(
      resolveActionHref("formBimbel"),
      "https://forms.gle/d415TUG1aKJhPXXb7"
    );
    assert.match(
      resolveActionHref("waAdmin1Trial"),
      /^https:\/\/wa\.me\/6282175424599\?text=/
    );
    assert.match(
      resolveActionHref("waAdmin2Umum"),
      /^https:\/\/wa\.me\/6282118255576\?text=/
    );
  });

  it("enforces GLOSSARY.md _Avoid_ terms across all Calon Siswa copy", () => {
    const corpus = JSON.stringify({
      SITE_IDENTITY,
      HERO_CONTENT,
      TRUST_STATS,
      PROGRAMS,
      REGISTRATION_STEPS,
      GALLERY_ITEMS,
      FAQ_ITEMS,
    });
    const forbidden = [
      /\bTsubo School\b/i,
      /\bTsubo Academy\b/i,
      /\bTerakreditasi\b/i,
      /\bresmi dikirim\b/i,
      /\bLes Jepang\b/i,
      /\bMagang\b/i,
      /\bTKI\b/i,
      /\bPenyaluran kerja\b/i,
    ];
    for (const pattern of forbidden) {
      assert.doesNotMatch(corpus, pattern, `Forbidden glossary term: ${pattern}`);
    }
  });
});
