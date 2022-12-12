import { useState } from 'react'
import { spacing, Stack } from '@mui/system'
import User from './User'
import { Box, Grid, Button, Typography } from '@mui/material'
import { Modal } from '@mui/material'
import useSwr from 'swr'
import Router from 'next/router'

import Chip from '@mui/material/Chip'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Image from 'mui-image'
import Link from 'next/link'

import Tooltip from '@mui/material/Tooltip'
import Fab from '@mui/material/Fab'

import EditIcon from '@mui/icons-material/Edit'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import ReplyIcon from '@mui/icons-material/Reply'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import NumbersRoundedIcon from '@mui/icons-material/NumbersRounded'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import SkipNextIcon from '@mui/icons-material/SkipNext'

function UserList({ teamMates }) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'primary.main',
    border: '2px solid #000',
    borderRadius: '16px',
    boxShadow: 24,
    color: 'primary.contrastText',
    p: 4,
  }

  const [record, setRecord] = useState([''])

  const fetchSelectedRecord = () => {
    return fetch('api/randomUser')
      .then((response) => response.json())
      .then((record) => {
        setRecord(record)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const confirmUser = () => {
    return fetch(`api/user/${record[0]?.id}`)
      .then((response) => response.json())
      .catch((error) => {
        console.log(error)
      })
  }

  const handleButtonClick = () => {
    fetchSelectedRecord()
    handleOpen()
    console.log(record)
  }

  const handleConfirm = () => {
    confirmUser()
    handleClose()
    Router.reload()
  }

  return (
    <Stack
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
      gap={5}
    >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack sx={style} gap={2.5}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign={'center'}
            mb={2}
          >
            Vybrali jste si kolegu! <br />
            <Typography variant="h5" fontWeight={'bold'}>
              {record[0]?.name}
            </Typography>
          </Typography>
          <Stack
            direction={'row'}
            spacing={2}
            alignContent={'center'}
            justifyContent={'center'}
          >
            <Fab
              color="error"
              aria-label=""
              variant="extended"
              fontWeight="bold"
              sx={{ border: '1px solid #000' }}
              onClick={handleButtonClick}
            >
              ... Ale to jsem já
            </Fab>
            <Fab
              color="primary"
              aria-label=""
              variant="extended"
              onClick={confirmUser}
              sx={{ border: '1px solid #000' }}
            >
              <CheckRoundedIcon />
              Potvrdit
            </Fab>
          </Stack>
        </Stack>
      </Modal>
      <Grid
        container
        rowSpacing={{ xs: 1, sm: 2, md: 3 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        maxWidth={'100rem'}
        sx={{ alignItems: '', justifyContent: 'center', flex: '1' }}
      >
        {teamMates?.map((user) => (
          <Grid item xs={10} sm={5} md={3} key={user.id}>
            <User
              id={user.id}
              name={user.name}
              description={user.description}
              photo={user.photo}
              isTaken={user.isTaken}
            />
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" color="primary" onClick={handleButtonClick}>
        Vybrat
      </Button>
    </Stack>
  )
}

export default UserList
