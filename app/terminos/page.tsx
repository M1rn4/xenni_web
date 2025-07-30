"use client";

import React from "react";

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto p-8 mt-20">
      <h1 className="text-4xl font-bold mb-6 text-center">Términos y Condiciones</h1>

      <div className="space-y-8 text-justify text-sm md:text-base">
        <section>
          <h2 className="text-2xl font-semibold mb-2">1. Aceptación de los Términos</h2>
          <p>
            Al registrarte y utilizar los servicios ofrecidos por Xenni, aceptas cumplir con los presentes
            términos y condiciones. Si no estás de acuerdo con alguno de ellos, debes abstenerte de utilizar la plataforma.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">2. Descripción del Servicio</h2>
          <p>
            Xenni es una plataforma educativa basada en tecnologías emergentes, que ofrece bootcamps y experiencias de aprendizaje gamificadas sobre blockchain, Web3 y otros temas. Al finalizar ciertos programas, los usuarios pueden recibir certificados digitales (NFTs) y recompensas en tokens educativos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">3. Registro y Cuentas</h2>
          <p>
            Para acceder a ciertos servicios, deberás crear una cuenta con datos verídicos. Eres responsable de mantener la confidencialidad de tus credenciales. Xenni no se responsabiliza por accesos no autorizados debido a negligencia del usuario.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">4. Contenido Educativo</h2>
          <p>
            Todos los contenidos proporcionados (videos, presentaciones, código, documentación) son propiedad intelectual de Xenni o sus aliados. No está permitida su reproducción, distribución o uso comercial sin autorización expresa.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">5. Certificaciones y Recompensas</h2>
          <p>
            Los certificados emitidos a través de la plataforma tienen valor simbólico o formativo. Los tokens o puntos otorgados como parte de la gamificación no representan valor financiero ni obligación de redención, salvo que Xenni indique lo contrario en sus promociones oficiales.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">6. Wallets y Blockchain</h2>
          <p>
            Al utilizar wallets compatibles para recibir certificados o tokens, el usuario acepta los riesgos inherentes al uso de tecnología blockchain. Xenni no se hace responsable por pérdidas derivadas de errores de custodia, acceso o incompatibilidad de wallets.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">7. Uso Adecuado y Conducta</h2>
          <p>
            Se espera que los usuarios se comporten con respeto en foros, clases y comunicaciones internas. No se tolerará contenido ofensivo, spam o violaciones de las normas de convivencia. Xenni se reserva el derecho de suspender cuentas que infrinjan esta política.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">8. Modificaciones</h2>
          <p>
            Xenni se reserva el derecho de modificar los presentes Términos en cualquier momento. Se notificará a los usuarios mediante los canales oficiales. El uso continuo de la plataforma implica la aceptación de los nuevos términos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">9. Limitación de Responsabilidad</h2>
          <p>
            Xenni no garantiza que la plataforma esté libre de errores o interrupciones. En ningún caso será responsable por daños directos, indirectos o consecuentes derivados del uso o imposibilidad de uso del servicio.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">10. Jurisdicción y Legislación Aplicable</h2>
          <p>
            Estos términos se rigen por las leyes de Perú. Cualquier disputa que surja del uso de la plataforma será resuelta en los tribunales competentes del distrito judicial de Lima Metropolitana, salvo que se establezca lo contrario en convenios posteriores.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">11. Contacto</h2>
          <p>
            Para consultas relacionadas con estos Términos y Condiciones, puedes contactarnos al correo electrónico:
            <a href="mailto:contacto@xenni.xyz" className="text-blue-600 underline ml-1">
              contacto@xenni.xyz
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
