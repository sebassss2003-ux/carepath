"use client";

import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(0);
  const [instruction, setInstruction] = useState("");
  const [path, setPath] = useState("");
  const [questions, setQuestions] = useState("");
  const [saved, setSaved] = useState(false);

  function organizeInstruction() {
    if (!instruction.trim()) return;
    setQuestions(
      "1. ¿Cuál es el siguiente paso indicado por mi profesional de salud?\n2. ¿En qué fecha debo realizarlo?\n3. ¿Necesito algún documento o estudio adicional?\n4. ¿Con quién puedo comunicarme si tengo dudas?"
    );
    setStep(1);
  }

  function savePlan() {
    const plan = {
      instruction,
      path,
      questions,
      date: new Date().toLocaleDateString("es-MX"),
    };

    localStorage.setItem("carepath-demo-plan", JSON.stringify(plan));
    setSaved(true);
  }

  const button =
    "w-full rounded-xl bg-teal-700 px-5 py-3 font-semibold text-white hover:bg-teal-800 disabled:opacity-40";

  const secondary =
    "w-full rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-100";

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-800">
      <header className="mx-auto flex max-w-4xl items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">CarePath+</h1>
        <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-bold text-teal-800">
          DEMO SIMULADA
        </span>
      </header>

      <section className="mx-auto mt-12 max-w-xl rounded-2xl bg-white p-7 shadow-lg sm:p-10">
        {step === 0 && (
          <>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-teal-700">
              Acompañamiento después de un resultado
            </p>
            <h2 className="mb-5 text-3xl font-bold text-slate-900">
              Tu siguiente paso, con más claridad.
            </h2>
            <p className="mb-6 leading-relaxed text-slate-600">
              Recibir un resultado médico puede generar dudas. CarePath te
              ayuda a organizar la información que ya recibiste de tu
              profesional de salud y preparar lo que sigue.
            </p>
            <div className="mb-7 rounded-xl border-l-4 border-teal-700 bg-teal-50 p-4 text-sm">
              <strong>Antes de comenzar</strong>
              <p className="mt-2">
                CarePath no diagnostica, interpreta resultados ni recomienda
                tratamientos. La información de este prototipo es ficticia.
              </p>
            </div>
            <button className={button} onClick={() => setStep(0)}>
              Comenzar
            </button>
            <button
              className={`${secondary} mt-3`}
              onClick={() => setStep(1)}
            >
              Continuar al registro de instrucciones
            </button>
          </>
        )}

        {step === 1 && (
          <>
            <p className="mb-2 text-sm font-semibold text-teal-700">
              PASO 1 · TU INFORMACIÓN
            </p>
            <h2 className="mb-3 text-2xl font-bold">¿Qué te indicó tu médico?</h2>
            <p className="mb-5 text-slate-600">
              Copia o escribe las instrucciones que recibiste de tu
              profesional de salud.
            </p>
            <textarea
              className="min-h-36 w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-teal-700"
              maxLength={500}
              value={instruction}
              onChange={(e) => setInstruction(e.target.value)}
              placeholder="Escribe aquí las indicaciones que recibiste..."
            />
            <p className="mb-5 text-right text-xs text-slate-500">
              {instruction.length}/500 caracteres
            </p>
            <button className={button} disabled={!instruction.trim()} onClick={organizeInstruction}>
              Organizar mis siguientes pasos
            </button>
            <button className={`${secondary} mt-3`} onClick={() => setStep(0)}>
              Regresar
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <p className="mb-2 text-sm font-semibold text-teal-700">
              PASO 2 · PREPARACIÓN
            </p>
            <h2 className="mb-4 text-2xl font-bold">Preguntas que puedes hacer</h2>
            <p className="mb-4 text-sm text-slate-600">
              Estas preguntas son una guía general para conversar con tu
              profesional de salud. No son una interpretación médica.
            </p>
            <pre className="whitespace-pre-wrap rounded-xl bg-slate-50 p-4 font-sans leading-7 text-slate-700">
              {questions}
            </pre>
            <button className={`${button} mt-5`} onClick={() => setStep(3)}>
              Ver opciones de atención
            </button>
            <button className={`${secondary} mt-3`} onClick={() => setStep(1)}>
              Regresar
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <p className="mb-2 text-sm font-semibold text-teal-700">
              PASO 3 · OPCIONES
            </p>
            <h2 className="mb-4 text-2xl font-bold">¿Qué vía de atención prefieres explorar?</h2>
            <p className="mb-5 text-slate-600">
              Selecciona una opción para organizar tu plan. La disponibilidad
              y los costos deben confirmarse directamente con cada institución.
            </p>
            {["Atención pública", "Atención privada"].map((option) => (
              <button
                key={option}
                onClick={() => setPath(option)}
                className={`mb-3 w-full rounded-xl border p-4 text-left font-semibold ${
                  path === option
                    ? "border-teal-700 bg-teal-50 text-teal-900"
                    : "border-slate-300"
                }`}
              >
                {option}
              </button>
            ))}
            <button className={button} disabled={!path} onClick={() => setStep(4)}>
              Continuar
            </button>
            <button className={`${secondary} mt-3`} onClick={() => setStep(2)}>
              Regresar
            </button>
          </>
        )}

        {step === 4 && (
          <>
            <p className="mb-2 text-sm font-semibold text-teal-700">
              PASO 4 · TU PLAN
            </p>
            <h2 className="mb-4 text-2xl font-bold">Tu siguiente paso</h2>
            <div className="space-y-3 rounded-xl bg-slate-50 p-5">
              <p><strong>Instrucciones registradas:</strong></p>
              <p className="whitespace-pre-wrap text-slate-600">{instruction}</p>
              <p><strong>Vía seleccionada:</strong> {path}</p>
              <p><strong>Preguntas para tu profesional:</strong></p>
              <pre className="whitespace-pre-wrap font-sans text-slate-600">{questions}</pre>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              El plan se guarda únicamente en este navegador. No se envía a
              ningún servidor.
            </p>
            <button className={`${button} mt-5`} onClick={savePlan}>
              Guardar mi plan
            </button>
            {saved && (
              <p className="mt-4 rounded-lg bg-teal-50 p-3 text-sm text-teal-800">
                Tu plan se guardó correctamente en este dispositivo.
              </p>
            )}
            <button className={`${secondary} mt-3`} onClick={() => setStep(5)}>
              Contactar apoyo
            </button>
          </>
        )}

        {step === 5 && (
          <>
            <p className="mb-2 text-sm font-semibold text-teal-700">
              PASO 5 · APOYO
            </p>
            <h2 className="mb-4 text-2xl font-bold">No tienes que resolverlo todo solo.</h2>
            <p className="mb-5 leading-relaxed text-slate-600">
              Si tienes dudas sobre tus indicaciones, comunícate con el
              profesional o institución que te entregó el resultado.
            </p>
            <div className="rounded-xl bg-teal-50 p-4 text-sm">
              <strong>Recuerda:</strong> CarePath organiza información; no
              sustituye la orientación de profesionales de salud.
            </div>
            <button className={`${button} mt-5`} onClick={() => setStep(0)}>
              Volver al inicio
            </button>
          </>
        )}
      </section>

      <footer className="mx-auto mt-8 max-w-xl text-center text-xs text-slate-500">
        CarePath+ · Prototipo educativo · Información simulada · No proporciona
        diagnósticos ni recomendaciones médicas.
      </footer>
    </main>
  );
}
