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
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import classes from './Login.module.css';

export default function Login() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const router = useRouter();
  const [email, setEmail] = useState<undefined | string>(undefined);

  const onClickHandler = () => {
    const maxRetries = 3;

    // eslint-disable-next-line consistent-return
    if (email !== undefined && email.length > 0) {
      // eslint-disable-next-line consistent-return
      const fetchData = async (url: string, options: RequestInit, attempt = 0): Promise<void> => {
        try {
          const response = await fetch(url, options);
          const data = await response.json();
          console.log(data);
          router.replace('/');
        } catch (error) {
          console.error(`Attempt ${attempt + 1} failed`, error);
          if (attempt < maxRetries) {
            return fetchData(url, options, attempt + 1);
          }
          console.error('Max retries exceeded', error);
        }
      };
      const options: RequestInit = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      };
      fetchData('/login/api', options);
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
