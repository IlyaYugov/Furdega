﻿using System.Threading.Tasks;
using Furdega.DataAccess.Models.Enums;
using Furdega.Dtos.HomePage.Input;
using Furdega.Dtos.HomePage.Output;

namespace Furdega.Services.HomePage
{
    public interface IHomePageService
    {
        Task<HomePageContent> GetFullPage();

        Task<object> GetSection(HomePageSectionType sectionType);

        Task CreateOrUpdateSection(HomePageSectionType sectionType, object sectionContent);

        Task CreateOrUpdateStaffSection(StaffSectionRequest section);

        Task CreateOrUpdateCompanyBenefitsSection(CompanyBenefitsSectionRequest section);

        Task CreateOrUpdateIssueSolutionsSection(IssueSolutionsSectionRequest section);

        Task CreateWorkExamplesSection(WorkExamplesSectionRequest sectionRequest);
        Task UpdateWorkExamplesSection(WorkExamplesSectionRequest sectionRequest);

        Task CreateOrUpdateMainHomeSection(MainHomeSectionRequest section);
    }
}