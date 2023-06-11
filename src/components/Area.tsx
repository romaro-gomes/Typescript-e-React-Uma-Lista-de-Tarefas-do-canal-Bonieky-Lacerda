import { Box } from "@chakra-ui/react"

export const Area = ({children}: any) => {
    return(
    <Box margin= 'auto' max-width='980px' padding='50px'>
        {children}
    </Box>
    )
}