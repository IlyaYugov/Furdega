﻿using System.Linq;
using Furdega.Dtos.HomePage.Input.Interfaces;
using Furdega.Services.FileManagers;

namespace Furdega.Dtos.HomePage.Input
{
    public class CompanyBenefitsSectionRequest: HomeSectionBase, ISectionRequestWithImage
    {
        public CompanyBenefitRequest CompanyBenefit1 { get; set; }
        public CompanyBenefitRequest CompanyBenefit2 { get; set; }
        public CompanyBenefitRequest CompanyBenefit3 { get; set; }
        public CompanyBenefitRequest CompanyBenefit4 { get; set; }

        public bool IsFilesExtensionCorrect()
        {
            var images = AllImages?.Where(s => s != null);

            return !images.Any() || images.Any() && images.All(s => s.IsFileExtensionCorrect());
        }

        public bool IsAllBase64ImagesExist()
        {
            throw new System.NotImplementedException();
        }

        private Image[] AllImages => new[]
        {
            CompanyBenefit1?.Image,
            CompanyBenefit2?.Image,
            CompanyBenefit3?.Image,
            CompanyBenefit4?.Image
        };
    }
}