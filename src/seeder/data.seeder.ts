/* eslint-disable prettier/prettier */
import { getRepository } from 'typeorm';
import { Company } from '@/company/entities/company.entity';
import { JobCircular } from '@/jobs-circular/entities/job-circular.entity';
import { randCompanyName, randEmail, randAddress, randPhoneNumber } from '@ngneat/falso';
import { JobLevel } from '@/common/job-level/entities/job-level.entity';
import { EmploymentType } from '@/common/employment-type/entities/employment-type.entity';
import { Logger } from '@nestjs/common';
import { JobIndustry } from '@/common/job-industry/entities/job-industry.entity';
import { techJobs } from "./jobs"

export const seedData = async (): Promise<void> => {
    Logger.log("Inside seed: ")
    await Promise.all([createJobLevel(), createEmploymentType(), createJobIndustries(), createCompany()]);
    await createJobCirculars();
};

// LOG Total 4 jobLevel inserted.
// LOG Total 4 emplyment type inserted .
// LOG Total 15 comapny inserted.
// LOG Total 27 jobIndustry inserted.
const rand = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const createJobCirculars = async () => {
    const jobCircularCount = await getRepository(JobCircular).count();
    const jobCircularRepo = getRepository(JobCircular);

    const getCompany = async (id: number) => {
        return await getRepository(Company).findOne(id);
    }
    const getEmploymentType = async (id: number) => {
        return await getRepository(EmploymentType).findOne(id);
    }
    const getJobIndustry = async (id: number) => {
        return await getRepository(JobIndustry).findOne(id);
    }
    const getJobLevel = async (id: number) => {
        return await getRepository(JobLevel).findOne(id);
    }

    if (jobCircularCount == 0) {
        Logger.log("Seeding jobcircular")
        for (const item of techJobs) {
            const jobCircular = new JobCircular();
            jobCircular.title = item.job;
            jobCircular.country = 'Bangaldesh';
            jobCircular.status = 'draft';
            jobCircular.salary = new String(rand(30000, 50000)).toLocaleLowerCase();
            jobCircular.employmentType = await getEmploymentType(rand(1, 4));
            jobCircular.jobLevel = await getJobLevel(rand(1, 4));
            jobCircular.company = await getCompany(rand(1, 15));
            jobCircular.jobIndustry = await getJobIndustry(rand(1, 27));
            await jobCircularRepo.save(jobCircular);
        }
        const newJobCircularCount = await getRepository(JobCircular).count();
        Logger.log(`Total ${newJobCircularCount} job circular inserted .`)
    }

}

const createCompany = async () => {
    const companyCount = await getRepository(Company).count();
    const companyRepo = getRepository(Company);
    if (companyCount == 0) {
        Logger.log("Seeding comapny")
        for (let i = 1; i < 27; i++) {
            const company = new Company();
            company.companyName = randCompanyName();
            company.companyEmail = randEmail();
            company.companyAddress = randAddress().street;
            company.companyMobile = randPhoneNumber();
            company.companyLogo = `${i}.png`;
            await companyRepo.save(company);
        }
        const newCompanyCount = await getRepository(Company).count();
        Logger.log(`Total ${newCompanyCount} comapny inserted .`)
    }
}

const createEmploymentType = async () => {
    const employmentTypeList = [
        {
            title: "Full time",
            alias: "fulltime",
        },
        {
            title: "Part time",
            alias: "parttime",
        },
        {
            title: "Internship / Volunteering",
            alias: "internship-volunteering",
        },
        {
            title: "Project / Seasonal",
            alias: "project-seasonal",
        },
    ];

    const typeCount = await getRepository(EmploymentType).count();
    if (typeCount == 0) {
        const employmentTypeRepo = getRepository(EmploymentType);
        Logger.log("Seeding employment type")
        for (const eachType of employmentTypeList) {
            const employmentType = Object.assign(new EmploymentType(), eachType);
            await employmentTypeRepo.save(employmentType);
        }
        const newTypeCount = await getRepository(EmploymentType).count();
        Logger.log(`Total ${newTypeCount} emplyment type inserted .`)
    }

}

