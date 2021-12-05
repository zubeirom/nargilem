import NextAuth from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialProvider({
      name: 'credentials',
      credentials: {
        username: {
          label: 'Email',
          type: 'text',
          placeholder: 'johndoe@test.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      authorize: (credentials) => {
        // database look up
        if (
          credentials.username === 'john'
          && credentials.password === 'test'
        ) {
          return {
            id: 2,
            name: 'John',
            email: 'johndoe@test.com',
          };
        }

        // login failed
        return null;
      },
    }),
  ],
});
