import { AddIcon } from '@chakra-ui/icons'

import { Box, Input } from '@chakra-ui/react'
import { useState, KeyboardEvent } from 'react'


type Props = {
    onEnter: (novoItem: string) => void
}

export const AddLista = ({onEnter}: Props) => {

    // Recebe o texto digitado em uma variavel
    const[inputText, setInputeText] = useState('')


    //Salva o texto digotado
    const handleKeyUp = (e:KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== ''){
            onEnter(inputText)
            setInputeText('')
        }
    }

    return (
        <Box
        display={'flex'}
        alignItems={'center'}
        marginTop={10}
        marginBottom={15}
        border={'1px solid #555'}
        borderRadius='10px'
        padding={5}
        >

            <AddIcon marginRight={'5px'}/>

            <Input 
            value={inputText} 
            onChange={e=> setInputeText(e.target.value)} //Altera o valor da variavel inputText

            onKeyUp={handleKeyUp} /* Esse evento é disprado quando alguma tecla é digitada*/

            placeholder='Adicionar uma nova tarefa'
            border={0}
            background={'transparent'}
            outline={1}
            color={'white'} 
            fontSize={18}
            flex={1}            
            />

        </Box>

            )
}