import {Box} from '@chakra-ui/react'
import { Area } from '../components/Area'
import { Layout } from '../components/Layout'
import { ListaItem } from '../components/ListaItem';
import { useState } from 'react';
import * as I from "../interface/interface"
import { AddLista } from '../components/AddLista';


export const Home = () =>{

    // Criou uma lista de tarefas
    const [list, setList] = useState<I.Item[]>([
        {id:1 , name:'Comprar ração no petshop', done:false},
        {id:2 , name:'Comprar biscoito no mercado', done:false}
    ]);


    // Uma função para incluit novas tarefas
    const handleAddLista = (novoItem: string) =>{
        let novaLista = [...list]; // fez o spreed das informações da lista antiga
        
        novaLista.push({
            id:list.length +1,
            name:novoItem,
            done:false
        });

        setList(novaLista); //Devemos atualizar o estado da lista, recebendo a lista nova
    }
    
    
    return(
        <Box backgroundColor='#17181F' color='#797A81' minHeight='100vh' >
            <Area>
                <Layout/>
                <AddLista onEnter={handleAddLista}/>
                {
                    list.map((item, index) => (
                      <ListaItem key={index} item={item} />
                    ) )
                }
            </Area>
        </Box>
    )
}