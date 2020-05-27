import { Stack, Box, Spinner, Input } from '@chakra-ui/core'
import { Hero, SectionTitle, PageContainer } from 'landing-blocks'
import React, { useState } from 'react'
import useSWR from 'swr'
import { client } from './_app'
import { everything } from '../generated/createClient'

const Page = () => {
    const [regex, setRegex] = useState('.*')
    const { data, error } = useSWR([regex], (regex) =>
        client.query({
            countries: [
                { filter: { continent: { regex: regex } }, },
                { name: 1, code: 1,  },
            ],
        }),
    )
    return (
        <Stack spacing='40px'>
            <Hero
                bullet='Introducing Genql 1.0'
                heading='Example use of Genql'
                subheading='Loo at this'
            />
            <PageContainer>
                <Box>Search a continent</Box>
                <Input
                    variant='filled'
                    value={regex}
                    onChange={(e) => setRegex(e.target.value)}
                    placeholder='.*'
                />
            </PageContainer>
            <PageContainer>
                <SectionTitle heading='Continents' />
                {!data && (
                    <Stack justify='center' align='center'>
                        <Spinner />
                    </Stack>
                )}
                {data && (
                    <Stack spacing='20px'>
                        {data?.countries?.map((x) => (
                            <Box borderRadius='10px' p='20px' borderWidth='1px'>
                                {x.name}
                            </Box>
                        ))}
                    </Stack>
                )}
                {error && <Box color='red'>{error.message}</Box>}
            </PageContainer>
        </Stack>
    )
}

export default Page