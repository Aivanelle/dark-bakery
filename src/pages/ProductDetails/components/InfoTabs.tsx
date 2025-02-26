import { Box, Tab, Tabs } from '@mui/material'
import { PropsWithChildren, SyntheticEvent, useState } from 'react'

type Props = { index: number; value: number }

const tabs = ['Descripción del producto', 'Ingredientes', 'Alérgenos']

const TabPanel = ({ children, index, value }: PropsWithChildren<Props>) => {
  return <Box hidden={value !== index}>{value === index && <Box sx={{ py: 3 }}>{children}</Box>}</Box>
}

export const InfoTabs = () => {
  const [value, setValue] = useState(0)

  const handleChange = (_: SyntheticEvent, value: number) => {
    setValue(value)
  }
  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor='secondary'
        aria-label='wrapped label tabs example'
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            value={index}
            label={tab}
            sx={{ flexGrow: 1, textTransform: 'initial' }}
          />
        ))}
      </Tabs>
      <TabPanel
        index={0}
        value={value}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, risus sit amet consectetur fringilla,
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sed euismod, risus sit amet consectetur fringilla, Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
      </TabPanel>
      <TabPanel
        index={1}
        value={value}
      >
        Sed euismod, risus sit amet consectetur fringilla, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </TabPanel>
      <TabPanel
        index={2}
        value={value}
      >
        Sed euismod, risus sit amet consectetur fringilla, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </TabPanel>
    </>
  )
}
