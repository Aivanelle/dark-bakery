import { Box, IconButton, IconButtonProps } from '@mui/material'
import { ElementType, PropsWithChildren } from 'react'

type Props<T extends ElementType> = PropsWithChildren & IconButtonProps<T> & { component?: T }

export const ContainedIconButton = <T extends ElementType>({ children, ...rest }: Props<T>) => {
  return (
    <Box sx={[(theme) => ({ backgroundColor: theme.palette.primary.main }), { borderRadius: 999 }]}>
      <IconButton
        sx={(theme) => ({ color: theme.palette.primary.contrastText })}
        {...rest}
      >
        {children}
      </IconButton>
    </Box>
  )
}
