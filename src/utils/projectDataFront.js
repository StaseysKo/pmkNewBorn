// Импортируем модули Node.js для работы с файловой системой и путями.
import fs from 'fs';
import path from 'path';
// Импортируем библиотеку для работы с front-matter в Markdown файлам.
import matter from 'gray-matter';

// Импортируем константу с путем до каталога, где хранятся файлы услуг.
import { PROJECTS_DIR } from 'src/config';

// Считываем список всех файлов в каталоге услуг.
const projectsFileNames = fs.readdirSync(PROJECTS_DIR);

// Функция для получения всех услуг с их метаданными.
export function getAllProjects() {
  // Получаем список всех файлов в директории услуг
  const allFilenames = fs.readdirSync(PROJECTS_DIR);

  // Отфильтровываем список файлов, оставляем только .md
  const filenames = allFilenames.filter(filename => path.extname(filename) === '.md');

  // Маппим массив файлов и возвращаем нужные данные
  let projects = filenames.map((filename) => {
    const filePath = path.join(PROJECTS_DIR, filename);
    const fileContents = fs.readFileSync(filePath, 'utf-8');

    const { data: metadata } = matter(fileContents);

    return {
      slug: filename.replace('.md', ''),
      metadata,
    };
  });

  // Если какой-то элемент массива null или undefined, то он будет удален из итоговой версии массива
  projects = projects.filter(project => project !== null && project !== undefined && project.metadata && project.metadata.projectName);

  return projects;
}

// Функция для получения данных конкретной услуги по её slug (идентификатору).
export function getProjectData(slug) {
  // Формируем полный путь к файлу с данными услуги.
  const filePath = path.join(PROJECTS_DIR, `${slug}.md`);
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

// Функция для получения всех возможных путей (slugs) для услуг.
export function getProjectPaths() {
  // Преобразуем список имен файлов в нужный формат.
  return projectsFileNames.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));
}

