// mui
import { Stack, Grid, Container, Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Box } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import Link from '@mui/material/Link';
// icons
import { Icon } from '@iconify/react';
// data
import {_advantages, _clients, _partners, _gratefulCompanies} from '_data'
// component
import { Page, TextMaxLine } from 'src/components'
// layout
import Layout from 'src/layouts';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from 'src/config';


const RootStyle = styled('div')(({ theme }) => ({
    paddingTop: HEADER_MOBILE_HEIGHT,
    [theme.breakpoints.up('md')]: {
      paddingTop: HEADER_DESKTOP_HEIGHT,
    },
  }));

  const filesArr = [
    {
        fileName: 'Скачать реквизиты',
        fileType: 'DOCX',
        fileSize: '| 20 КБ',
        fileUrl: '/downloads/Карточка организации.docx',
    },
  ]


export default function CardView() {

    return(
        <Page title="Карточка организации | Чистоград ПМК">
            <RootStyle>
                <Container
                    sx={{
                        pb: { xs: 0, md: '64px' },
                    }}
                >
                    <Grid
                        justifyContent="center"
                        sx={{
                            pt: { xs: 8, md: 10 },
                            pb: { xs: 0, md: 0 },
                        }}
                    >
                        <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}>
                            <Typography variant="h1">
                                Карточка организации
                            </Typography>
                        </Grid>
                    </Grid>
                    <Box
                        sx={{
                            pt: { xs: 10, md: '64px' },
                        }}
                    >
                    <TableContainer 
                        component={Paper} 
                        sx={{ 
                            borderRadius: '16px',
                        }}
                    >
                        <Box sx={{ background: '#252c35' }}>
                            <Table aria-label="simple table">
                                <TableBody>
                                    <TableRow 
                                        sx={{ 
                                        '&:hover': { 
                                            backgroundColor: 'rgba(0, 0, 0, 0.07)' // измените на желаемый цвет подсветки
                                        }
                                        }}
                                    >
                                        <TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>Полное наименование организации</TableCell>
                                        <TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>Общество с ограниченной ответственностью «Чистоград ПМК»</TableCell>
                                    </TableRow>
                                    <TableRow 
                                        sx={{ 
                                        '&:hover': { 
                                            backgroundColor: 'rgba(0, 0, 0, 0.07)' // измените на желаемый цвет подсветки
                                        }
                                        }}
                                    >
                                        <TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>Сокращенное наименование организации</TableCell>
                                        <TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>ООО «Чистоград ПМК»</TableCell>
                                    </TableRow>
                                    <TableRow 
                                        sx={{ 
                                        '&:hover': { 
                                            backgroundColor: 'rgba(0, 0, 0, 0.07)' // измените на желаемый цвет подсветки
                                        }
                                        }}
                                    >
                                        <TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>Дата регистрации</TableCell>
                                        <TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>14.08.2013</TableCell>
                                    </TableRow>
                                    <TableRow 
                                        sx={{ 
                                        '&:hover': { 
                                            backgroundColor: 'rgba(0, 0, 0, 0.07)' // измените на желаемый цвет подсветки
                                        }
                                        }}
                                    >
                                        <TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>Регистрационный номер Свидетельства о внесении записи в ЕГРЮЛ</TableCell>
                                        <TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>39 № 001630350</TableCell>
                                    </TableRow>
                                    <TableRow 
                                        sx={{ 
                                        '&:hover': { 
                                            backgroundColor: 'rgba(0, 0, 0, 0.07)' // измените на желаемый цвет подсветки
                                        }
                                        }}
                                    >
                                        <TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>ОГРН</TableCell>
                                        <TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>1133926030732</TableCell>
                                    </TableRow>
                                    <TableRow 
                                        sx={{ 
                                        '&:hover': { 
                                            backgroundColor: 'rgba(0, 0, 0, 0.07)' // измените на желаемый цвет подсветки
                                        }
                                        }}
                                    >
                                        <TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>ИНН</TableCell>
                                        <TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>3906302285</TableCell>
                                    </TableRow>
                                    <TableRow 
                                        sx={{ 
                                        '&:hover': { 
                                            backgroundColor: 'rgba(0, 0, 0, 0.07)' // измените на желаемый цвет подсветки
                                        }
                                        }}
                                    >
                                        <TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>КПП </TableCell>
                                        <TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>390601001</TableCell>
                                    </TableRow>
                                    <TableRow 
                                        sx={{ 
                                        '&:hover': { 
                                            backgroundColor: 'rgba(0, 0, 0, 0.07)' // измените на желаемый цвет подсветки
                                        }
                                        }}
                                    >
                                        <TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>ОКВЭД</TableCell>
                                        <TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>25.11</TableCell>
                                    </TableRow>
                                    <TableRow 
                                        sx={{ 
                                        '&:hover': { 
                                            backgroundColor: 'rgba(0, 0, 0, 0.07)' // измените на желаемый цвет подсветки
                                        }
                                        }}
                                    >
                                        <TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>ОКПО</TableCell>
                                        <TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>27781066</TableCell>
                                    </TableRow>
                                    <TableRow 
                                        sx={{ 
                                        '&:hover': { 
                                            backgroundColor: 'rgba(0, 0, 0, 0.07)' // измените на желаемый цвет подсветки
                                        }
                                        }}
                                    >
                                        <TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>Юридический адрес</TableCell>
                                        <TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>236028, Калининградская обл., г. Калининград, ул. А. Суворова, д. 115 А</TableCell>
                                    </TableRow>
                                    <TableRow 
                                        sx={{ 
                                        '&:hover': { 
                                            backgroundColor: 'rgba(0, 0, 0, 0.07)' // измените на желаемый цвет подсветки
                                        }
                                        }}
                                    >
                                        <TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>Фактический адрес</TableCell>
                                        <TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>236038, Калининградская обл., г. Калининград, ул. Индустриальная, 4</TableCell>
                                    </TableRow>
                                    <TableRow 
                                        sx={{ 
                                        '&:hover': { 
                                            backgroundColor: 'rgba(0, 0, 0, 0.07)' // измените на желаемый цвет подсветки
                                        }
                                        }}
                                    >
                                        <TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>Полное наименование банка организации</TableCell>
                                        <TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>Филиал «Европейский» ПАО «Банк Санкт-Петербург»</TableCell>
                                    </TableRow>
                                    <TableRow 
                                        sx={{ 
                                        '&:hover': { 
                                            backgroundColor: 'rgba(0, 0, 0, 0.07)' // измените на желаемый цвет подсветки
                                        }
                                        }}
                                    >
                                        <TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>Расчетный счет</TableCell>
                                        <TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>40702810075000074599</TableCell>
                                    </TableRow>
                                    <TableRow 
                                        sx={{ 
                                        '&:hover': { 
                                            backgroundColor: 'rgba(0, 0, 0, 0.07)' // измените на желаемый цвет подсветки
                                        }
                                        }}
                                    >
                                        <TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>Корреспондентский счет</TableCell>
                                        <TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>30101810927480000877</TableCell>
                                    </TableRow>
                                    <TableRow 
                                        sx={{ 
                                        '&:hover': { 
                                            backgroundColor: 'rgba(0, 0, 0, 0.07)' // измените на желаемый цвет подсветки
                                        }
                                        }}
                                    >
                                        <TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>БИК</TableCell>
                                        <TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>042748877</TableCell>
                                    </TableRow>
                                    <TableRow 
                                        sx={{ 
                                        '&:hover': { 
                                            backgroundColor: 'rgba(0, 0, 0, 0.07)' // измените на желаемый цвет подсветки
                                        }
                                        }}
                                    >
                                        <TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>Генеральный директор</TableCell>
                                        <TableCell sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>Фролов Дмитрий Владимирович</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            colSpan={2}
                                            sx={{
                                                textAlign: 'center',
                                                backgroundColor: 'rgba(0, 0, 0, 0.07)', // измените на желаемый цвет кнопки
                                                borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
                                            }}
                                        >
                                                <Grid>
                                                    <Grid item xs={12} md={12}>
                                                    <Box
                                                        gap={3}
                                                        display="grid"
                                                        gridTemplateColumns={{
                                                        xs: 'repeat(1, 1fr)',
                                                        sm: 'repeat(1, 1fr)',
                                                        }}
                                                    >
                                                        {filesArr.map((file) => (
                                                            <Link 
                                                                key={file.fileUrl} 
                                                                href={file.fileUrl} 
                                                                download
                                                                underline="none"
                                                                sx={{ 
                                                                    color: 'inherit', 
                                                                    textDecoration: 'none',
                                                                }}
                                                            >
                                                                <Stack
                                                                    spacing={2}
                                                                    direction="row"
                                                                    alignItems="center"
                                                                    sx={{
                                                                        p: 2,
                                                                        borderRadius: 2,
                                                                        border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
                                                                        transition: (theme) => theme.transitions.create('border-color', {
                                                                            easing: theme.transitions.easing.easeIn,
                                                                            duration: theme.transitions.duration.shortest,
                                                                        }),
                                                                        '&:hover': {
                                                                            border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 1)}`,
                                                                        }
                                                                    }}
                                                                >
                                                                    <Stack spacing={0.5} flexGrow={1}>
                                                                        <TextMaxLine variant="h6" line={1} sx={{ fontWeight: 'fontWeightMedium' }}>
                                                                            {file.fileName}
                                                                        </TextMaxLine>
                                                                    
                                                                        <TextMaxLine variant="body2" line={1} sx={{ color: 'text.disabled' }}>
                                                                            {file.fileType} {file.fileSize}
                                                                        </TextMaxLine>
                                                                    </Stack>
                                                                
                                                                    <Icon 
                                                                        icon="ci:download" 
                                                                        fontSize={22}
                                                                    />
                                                                </Stack>
                                                            </Link>
                                                        ))}
                                                    </Box>
                                                    </Grid>
                                                </Grid>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </TableContainer>
                    </Box>
                </Container>
            </RootStyle>
        </Page>
    );
}

CardView.getLayout = function getLayout(page) {
    return <Layout transparentHeader>{page}</Layout>;
}