"use client";

import React from "react";

export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto p-8 mt-20">
      <h1 className="text-4xl font-bold mb-6 text-center">Política de Privacidad</h1>

      <div className="space-y-8 text-justify text-sm md:text-base">
        <section>
          <h2 className="text-2xl font-semibold mb-2">1. Introducción</h2>
          <p>
            En Xenni nos comprometemos a proteger la privacidad de nuestros usuarios. Esta política describe cómo
            recopilamos, usamos, almacenamos y protegemos la información personal que nos proporcionas al utilizar
            nuestra plataforma educativa.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">2. Información que Recopilamos</h2>
          <ul className="list-disc list-inside pl-4">
            <li>Datos personales: nombre, correo electrónico, país, institución o afiliación académica.</li>
            <li>Datos de acceso: dirección IP, tipo de navegador, sistema operativo y logs de actividad.</li>
            <li>Datos educativos: progreso, entregables, participación en clases o bootcamps.</li>
            <li>Información de wallets: dirección pública (nunca almacenamos claves privadas).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">3. Uso de la Información</h2>
          <p>Utilizamos tu información para:</p>
          <ul className="list-disc list-inside pl-4">
            <li>Gestionar tu inscripción y progreso en los programas educativos.</li>
            <li>Emitir certificados, tokens educativos o recompensas gamificadas.</li>
            <li>Mejorar la calidad del contenido y la experiencia de usuario.</li>
            <li>Enviar comunicaciones relevantes (avisos, eventos, recordatorios).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">4. Almacenamiento y Seguridad</h2>
          <p>
            Tus datos se almacenan en servicios en la nube con altos estándares de seguridad. Usamos cifrado, controles
            de acceso y prácticas de desarrollo seguro para proteger tu información. No compartimos tus datos con
            terceros sin tu consentimiento explícito, salvo obligación legal.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">5. Uso de Blockchain</h2>
          <p>
            Algunas funciones de la plataforma, como certificados o tokens, se registran en blockchain. Al tratarse de
            tecnologías descentralizadas, estos datos son públicos y permanentes. Al utilizar estas funciones, aceptas
            esta condición inherente a la tecnología Web3.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">6. Derechos del Usuario</h2>
          <p>Tienes derecho a:</p>
          <ul className="list-disc list-inside pl-4">
            <li>Acceder a tus datos personales almacenados por Xenni.</li>
            <li>Solicitar la corrección o eliminación de tu información.</li>
            <li>Revocar tu consentimiento para comunicaciones no esenciales.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">7. Cookies y Herramientas de Terceros</h2>
          <p>
            Podemos usar cookies para mejorar tu experiencia de navegación. También podemos usar herramientas de análisis
            (como Google Analytics) para entender el uso de la plataforma. Puedes configurar tu navegador para limitar
            este tipo de seguimiento.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">8. Cambios en la Política</h2>
          <p>
            Nos reservamos el derecho de modificar esta política para reflejar cambios legales o técnicos. Te
            notificaremos a través de la plataforma cuando se realicen modificaciones importantes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">9. Contacto</h2>
          <p>
            Para ejercer tus derechos o consultar sobre esta política, contáctanos a:
            <a href="mailto:privacidad@xenni.xyz" className="text-blue-600 underline ml-1">
              contact@xenni.xyz
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
