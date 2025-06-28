import bcrypt from "bcryptjs";

// Versi hashPassword pakai .then()
export function hashPassword(password: string) {
  return bcrypt.hash(password, 10)
    .then((hash) => {
      return hash;
    })
    .catch((err) => {
      console.error("Hashing error:", err);
      throw err;
    });
}

// Versi comparePassword pakai .then()
export function comparePassword(inputPassword: string, hashedPassword: string) {
  return bcrypt.compare(inputPassword, hashedPassword)
    .then((isMatch) => {
      return isMatch;
    })
    .catch((err) => {
      console.error("Comparison error:", err);
      throw err;
    });
}
