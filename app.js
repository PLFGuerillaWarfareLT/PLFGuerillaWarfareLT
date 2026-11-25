const plans = [
  ["CLONE THE FIRST IDEA.", "The first draft is the decoy. The second draft is the real one."],
  ["SHIP IT BEFORE THEY NOTICE.", "Move fast. Ask for forgiveness. Ask again, twice."],
  ["MAKE ONE MORE VERSION.", "One version for the user. One version for the imaginary critic."],
  ["TURN THE BUG INTO A FEATURE.", "It wasn't an accident. It was an advanced surprise."],
  ["SAVE EVERYONE. THEN THE FILE.", "Protect the people, preserve the localStorage, forget the branches."]
];

const verbs = ["RESCUE", "REMIX", "REBUILD", "CLONe", "PROTECT"];
let count = 1;

const idea = document.querySelector("#idea-input");
const jinA = document.querySelector("#jin-a");
const jinASub = document.querySelector("#jin-a-sub");
const jinB = document.querySelector("#jin-b");
const jinBSub = document.querySelector("#jin-b-sub");
const countLabel = document.querySelector("#count");

function generate() {
  const seed = idea.value.trim() || "A mysterious idea";
  const plan = plans[Math.floor(Math.random() * plans.length)];
  const verb = verbs[Math.floor(Math.random() * verbs.length)].replace("CLONe", "CLONE");

  jinA.textContent = `${verb} “${seed}”!`;
  jinASub.textContent = plan[1];
  jinB.textContent = plan[0];
  jinBSub.textContent = `Yes, ${seed} — but with better shoes.`;
  count++;
  countLabel.textContent = `NO. ${String(count).padStart(3, "0")}`;
}

async function copyPlan() {
  const text = `${jinA.textContent}\n${jinASub.textContent}\n${jinB.textContent}\n${jinBSub.textContent}`;
  try {
    await navigator.clipboard.writeText(text);
    const button = document.querySelector("#copy");
    button.textContent = "COPIED";
    setTimeout(() => (button.textContent = "COPY"), 1000);
  } catch {
    alert("Could not copy. The other Jin is holding the clipboard.");
  }
}

document.querySelector("#generate").addEventListener("click", generate);
document.querySelector("#copy").addEventListener("click", copyPlan);
