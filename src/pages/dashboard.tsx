import { Tooltip } from '@chakra-ui/core';
import {Flex, SimpleGrid, Box, Text, theme} from '@chakra-ui/react'
import dymamic from 'next/dynamic';
import { Header } from "../components/Header";
import { SideBar} from "../components/Sidebar";

// essa importação faz o apexchart so rodar no bwouser
const Chart = dymamic(() => import('react-apexcharts'), {
    ssr: false,
})

//SimpleGrid flex="1" tamnaho de 1fr gap="4" espaçamento de 16px minChildWidth="320px" laguramimina de 320px align="flex-start" alinhado ao inicio

const options = {
    chart: {
        toolbar: { // remove o menu
            show: false,
        },
        zoom: { // tira o zoom por dapadrão dos graficos
            enabled: false,
        },

        foreColor: theme.colors.gray[500], // muda a cor dos numeros dentro do grafico
    },

    grid: { // tira as linhas do grafico
        show: false,
    },

    dataLabels: { // tirar as lebos dos dados
        enabled: false,
    },

    tooltip: { // retira o tool tip com as informaçoes
        enabled: false,
    },

    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTicks:{
            color: theme.colors.gray[600]
        },
        categories:[
            '2021-03-18T00:00:00.000Z',
            '2021-03-19T00:10:00.000Z',
            '2021-03-20T00:20:00.000Z',
            '2021-03-21T00:30:00.000Z',
            '2021-03-22T00:40:00.000Z',
            '2021-03-23T00:50:00.000Z',
            '2021-03-24T00:06:00.000Z',
           
        ],
    },
    fill:{
        opacity: 0.3,
        type: 'gradient',
        gradient:{
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3,
        }
    }
} as const;

const series = [
    {name: 'series1', data: [31, 120, 10, 28, 61, 18, 109]}
]

export default function Dashboard(){
    return(
        <Flex direction="column" h="100vh">
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <SideBar />
                
                <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
                    <Box
                        p="8"
                        bg="gray.800"
                        borderRadius={8}
                        pb="4"
                    >
                        <Text fontSize="lg" mb="4">Inscritos da semana</Text>
                        <Chart options={options} series={series} type="area" height={160}/>
                    </Box>

                    <Box
                        p="8"
                        bg="gray.800"
                        borderRadius={8}
                        pb="4"
                    >
                        <Text fontSize="lg" mb="4">Taxa de aberturas</Text>
                        <Chart options={options} series={series} type="area" height={160}/>
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}