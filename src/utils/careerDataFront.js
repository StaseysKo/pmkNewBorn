// Импортируем модули Node.js для работы с файловой системой и путями.
import fs from 'fs';
import path from 'path';
// Импортируем библиотеку для работы с front-matter в Markdown файлам.
import matter from 'gray-matter';

// Импортируем константу с путем до каталога, где хранятся файлы вакансий.
import { CAREER_DIR } from 'src/config';

// Считываем список всех файлов в каталоге вакансий.
const vacancyFilenames = fs.readdirSync(CAREER_DIR);

// Функция для получения всех вакансий с их метаданными.
export function getAllVacancies() {
  // Получаем список всех файлов в директории услуг
  const allFilenames = fs.readdirSync(CAREER_DIR);

  // Отфильтровываем список файлов, оставляем только .md
  const filenames = allFilenames.filter(filename => path.extname(filename) === '.md');

  // Маппим массив файлов и возвращаем нужные данные
  let jobs = filenames.map((filename) => {
    const filePath = path.join(CAREER_DIR, filename);
    const fileContents = fs.readFileSync(filePath, 'utf-8');

    const { data: metadata } = matter(fileContents);

    return {
      slug: filename.replace('.md', ''),
      metadata,
    };
  });

  // Если какой-то элемент массива null или undefined, то он будет удален из итоговой версии массива
  jobs = jobs.filter(job => job !== null && job !== undefined);

  return jobs;
}

// Функция для получения данных конкретной вакансии по её slug (идентификатору).
export function getVacancyData(slug) {
  // Формируем полный путь к файлу с данными конкретной вакансии.
  const filePath = path.join(CAREER_DIR, `${slug}.md`);
  // Читаем содержимое файла.
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  
  // Извлекаем метаданные и контент файла.
  const { data: metadata, content } = matter(fileContents);

  // Возвращаем объект с метаданными, slug и контентом.
  return {
    metadata,
    slug,
    content,
  };
}

// Функция для получения всех возможных путей (slugs) для вакансий.
export function getVacancyPaths() {
  // Преобразуем список имен файлов в нужный формат.
  return vacancyFilenames.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));
}

