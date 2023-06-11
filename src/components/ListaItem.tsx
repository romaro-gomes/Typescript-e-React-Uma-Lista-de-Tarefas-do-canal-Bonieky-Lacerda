import { Box, Checkbox,Text } from "@chakra-ui/react";
import * as I from "../interface/interface";
import { useState } from "react";

type Props = {
    item: I.Item
    
}

type styleText = {
    done:boolean
}
export const ListaItem = ({ item }: Props) => {
    const [isChecked, setIsChecked] = useState(item.done)

    return (
        <Box backgroundColor='#20212C' padding='10px' borderRadius='10px' marginBottom='10px' alignItems={"center"} color='white'>

            <Checkbox spacing={10} iconColor="green" iconSize={'20px'} checked={isChecked} onChange={ e => setIsChecked(e.target.checked)}>
            <Text as={`${isChecked?'s':'abbr'}`}> {item.name} </Text>

        </Checkbox>
        </Box>
    )
}