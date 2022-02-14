const __dev__ = process.env.NODE_ENV === 'development';
const __prod__ = process.env.NODE_ENV === 'production';

export { __dev__, __prod__ };
