import bcrypt from "bcryptjs";

const plainPassword = "password123";
const hashed = bcrypt.hashSync(plainPassword, 10);

console.log("Hashed password:", hashed);
