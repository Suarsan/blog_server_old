import bcrypt from 'bcrypt';

const hash = async(data, rounds) => {
    return await bcrypt.hash(data, rounds ? rounds : 12);
}
const compareHash = async(hash1, hash2) => {
    return await bcrypt.compare(hash1, hash2);
}
export const security = {
    hash,
    compareHash
};