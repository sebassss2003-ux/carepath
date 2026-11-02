
let selectedPath = "";
let currentInstruction = "";

function showScreen(screenId) {
  const screens = document.querySelectorAll(".screen");

  screens.forEach(screen => {
    screen.classList.remove("active");
  });

  const selectedScreen = document.getElementById(screenId);

  if (selectedScreen) {
    selectedScreen.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function organizeInstruction() {
  const input = document.getElementById("instruction");
  const error = document.getElementById("inputError");

  const instruction = input.value.trim();

  error.textContent = "";

  if (instruction.length < 10) {
    error.textContent = "Escribe una instrucción de al menos 10 caracteres.";
    input.focus();
    return;
  }

  if (instruction.length > 500) {
    error.textContent = "La instrucción no puede superar 500 caracteres.";
    input.focus();
    return;
  }

  currentInstruction = instruction;

  document.getElementById("instructionOutput").textContent =
    currentInstruction;

  showScreen("next");
}

function selectPath(path) {
  selectedPath = path;

  document.getElementById("pathError").textContent = "";

  document.querySelectorAll(".option").forEach(option => {
    option.style.borderColor = "";
    option.style.background = "";
  });

  const selectedButton = event.currentTarget;
  selectedButton.style.borderColor = "#176b68";
  selectedButton.style.background = "#eaf3f2";
}

function continueToPlan() {
  const error = document.getElementById("pathError");

  if (!selectedPath) {
    error.textContent = "Selecciona una ruta de atención para continuar.";
    return;
  }

  error.textContent = "";

  document.getElementById("selectedPath").textContent = selectedPath;
  document.getElementById("planInstruction").textContent =
    currentInstruction;

  showScreen("plan");
}

function savePlan() {
  const notes = document.getElementById("notes").value.trim();
  const message = document.getElementById("saveMessage");

  if (notes.length > 500) {
    message.textContent = "Tus notas no pueden superar 500 caracteres.";
    return;
  }

  const plan = {
    instruction: currentInstruction,
    pathway: selectedPath,
    notes: notes,
    savedAt: new Date().toISOString()
  };

  try {
    localStorage.setItem("carepath_demo_plan", JSON.stringify(plan));

    message.textContent =
      "Tu plan se guardó en este navegador. Esta demostración no envía información a un servidor.";
  } catch (error) {
    message.textContent =
      "No fue posible guardar el plan en este navegador.";
  }
}
