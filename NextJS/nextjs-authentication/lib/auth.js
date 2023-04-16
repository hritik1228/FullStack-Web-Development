import { compare, hash } from "bcryptjs";

export async function hashPassword(password) {
    // 12 the higher the number the more secure it is
    const hashedPassword = await hash(password, 12);
    return hashedPassword
}

export async function verifyPassword(password, hashedPassword) {
    const isValid = await compare(password, hashedPassword);
    return isValid;
}