const createJobIndustries = async () => {

    const jobIndustriesList = [
        {
            title: 'Accounting/Finance',
            alias: 'accounting-finance'
        },
        {
            title: 'Bank/Non Bank Fin. Institution',
            alias: 'bank-non-bank-fin-institution',
        },
        {
            title: 'Commercial/Supply Chain',
            alias: 'commercial-supply-chain',
        },
        {
            title: 'Education/Training',
            alias: 'education-training',
        },
        {
            title: 'Engineer/Architects',
            alias: 'engineer-rrchitects'

        },
        {
            title: 'Garments/Textile',
            alias: 'garments-textile'
        },
        {
            title: 'HR/Org. Development',
            alias: 'hr-org-development'
        },
        {
            title: 'Gen Mgt/Admin',
            alias: 'gen-mgt-admin'
        },
        {
            title: 'Design/Creative',
            alias: 'design-creative'
        },
        {
            title: 'Production/Operation',
            alias: 'production-operation'
        },
        {
            title: 'Hospitality/ Travel/ Tourism',
            alias: 'hospitality-travel-tourism'
        },
        {
            title: 'Beauty Care/ Health & Fitness',
            alias: 'beauty-care-health-fitness'
        },
        {
            title: 'Electrician/ Construction/ Repair',
            alias: 'electrician-construction-epair'
        },
        {
            title: 'IT & Telecommunication',
            alias: 'it-telecommunication'
        },
        {
            title: 'Marketing/Sales',
            alias: 'marketing-sales'
        },
        {
            title: 'Customer Support/Call Centre',
            alias: 'customer-support-call-centre'
        },
        {
            title: 'Media/Ad./Event Mgt.',
            alias: 'media-ad-event-mgt'
        },
        {
            title: 'Medical/Pharma',
            alias: 'medical-pharma'
        },
        {
            title: 'Agro',
            alias: 'agro'
        },
        {
            title: 'NGO/Development',
            alias: 'ngo-development'
        },
        {
            title: 'Research/Consultancy',
            alias: 'research-consultancy'
        },
        {
            title: 'Secretary/Receptionist',
            alias: 'secretary-receptionist'
        },
        {
            title: 'Data Entry/Operator/BPO',
            alias: 'data-entry-operator-bpo'
        },
        {
            title: 'Driving/Motor Technician',
            alias: 'driving-motor-technician'
        },
        {
            title: 'Security/Support Service',
            alias: 'security-support-service'
        },
        {
            title: 'Law/Legal',
            alias: 'law-legal'
        },
        {
            title: 'Others',
            alias: 'others'
        }
    ]

    const jobIndustryCount = await getRepository(JobIndustry).count();
    if (jobIndustryCount == 0) {
        const jobIndustryRepo = getRepository(JobIndustry);
        Logger.log("Seeding job industry ")
        for (const eachIndustry of jobIndustriesList) {
            const jobIndustry = Object.assign(new JobIndustry(), eachIndustry);
            await jobIndustryRepo.save(jobIndustry);
        }
        const newjobIndustryCount = await getRepository(JobIndustry).count();
        Logger.log(`Total ${newjobIndustryCount} jobIndustry inserted .`)
    }
}

const createJobLevel = async () => {
    const jobLevelList = [
        {
            title: "Unqualified",
            alias: "unqualified",
        },
        {
            title: "Qualified",
            alias: "qualified",
        },
        {
            title: "Student",
            alias: "student",
        },
        {
            title: "Graduate",
            alias: "graduate",
        },
    ];

    const jobLevelCount = await getRepository(JobLevel).count();
    if (jobLevelCount == 0) {
        const jobLevelRepo = getRepository(JobLevel);
        Logger.log("Seeding job level ")
        for (const eachLevel of jobLevelList) {
            const jobLevel = Object.assign(new JobLevel(), eachLevel);
            await jobLevelRepo.save(jobLevel);
        }
        const newJobLevelCount = await getRepository(JobLevel).count();
        Logger.log(`Total ${newJobLevelCount} jobLevel inserted .`)
    }
}
