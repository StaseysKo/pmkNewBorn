// Импортируем модули Node.js для работы с файловой системой и путями.
import fs from 'fs';
import path from 'path';
// Импортируем библиотеку для работы с front-matter в Markdown файлам.
import matter from 'gray-matter';

// Импортируем константу с путем до каталога, где хранятся файлы услуг.
import { SERVICES_DIR } from 'src/config';

// Считываем список всех файлов в каталоге услуг.
const serviceFilenames = fs.readdirSync(SERVICES_DIR);

// Функция для получения всех услуг с их метаданными.
export function getAllServices() {
  // Получаем список всех файлов в директории услуг
  const allFilenames = fs.readdirSync(SERVICES_DIR);

  // Отфильтровываем список файлов, оставляем только .md
  const filenames = allFilenames.filter(filename => path.extname(filename) === '.md');

  // Маппим массив файлов и возвращаем нужные данные
  let services = filenames.map((filename) => {
    const filePath = path.join(SERVICES_DIR, filename);
    const fileContents = fs.readFileSync(filePath, 'utf-8');

    const { data: metadata } = matter(fileContents);

    return {
      slug: filename.replace('.md', ''),
      metadata,
    };
  });

  // Если какой-то элемент массива null или undefined, то он будет удален из итоговой версии массива
  services = services.filter(service => service !== null && service !== undefined && service.metadata && service.metadata.serviceName);

  return services;
}

// Функция для получения данных конкретной услуги по её slug (идентификатору).
export function getServiceData(slug) {
  // Формируем полный путь к файлу с данными услуги.
  const filePath = path.join(SERVICES_DIR, `${slug}.md`);
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
export function getServicePaths() {
  // Преобразуем список имен файлов в нужный формат.
  return serviceFilenames.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));
}

