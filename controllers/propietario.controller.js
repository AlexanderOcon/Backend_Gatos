import db from "../firebase.js";

export const registrarPropietario = async (req, res) => {
  try {
    const { nombre, email, telefono, direccion } = req.body;

    if (!nombre || !email) {
      return res.status(400).json({
        mensaje: "Los campos obligatorios son: nombre y email.",
      });
    }

    const docRef = await db.collection("propietarios").add({
      nombre,
      email,
      telefono: telefono || null,
      direccion: direccion || null,
      fechaRegistro: new Date().toISOString(),
    });

    const mensaje = `Propietario registrado con éxito. ID: ${docRef.id} | Nombre: ${nombre} | Email: ${email}`;

    res.json({ mensaje, id: docRef.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al guardar en Firebase: " + error.message });
  }
};
