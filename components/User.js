import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import { styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import Link from 'next/link'
import { Modal } from '@mui/material'
import { useRouter } from 'next/router'
import toast, { ToastContainer } from 'react-toastify'

import Tooltip from '@mui/material/Tooltip'
import Fab from '@mui/material/Fab'
import { borderRadius } from '@mui/system'

export default function User({ id, name, description, photo, isTaken }) {
  const router = useRouter()

  const theme = useTheme()

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const numId = parseInt(id)

  const handleDelete = async () => {
    const data = await fetch(`/api/memes?id=${numId}`, {
      method: 'DELETE',
    })
    router.reload(window.location.pathname)
  }

  const myLoader = ({ src, width, quality }) => {
    return `${photo}`
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backdropFilter: 'blur(12px)',
        borderRadius: '20px',
        border: '2px solid rgba(0, 0, 0, 1)',
        boxShadow: 3,
        padding: 2,
      }}
    >
      <ToastContainer />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Box sx={{ flex: '1 0 auto' }}>
            <Stack spacing={1}>
              <Stack direction={'row'} spacing={1}>
                <Stack
                  direction={'row'}
                  backgroundColor="primary.main"
                  justifyContent={'center'}
                  alignItems={'center'}
                  flexDirection={'column'}
                  sx={{
                    borderRadius: '10px',
                    px: 1,
                    py: 0.2,
                  }}
                >
                  {isTaken ? (
                    <Typography variant="body2" color="black">
                      ZABRÁNO
                    </Typography>
                  ) : (
                    <Typography variant="body2" color="initial"></Typography>
                  )}
                </Stack>
              </Stack>
              <Typography
                sx={{ fontWeight: 'medium', fontFamily: 'Roboto' }}
                component="div"
                variant="h5"
              >
                {name}
              </Typography>
              <Typography variant="body2">{description}</Typography>
            </Stack>
          </Box>
          <Box
            padding={3}
            sx={{
              position: 'absolute',
              right: '0',
              bottom: '0',
              display: 'flex',
              flexDirection: 'row',
            }}
          ></Box>
        </Box>
        <Box mt={2}>
          <Image
            alt=""
            loader={myLoader}
            src={photo}
            width={200}
            height={200}
            sx={{ borderRadius: '10px', border: '2px solid rgba(0, 0, 0, 1)' }}
          />
        </Box>
      </Box>
    </Box>
  )
}
