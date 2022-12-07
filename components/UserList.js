import { spacing, Stack } from '@mui/system'
import User from './User'
import { Box, Grid, Button } from '@mui/material'

function UserList({ teamMates }) {
  
  const  


  function getRandomNumber() {
    
  }

  async function handleClick() {
    await fetch(`/api/handleTeam/${name}`)
    
  }

  return (
    <Stack display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={5}>

    <Grid
      container
      rowSpacing={{ xs: 1, sm: 2, md: 3 }}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      maxWidth={'100rem'}
      sx={{ alignItems: '', justifyContent: 'center', flex: '1'}}
    >
      {teamMates
        ?.slice(0)
        .map((user) => (
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
    <Button variant="contained" color="primary" onClick={handleClick}>
        Vybrat
      </Button>
    </Stack>

  )
}

export default UserList