export const getUser = () => ({
  uid: "ABC123",
  username: "Rome",
});


// Tarea
export const getUserActive = (name) => ({
  uid: "ABC567",
  username: name,
});

const usuarioActivo = getUserActive("Fernando");
