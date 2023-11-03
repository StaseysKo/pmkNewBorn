import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { Card, Stack, Grid, Typography, Divider } from '@mui/material';

import locationIcon from '@iconify/icons-carbon/location';

import { TextMaxLine, TextIconLabel, Image } from 'src/components';
import { Iconify } from 'src/components/iconify';

import Routes from 'src/routes';



ProjectCard.propTypes = {
    result: PropTypes.object.isRequired,
};

export default function ProjectCard({ result, onClose }) {

    const handleClick = () => {
        if (onClose) {
          setTimeout(() => {
            onClose(); // Закрываем модальное окно поиска после задержки
          }, 2500); // 500 мс задержка
        }
      };

    return (
            <Card
                sx={{
                backgroundColor: '#252c35',
                boxShadow: (theme) => theme.customShadows.z8,
                "&:hover": {
                    boxShadow: (theme) => theme.customShadows.z24,
                },
                position: "relative", 
                minHeight: 475, 
                }}
            >
                <div onClick={handleClick}>
                    <Stack sx={{ p: 3, pb: 0 }}>
                        <Stack direction="row" alignItems="center" spacing={2.5}>
                            <NextLink
                                as={Routes.portfolio.project(result.projectLink)}
                                href={Routes.portfolio.project(result.projectLink)}
                                passHref
                            >
                                <Image
                                    alt={result.projectName}
                                    src={result.mainProjectImg}
                                    sx={{ width: "100%", borderRadius: 1 }}
                                />
                            </NextLink>
                        </Stack>

                        <Stack spacing={0.5} sx={{ mt: 3, mb: 2 }}>
                            <NextLink
                                as={Routes.portfolio.project(result.projectLink)}
                                href={Routes.portfolio.project(result.projectLink)}
                                passHref
                            >
                                <TextMaxLine variant="h6" line={2} sx={{ minHeight: '4.0rem' }}>
                                    {result.projectName}
                                </TextMaxLine>
                            </NextLink>

                            <Grid
                                sx={{
                                    pt: 0,
                                    typography: "p",
                                    color: "text.secondary",
                                    // textTransform: 'capitalize',
                                }}
                            >
                                <Grid item xs={6}>
                                    <NextLink
                                        as={Routes.portfolio.project(result.projectLink)}
                                        href={Routes.portfolio.project(result.projectLink)}
                                        passHref
                                    >
                                        <Typography variant="body3" sx={{ color: "secondary.main" }}>
                                            {result.serviceProvided}
                                        </Typography>
                                    </NextLink>
                                </Grid>
                                <Grid item xs={6}>
                                    <NextLink
                                        as={Routes.portfolio.project(result.projectLink)}
                                        href={Routes.portfolio.project(result.projectLink)}
                                        passHref
                                    >
                                        <Typography variant="body3" sx={{ color: "secondary.main" }}>
                                            {result.industryOfWork}
                                        </Typography>
                                    </NextLink>
                                </Grid>
                            </Grid>
                        </Stack>
                    </Stack>
                    <Grid
                        sx={{
                            p: 3,
                            pt: 0,
                            typography: "body3",
                            color: "text.secondary",
                            textTransform: "capitalize",
                            position: "absolute", // добавлено
                            bottom: 0, // добавлено
                            left: 0, // добавлено
                            right: 0, // добавлено
                        }}
                    
                    >
                        <Divider sx={{ borderStyle: "dashed", my: 2 }} />
                        <Grid item xs={6}>
                            <NextLink
                                as={Routes.portfolio.project(result.projectLink)}
                                href={Routes.portfolio.project(result.projectLink)}
                                passHref
                            >
                                <TextIconLabel
                                    sx={{
                                        typography: "body3",
                                    }}
                                    icon={
                                        <Iconify
                                        icon={locationIcon}
                                        sx={{ mr: 0.5, width: 18, height: 18 }}
                                        />
                                    }
                                    value={result.adressOfTheObject}
                                />
                            </NextLink>
                        </Grid>
                    </Grid>
                </div>
            </Card>
    )
}