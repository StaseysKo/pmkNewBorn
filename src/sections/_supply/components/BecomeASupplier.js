// @mui
import { Box, Typography, Container, Card } from '@mui/material';


// ----------------------------------------------------------------------

const steps = [
    {
        stepName: 'Заполните форму',
        stepValue: 'Для того чтобы начать сотрудничество, вам необходимо заполнить специальную форму прямо на сайте.',
        stepNumber: '01'
    },
    {
        stepName: 'Ждите ответа',
        stepValue: 'Для регистрации и фильтрации поступающих заявок требуется определенное время. В связи с этим, ответ может прийти в течение 1–5 рабочих дней.',
        stepNumber: '02'
    },
    {
        stepName: 'Получите письмо',
        stepValue: 'В случае принятия положительного решения вам будет направлено письмо с уточнением всех необходимых данных для заключения договора на поставку. ',
        stepNumber: '03'
    }
]

export default function BecomeASupplier() {
  return (
    <Container
        sx={{
        pt: { xs: 5, md: '120px' },
        }}
    >
        <Typography
            variant="h2"
            sx={{
                mb: 8,
                textAlign: { xs: 'center', md: 'unset' },
            }}
        >
            Как стать поставщиком
        </Typography>
            <Box
                sx={{
                alignItems: 'center',
                display: 'grid',
                gap: 3,
                gridTemplateColumns: {
                    xs: 'repeat(1, 1fr)',
                    md: 'repeat(3, 1fr)',
                },
                }}
            >

                {steps.map((step) => (
                  <Card
                    key={step.stepName}
                    sx={{
                        p: 4,
                        minHeight: 368,
                        backgroundColor: '#252c35'
                    }}
                  >
                                <Typography
                                    variant="h1"
                                    component="h2"
                                    sx={{ color: 'text.disabled', opacity: 0.24, mb: 3 }}
                                >
                                    {step.stepNumber}
                                </Typography>

                                <Typography variant="h4" paragraph>
                                    {step.stepName}
                                </Typography>

                                <Typography 
                                    sx={{ 
                                        color: 'text.secondary'
                                     }}
                                >
                                    {step.stepValue}
                                </Typography>
                        </Card>
                ))}
            </Box>
        </Container>
  );
}
