import { Box, Typography, IconButton, Stack } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Slider from "react-slick";

import { useRef, useState, useEffect } from "react";

import { useTheme } from '@mui/material/styles';

import { CarouselDots } from 'src/components/carousel'
import useResponsive from "src/hooks/useResponsive";


const CORE_VALUES = [
  {
    id: 1,
    step: '1 этап',
    title: 'Формирование заявки',
    description:
    'Оставьте заявку на сотрудничество через форму обратной связи',
  },
  {
    id: 2,
    step: '2 этап',
    title: 'Уточнение деталей',
    description:
    'Наш менеджер свяжется с вами для уточнения деталей.',
  },
  {
    id: 3,
    step: '3 этап',
    title: 'Заключаем договор',
    description:
    'Определяющий основные условия и этапы выполнения проекта.',
  },
  {
    id: 4,
    step: '4 этап',
    title: 'Проектирование',
    description:
    'Наши инженеры начнут разработку проекта, учитывая все ваши требования и стандарты качества.',
  },
  {
    id: 5,
    step: '5 этап',
    title: 'Производство',
    description:
    'На собственном производстве реализуем изделия в соответствии с утвержденным проектом.'
  },
  {
    id: 6,
    step: '6 этап',
    title: 'Логистика и монтаж',
    description:
    'Обеспечим быструю логистику готовых изделий и осуществим монтаж на вашем объекте.',
  },
  {
    id: 7,
    step: '7 этап',
    title: 'Принятие работ',
    description:
    'После завершения всех работ и проверки качества исполнения, мы подготовим все необходимые закрывающие документы.',
  },
];

const HowItWork = () => {
  const theme = useTheme();

  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    const maxHeight = CORE_VALUES.reduce((max, value) => {
      const el = document.getElementById(`card-${value.id}`);
      if (el) {
        return Math.max(max, el.offsetHeight);
      }
      return max;
    }, 0);
    setMaxHeight(maxHeight);
  }, []);



  const isMdUp = useResponsive('up', 'md');

  const carouselRef = useRef(null);

  const carouselSettings = {
    infinite: false,
    dots: !isMdUp,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 3,
    rtl: Boolean(theme.direction === 'rtl'),
    ...CarouselDots({
      sx: {
        mt: 8,
      },
    }),
    responsive: [
      {
        // Down md
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 2, slidesToScroll: 3 },
      },
      {
        // Down sm
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  const handlePrev = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <>
      <Stack direction="row" alignItems="center" sx={{ mb: '40px' }}>
        <Typography variant="h3" sx={{ textAlign: { xs: "center", md: "unset" }, flexGrow: 1 }}>
          Этапы работы
        </Typography>

        {isMdUp && (
          <>
            <IconButton onClick={handlePrev}>
              <ArrowBackIos />
            </IconButton>
            <IconButton onClick={handleNext}>
              <ArrowForwardIos />
            </IconButton>
          </>
        )}
      </Stack>
      <Slider ref={carouselRef} {...carouselSettings}>
        {CORE_VALUES.map((value) => (
          <Box
            key={value.id}
            id={`card-${value.id}`}
            sx={{
              px: { xs: 1, md: 1 },
              width: { xs: '100%', md: 'auto' },
            }}
          >
            <Stack
              spacing={1}
              sx={{
                p: 3,
                borderRadius: 2,
                bgcolor: '#252c35',
                display: 'flex',
                flexDirection: 'column',
                minHeight: { xs: 169, md: maxHeight },
                overflow: 'visible', // Установите overflow в 'visible'
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  color: 'text.disabled',
                  minHeight: { xs: 'auto', md: 1 },
                }}
              >
                {value.step}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  minHeight: { xs: 'auto', md: 'auto' },
                }}
              >
                {value.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  minHeight: { xs: 'auto', md: 70 },
                }}
              >
                {value.description}
              </Typography>
            </Stack>
          </Box>
        ))}
      </Slider>
    </>
  );
};

export default HowItWork;