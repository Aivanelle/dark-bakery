import { Breadcrumbs, Link } from '@mui/material'

export const MBreadcrumbs = ({ crumbs }: { crumbs: string[] }) => {
  return (
    <Breadcrumbs
      separator='›'
      sx={{ fontSize: '0.875rem' }}
    >
      {crumbs.map((crumb, index) => (
        <Link
          key={index}
          color='inherit'
          underline='hover'
          href='#'
          sx={{ fontWeight: index === crumbs.length - 1 ? 'medium' : 'regular' }}
        >
          {crumb}
        </Link>
      ))}
    </Breadcrumbs>
  )
}
