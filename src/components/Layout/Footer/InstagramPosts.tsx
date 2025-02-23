import { Grid2 as Grid, Link, Stack } from '@mui/material'

export const InstagramPosts = () => {
  return (
    <Stack>
      <h2 className='text-white font-medium'>Síguenos en Instagram</h2>
      <Grid
        container
        spacing={4}
        columns={2}
        sx={{ mt: 8, maxWidth: 352 }}
      >
        <Grid size={1}>
          <Link
            href='https://www.instagram.com/p/C-tdio0ycWO/'
            target='_blank'
          >
            <img
              className='rounded-lg object-contain aspect-square'
              src='/posts/post-3.jpeg'
            />
          </Link>
        </Grid>
        <Grid size={1}>
          <Link
            href='https://www.instagram.com/p/C9OByDmSChQ/'
            target='_blank'
          >
            <img
              className='rounded-lg object-cover aspect-square'
              src='/posts/post-2.jpeg'
            />
          </Link>
        </Grid>
        <Grid size={1}>
          <Link
            href='https://www.instagram.com/p/C-tce9RSvEY/'
            target='_blank'
          >
            <img
              className='rounded-lg object-cover aspect-square'
              src='/posts/post-1.jpeg'
            />
          </Link>
        </Grid>
        <Grid size={1}>
          <Link
            href='https://www.instagram.com/p/C-tcn2CSCnZ/'
            target='_blank'
          >
            <img
              className='rounded-lg object-cover aspect-square'
              src='/posts/post-4.jpeg'
            />
          </Link>
        </Grid>
      </Grid>
    </Stack>
  )
}
