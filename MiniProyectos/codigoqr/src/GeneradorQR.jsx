import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';

function GeneradorQR() {
    const [texto, setTexto] = useState("");

    // useRef: referencia al <canvas> donde se dibuja el QR
    const canvasRef = useRef(null);

    // useEffect: se ejecuta cada vez que cambia el texto
    // Genera el QR automáticamente
    useEffect(() => {
        if (!texto) return; // si no hay texto, no genera nada

        // QRCode.toCanvas: dibuja el código QR dentro del canvas
        QRCode.toCanvas(canvasRef.current, texto, (error) => {
            if (error) console.error(error);
        });
    }, [texto]); // ← se actualiza cada vez que cambia "texto"

    return (
        <div className="container mt-5">
            <div className="card shadow p-4">
                <h2 className="text-center text-primary mb-3">
                    Generador de Código QR
                </h2>

                {/* Campo de texto */}
                <div className="mb-3">
                    <label className="form-label fw-bold">Escribe algo:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ejemplo: https://miweb.com"
                        value={texto}
                        onChange={(e) => setTexto(e.target.value)} // actualiza el estado
                    />
                </div>

                {/* Vista previa del QR */}
                <div className="text-center">
                    {/* Si no hay texto, muestra mensaje */}
                    {!texto ? (
                        <p className="text-muted">Escribe algo para generar el código QR</p>
                    ) : (
                        <canvas ref={canvasRef} className="border rounded" />
                    )}
                </div>
            </div>
        </div>
    );
}

export default GeneradorQR;