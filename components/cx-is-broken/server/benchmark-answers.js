import { neon } from "@neondatabase/serverless";

const challenges = [
  "Turning customer insight into action",
  "Empowering frontline employees to resolve customer issues",
  "Getting other departments to take ownership of customer experience",
  "Limited budget or resources",
  "Too many disconnected tools or platforms",
  "Proving the ROI of customer experience",
  "Ineffective customer experience platforms",
  "Breaking down organisational silos",
  "None of the above",
];

const resolutionTimes = [
  "1 day or less",
  "2 to 3 days",
  "4 to 6 days",
  "1 to 2 weeks",
  "2 to 3 weeks",
  "3 to 4 weeks",
  "1 to 2 months",
  "2 to 3 months",
  "3 to 6 months",
  "More than 6 months",
  "It is rarely or never fully resolved",
  "Don't know / not applicable",
];

const teamTime = [
  "Responding to customer issues and complaints",
  "Managing customer experience platforms and technology",
  "Analysing customer insight and reporting",
  "Supporting frontline teams",
  "Collecting customer feedback",
  "Driving operational improvements across the business",
  "Demonstrating the value and ROI of customer experience",
  "Other",
  "Don't know / not applicable",
];

const ratings = [
  "Excellent",
  "Good",
  "Average",
  "Poor",
  "Very poor",
  "Don't know",
  "We don't currently use a CX platform",
];

const ratingIds = [
  "insight",
  "ownership",
  "frontline",
  "connected",
  "resolution",
  "prevention",
];

const improvements = [
  "Turn insight into action faster",
  "Give every issue a clear owner",
  "Help frontline teams resolve more issues",
  "Connect teams and departments",
  "Make sure issues are resolved",
  "Prevent recurring customer problems",
  "None of the above",
];

function readAnswer(input, index) {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return undefined;
  }

  if (Object.hasOwn(input, index)) {
    return input[index];
  }

  const key = String(index);

  if (Object.hasOwn(input, key)) {
    return input[key];
  }

  return undefined;
}

function asChoice(value, allowed) {
  if (typeof value !== "string" || !allowed.includes(value)) {
    return null;
  }

  return value;
}

function asChoices(value, allowed, max) {
  if (!Array.isArray(value) || value.length === 0 || value.length > max) {
    return null;
  }

  const chosen = [];

  for (const item of value) {
    const choice = asChoice(item, allowed);

    if (!choice || chosen.includes(choice)) {
      return null;
    }

    chosen.push(choice);
  }

  if (chosen.includes("None of the above") && chosen.length > 1) {
    return null;
  }

  return chosen;
}

export function normaliseBenchmarkAnswers(input) {
  const selectedChallenges = asChoices(
    readAnswer(input, 0),
    challenges,
    challenges.length,
  );
  const resolutionTime = asChoice(readAnswer(input, 1), resolutionTimes);
  const whereTimeGoes = asChoice(readAnswer(input, 2), teamTime);
  const selectedImprovements = asChoices(readAnswer(input, 9), improvements, 3);
  const areaRatings = {};

  if (
    !selectedChallenges ||
    !resolutionTime ||
    !whereTimeGoes ||
    !selectedImprovements
  ) {
    return null;
  }

  for (let index = 0; index < ratingIds.length; index += 1) {
    const rating = asChoice(readAnswer(input, index + 3), ratings);

    if (!rating) {
      return null;
    }

    areaRatings[ratingIds[index]] = rating;
  }

  return {
    challenges: selectedChallenges,
    resolutionTime,
    whereTimeGoes,
    ratings: areaRatings,
    improvements: selectedImprovements,
  };
}

export async function saveBenchmarkAnswers(answers) {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error("Database is not configured.");
  }

  const sql = neon(databaseUrl);

  await sql`INSERT INTO benchmark_answers (answers) VALUES (${JSON.stringify(answers)}::jsonb)`;
}

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { success: false, message: "Those answers could not be saved." },
      { status: 400 },
    );
  }

  const answers = normaliseBenchmarkAnswers(body?.answers);

  if (!answers) {
    return Response.json(
      { success: false, message: "Those answers could not be saved." },
      { status: 400 },
    );
  }

  try {
    await saveBenchmarkAnswers(answers);
  } catch {
    return Response.json(
      { success: false, message: "Those answers could not be saved." },
      { status: 500 },
    );
  }

  return Response.json({ success: true });
}
