import { Search } from '@mui/icons-material'
import { InputAdornment, Slider, Stack, TextField } from '@mui/material'
import { CategoriesFilter } from './CategoriesFilter'

export const AsideFilters = () => {
  return (
    <Stack
      component='aside'
      spacing={10}
    >
      <TextField
        variant='outlined'
        color='secondary'
        label='Buscar por nombre'
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position='end'>
                <Search />
              </InputAdornment>
            )
          }
        }}
        sx={{ width: '26ch' }}
      />
      <CategoriesFilter />
      <Stack spacing={4}>
        <span className='font-medium'>Precio</span>
        <Slider
          color='secondary'
          valueLabelDisplay='on'
          min={0}
          max={250}
          defaultValue={[50, 200]}
          disableSwap
          slots={{ rail: 'div' }}
          classes={{
            valueLabelOpen: 'background-color: "red";'
          }}
          valueLabelFormat={(string) => `$${string.toFixed(2)}`}
          sx={{
            '& .MuiSlider-valueLabelOpen': { backgroundColor: 'transparent', color: 'black', top: 0 },
            '& .MuiSlider-valueLabel': { top: 50 }
          }}
        />
      </Stack>
    </Stack>
  )
}
