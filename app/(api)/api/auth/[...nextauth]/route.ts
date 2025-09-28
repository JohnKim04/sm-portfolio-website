import { Pool } from 'pg';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

const handler = NextAuth({
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60, // user will be logged in for 60 mins - Sauvikesh
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      credentials: {
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const response =
          await pool.query('SELECT * FROM page_passwords WHERE hashed_password = $1', [credentials?.password]);

        if (1 === response.rowCount) {
          return {
            id: response.rows[0].id,
            password: response.rows[0].hashed_password,
          };
        } else {
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
