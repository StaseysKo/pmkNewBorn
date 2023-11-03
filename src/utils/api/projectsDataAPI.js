//функция для чтения и парсинга данных о проектах в портфолио из файлов .md

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getProjectsData() {
  const directory = path.join(process.cwd(), '_data', 'projects');
  const allFilenames = fs.readdirSync(directory);

  // Отфильтровываем список файлов, оставляем только .md
  const filenames = allFilenames.filter(filename => path.extname(filename) === '.md');
  
  let projects = filenames.map(filename => {
    const filePath = path.join(directory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      id: filename.replace('.md', ''),
      ...data,
      description: content
    };
  });

  // Если какой-то элемент массива null или undefined, то он будет удален из итоговой версии массива
  projects = projects.filter(project => project !== null && project !== undefined)

  // Сортируем элементы массива по полю order, чем больше значение - тем ниже элемент в итоговом массиве
  projects.sort((firstEl, secondEl) => (firstEl.order > secondEl.order ? 1 : -1))

  return projects;
}