import { useState, useEffect } from 'react'
import { Stack, Box, Button, Typography } from '@mui/material'
import prisma from '../lib/prisma'
import Modal from '@mui/material/Modal'
import useSwr from 'swr'

import UserList from '../components/UserList.tsx'
import Countdowner from '../components/Countdowner'

import React from 'react'
import { GetServerSideProps } from 'next'
import Router from 'next/router'

export default function Home({ team }) {
  console.log(team)

  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
      p={10}
    >
      <Stack
        maxWidth={'1080px'}
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'column'}
        gap={5}
      >
        <Stack
          maxWidth={'70%'}
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'column'}
          gap={2}
        >
          <Typography variant="h2" className="name" fontWeight={'bold'}>
            Secret Santa v CRLN
          </Typography>
          <Stack
            direction={'row'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={1}
            px={2}
            py={1}
            fontWeight={'600'}
            sx={{ backgroundColor: '#FFCC01', color: 'black' }}
          >
            <Typography variant="body2">Setkání u vánoční větve: </Typography>
            <Countdowner />
          </Stack>
          <Typography variant="body2" textAlign={'center'}>
            Twas the night before Christmas, at CRLN in Pilsen, Where Ondra,
            Markéta, Tadeáš and Štěpánka were busy as elves. With projects and
            tasks they worked away, Hoping to finish before the big day. But
            despite their hard work and dedication, They couldn't help but feel
            a bit of elation. For Christmas was a time for joy and cheer, And
            spending time with loved ones near. So they took a break, and raised
            a glass, Toasting to a successful year that's past. And as they
            shared stories and laughed with glee, They knew that this was the
            best Christmas to be. Here's to CRLN, and all that you do, Bringing
            joy and happiness to me and to you. Merry Christmas, and a happy new
            year, From your team at CRLN, oh so dear.
          </Typography>
        </Stack>
        <UserList teamMates={team} />
      </Stack>
    </Box>
  )
}

export async function getStaticProps() {
  const team = await prisma.team.findMany()
  return { props: { team } }
}
