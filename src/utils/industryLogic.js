//функция считает количество проектов выполненных в каждой отрасли

import industries from '_data/industries';

export function updateIndustryCounts(projects) {
    const industriesCopy = JSON.parse(JSON.stringify(industries)); 

    projects.forEach(project => {
        const industry = industriesCopy.find(ind => ind.name === project.industryOfWork);
        if (industry) {
            industry.countProject += 1;
        }
    });

    return industriesCopy;
}