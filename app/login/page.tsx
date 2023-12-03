/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-shadow */

'use client';

import {
  Paper,
  Title,
  Text,
  TextInput,
  Button,
  Container,
  Group,
  Anchor,
  Center,
  Box,
  rem,
} from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
// import { useCookies } from 'react-cookie';
// import { cookies } from 'next/headers';
import classes from './Login.module.css';
import { AuthContext } from '@/app/Context/context';

export default function Login() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const router = useRouter();
  const [email, setEmail] = useState<undefined | string>(undefined);
  const { setIsLoggedIn } = useContext(AuthContext);
  // const [cookie, setCookies] = useCookies(['isLoggedIn']);
  const onClickHandler = () => {
    // eslint-disable-next-line @typescript-eslint/no-shadow, @typescript-eslint/no-unused-vars
    if (email !== undefined && email.length > 0) {
      setIsLoggedIn(true);
      // setCookies('isLoggedIn', JSON.stringify(true), {
      //   path: '/',
      //   maxAge: 3600, // Expires after 1hr
      //   sameSite: true,
      // });
      router.push('/');
    }
  };

  return (
    <>
      <Container size={460} my={30}>
        <Title className={classes.title} ta="center">
          Welcome Back
        </Title>
        <Text c="dimmed" fz="sm" ta="center">
          Enter your email to log in
        </Text>
        <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
          <TextInput
            label="Your email"
            placeholder="me@mantine.dev"
            required
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <Group justify="space-between" mt="lg" className={classes.controls}>
            <Anchor c="dimmed" size="sm" className={classes.control}>
              <Center inline>
                <IconArrowLeft style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
                <Box ml={5}>Back to the Home page</Box>
              </Center>
            </Anchor>

            <Button
              className={classes.control}
              onClick={() => {
                onClickHandler();
              }}
            >
              Log In
            </Button>
          </Group>
        </Paper>
      </Container>
    </>
  );
}
