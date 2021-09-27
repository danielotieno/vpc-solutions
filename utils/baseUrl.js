const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://vpc-solutions.vercel.app/'
    : 'http://localhost:3000';

export default baseUrl;
