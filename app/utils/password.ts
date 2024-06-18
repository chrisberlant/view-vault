import bcryptjs from 'bcryptjs';

export const hashPassword = async (text: string) =>
	await bcryptjs.hash(text, parseInt(process.env.SALT_ROUNDS!));
