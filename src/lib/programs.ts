import { promises as fs } from "fs";
import path from "path";

export type Program = {
  id: number;
  title: string;
  icon: string;
  description: string;
  duration: string;
  benefits: string[];
  format: string;
  investment: string;
};

const PROGRAMS_FILE_PATH = path.join(process.cwd(), "src", "data", "programs.json");

async function ensureProgramsFile(): Promise<void> {
  const dir = path.dirname(PROGRAMS_FILE_PATH);
  await fs.mkdir(dir, { recursive: true });

  try {
    await fs.access(PROGRAMS_FILE_PATH);
  } catch {
    await fs.writeFile(PROGRAMS_FILE_PATH, "[]\n", "utf8");
  }
}

export async function getPrograms(): Promise<Program[]> {
  await ensureProgramsFile();
  const raw = await fs.readFile(PROGRAMS_FILE_PATH, "utf8");

  try {
    const parsed = JSON.parse(raw) as Program[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function updatePrograms(programs: Program[]): Promise<Program[]> {
  const sanitized = programs.map((program, index) => ({
    id: Number(program.id) || index + 1,
    title: String(program.title || "").trim(),
    icon: String(program.icon || "📘").trim(),
    description: String(program.description || "").trim(),
    duration: String(program.duration || "").trim(),
    benefits: Array.isArray(program.benefits)
      ? program.benefits.map((item) => String(item).trim()).filter(Boolean)
      : [],
    format: String(program.format || "").trim(),
    investment: String(program.investment || "").trim(),
  }));

  await ensureProgramsFile();
  await fs.writeFile(PROGRAMS_FILE_PATH, `${JSON.stringify(sanitized, null, 2)}\n`, "utf8");
  return sanitized;
}
