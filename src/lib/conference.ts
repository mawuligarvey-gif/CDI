import { promises as fs } from "fs";
import path from "path";

export type ConferenceStat = {
  icon: "users" | "ticket" | "calendar";
  label: string;
  desc: string;
};

export type ConferenceScheduleItem = {
  time: string;
  event: string;
  hall: string;
};

export type ConferenceSpeaker = {
  name: string;
  role: string;
  image: string;
};

export type ConferenceFlyer = {
  title: string;
  imageUrl: string;
};

export type ConferenceContent = {
  title: string;
  subtitle: string;
  location: string;
  keyStats: ConferenceStat[];
  highlights: string[];
  schedule: ConferenceScheduleItem[];
  speakers: ConferenceSpeaker[];
  flyers: ConferenceFlyer[];
  ctaTitle: string;
  ctaText: string;
  ctaButtonText: string;
  ctaHref: string;
};

const CONFERENCE_FILE_PATH = path.join(process.cwd(), "src", "data", "conference.json");

async function ensureConferenceFile(): Promise<void> {
  const dir = path.dirname(CONFERENCE_FILE_PATH);
  await fs.mkdir(dir, { recursive: true });

  try {
    await fs.access(CONFERENCE_FILE_PATH);
  } catch {
    await fs.writeFile(
      CONFERENCE_FILE_PATH,
      `${JSON.stringify(
        {
          title: "Cultural Diplomat Impact Conference",
          subtitle: "",
          location: "",
          keyStats: [],
          highlights: [],
          schedule: [],
          speakers: [],
          flyers: [],
          ctaTitle: "Don't Miss Out",
          ctaText: "",
          ctaButtonText: "Register Today",
          ctaHref: "/apply",
        },
        null,
        2
      )}\n`,
      "utf8"
    );
  }
}

export async function getConferenceContent(): Promise<ConferenceContent> {
  await ensureConferenceFile();
  const raw = await fs.readFile(CONFERENCE_FILE_PATH, "utf8");
  return JSON.parse(raw) as ConferenceContent;
}

export async function updateConferenceContent(content: ConferenceContent): Promise<ConferenceContent> {
  const sanitized: ConferenceContent = {
    title: String(content.title || "").trim(),
    subtitle: String(content.subtitle || "").trim(),
    location: String(content.location || "").trim(),
    keyStats: Array.isArray(content.keyStats)
      ? content.keyStats
          .map((stat) => ({
            icon: stat.icon,
            label: String(stat.label || "").trim(),
            desc: String(stat.desc || "").trim(),
          }))
          .filter((stat) => stat.label)
      : [],
    highlights: Array.isArray(content.highlights)
      ? content.highlights.map((item) => String(item).trim()).filter(Boolean)
      : [],
    schedule: Array.isArray(content.schedule)
      ? content.schedule
          .map((item) => ({
            time: String(item.time || "").trim(),
            event: String(item.event || "").trim(),
            hall: String(item.hall || "").trim(),
          }))
          .filter((item) => item.time || item.event || item.hall)
      : [],
    speakers: Array.isArray(content.speakers)
      ? content.speakers
          .map((speaker) => ({
            name: String(speaker.name || "").trim(),
            role: String(speaker.role || "").trim(),
            image: String(speaker.image || "🎤").trim() || "🎤",
          }))
          .filter((speaker) => speaker.name)
      : [],
    flyers: Array.isArray(content.flyers)
      ? content.flyers
          .map((flyer) => ({
            title: String(flyer.title || "Conference Flyer").trim() || "Conference Flyer",
            imageUrl: String(flyer.imageUrl || "").trim(),
          }))
          .filter((flyer) => flyer.imageUrl)
      : [],
    ctaTitle: String(content.ctaTitle || "Don't Miss Out").trim() || "Don't Miss Out",
    ctaText: String(content.ctaText || "").trim(),
    ctaButtonText: String(content.ctaButtonText || "Register Today").trim() || "Register Today",
    ctaHref: String(content.ctaHref || "/apply").trim() || "/apply",
  };

  await ensureConferenceFile();
  await fs.writeFile(CONFERENCE_FILE_PATH, `${JSON.stringify(sanitized, null, 2)}\n`, "utf8");
  return sanitized;
}
