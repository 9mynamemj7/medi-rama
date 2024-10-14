"use client";

import CodeBlock from "./components/global/code-block";
import Card from "./components/global/card";
import CardContents from "./components/global/contents-card";
import React from "react";
import InputSection from "./components/input-section";
import { EndpointName, FirstApiResponseModel, SecondApiResponseModel, ThirdApiResponseModel } from "@/types";
import SelectCard from "./components/global/select-card";
import useInputDataStore from './store/input-data/index';
import CustomButton from "./components/global/custom-button";
import ECCard from "./components/ec-card";
import { secondReq, thirdReq } from "./apis";

export default function Home() {
  const [firstData, setFirstData] = React.useState<FirstApiResponseModel>();
  const [secondData, setSecondData] = React.useState<SecondApiResponseModel>();
  const [thirdData, setThirdData] = React.useState<ThirdApiResponseModel>();
  const [checkedName, setCheckedName] = React.useState<string>("");
  const [apiLoding, setApiLoading] = React.useState<boolean>(false);
  const { inputData, setInputData } = useInputDataStore();

  const firstTestData: FirstApiResponseModel | undefined = {
    freqs: [
      ["objective response rate", 5],
      ["progression", 4],
      ["disease free survival", 3],
      ["pathological complete response", 3],
      ["safety", 3],
    ]
  }
  const secondTestData: SecondApiResponseModel | undefined = {
    generate: {
      om: "Objective Response Rate",
      desc: "Percentage of patients with a reduction in tumor ...",
      timeFrame: "Assessed at prede..."
    }
  }
  const thirdTestData: ThirdApiResponseModel | undefined = {"generate":{"inclusionCriteria":["Understand, sign, and date the written informed consent form prior to any protocol-specific procedures performed.","Men and women aged \u2265 18 years.","Eastern Cooperative Oncology Group (ECOG) performance status of 0 or 1.","Histologically confirmed and radically removed pT1b\/c N0M0 TNBC as defined according to AJCC TNM stage-8th version.","Histologically documented TNBC (negative HER2, ER, and PgR status). HER2 negativity is defined by local laboratory assessment using in situ hybridization and immunohistochemistry assays as per ASCO\/CAP criteria.","Bilateral and\/or multifocal primary tumor is allowed if the most advanced T stage is used to assess eligibility and pathologic confirmation of TNBC for each focus is required.","Adequately excised breast cancer: subjects must have undergone either breast-conserving surgery or mastectomy with margins free of gross residual tumor.","Have had sentinel lymph node biopsy (SLNB) and\/or axillary lymph node dissection (ALND) for evaluation of pathologic nodal status.","At least 4 weeks but no more than 12 weeks between definitive breast surgery and treatment initiation for cohort 1 and no more than 12 weeks for cohort 2.","Centrally assessed TILs score from surgical formalin-fixed paraffin embedded (FFPE) tumor sample using an H&E stained diagnostic digital slide.","Women of childbearing potential have a negative serum pregnancy test within 72 hours prior to the first dose of study medication for cohort 1 and within 7 days for cohort 2.","Women of childbearing potential must agree to use protocol-specified method(s) of contraception for 3 years. Men who engage in heterosexual intercourse must agree to use protocol-specified method(s) of contraception during trial treatments and for at least 6 months after the last dose."],"exclusionCriteria":["History of invasive malignancy \u2264 3 years prior to signing informed consent except for adequately treated basal cell or squamous cell skin cancer.","Having received prior chemotherapy or targeted therapy within the past 12 months.","Has a prior history of DCIS and\/or LCIS that was treated with any form of systemic, hormonal therapy, or radiotherapy to the ipsilateral breast.","Having received prior therapy with an anti-PD-1, anti-PD-L1, or anti-PD-L2 agents or with an agent directed to another co-inhibitory T-cell receptor.","Treatment with systemic immunostimulatory agents within 4 weeks or 5 half-lives of the drug, whichever is longer, prior to inclusion.","Has a diagnosis of immunodeficiency or is receiving chronic systemic steroid therapy or any other form of immunosuppressive medications within 7 days prior to inclusion.","Has an active autoimmune disease that has required systemic treatment in the past 2 years.","Has a known history of Human Immunodeficiency Virus (HIV).","Prior allogeneic stem cell or solid organ transplant.","Has a known history of active Bacillus Tuberculosis.","Patients with any other disease or illness which requires hospitalization or is incompatible with the trial treatment are not eligible.","Pregnant women or breastfeeding or expecting to conceive within the projected duration of the study."]}}
  
  
  const handleSelectCardClick = (name: string) => {
    setApiLoading(true);
    setCheckedName(name)
    setInputData({endpoint_name: name})
    const test = {...inputData, endpoint_name: name}
    console.log(test)
    const queryParams = new URLSearchParams(test as Record<string, string>).toString();
    secondReq(queryParams).then(
      (response) => {
      setSecondData(response.data)
      setApiLoading(false)
    }).catch(
      () => alert('second// 예기치 못한 문제가 발생했습니다.')
    ).finally(
      () => setApiLoading(false)
    );
  }

  const handleGenerateButtonClick = () => {
    console.log(inputData)
    const queryParams = new URLSearchParams(inputData as Record<string, string>).toString();
    thirdReq(queryParams).then(
      (response) => {
        setThirdData(response.data)
      }
    ).catch(
      (error) => alert('third// 예기치 못한 문제가 발생했습니다.')
    ).finally(

    )
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <header>
        {/* <CodeBlock>Sysnopsis Writting Assistant for Clinical Trial Protocol</CodeBlock> */}
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <div className="w-full flex justify-end">
            <CodeBlock>Sysnopsis Writting Assistant for Clinical Trial Protocol</CodeBlock>
          </div>
          <Card className="mt-4 ">
            <div className="w-[35%]">
              <InputSection setFirstData={setFirstData} />
              {firstData &&
                <div>
                  <div className="w-full flex flex-row justify-between mt-4">
                    <span>endpoint</span><span>frequency</span>
                  </div>
                  {firstData.freqs.map((item, index) => {
                    return (
                      <div key={item[0]+index} className="my-1 py-1" onClick={apiLoding ? () => {} : () => handleSelectCardClick(item[0])}>
                        <SelectCard checked={checkedName == item[0]} header={item[0]} body={String(item[1])} />
                      </div>
                    )
                  })}
                </div>
              }
            </div>
            <div className="w-[5%] flex justify-center">
              <div className="w-[2px] h-full bg-background" />
            </div>
            <div className="w-[60%]">
              {secondData &&
                <div className="flex flex-col gap-y-4">
                  <div className="flex flex-row gap-x-4">
                    <CardContents type="x-small" header="endpoint" body={secondData.generate.om} />
                    <CardContents type="x-small" header="time frame" body={secondData.generate.timeFrame} />
                  </div>
                  <CardContents header="description" body={secondData.generate.desc} />
                  <CustomButton onClick={handleGenerateButtonClick} content="Generate the Eligibility Criteria" />
                </div>
              }
              {thirdData &&
                <div className="my-4 gap-x-4">
                  <div className="mb-4"><ECCard header="inclusion criteria" body={thirdData.generate.inclusionCriteria} /></div>
                  <ECCard header="exclusion criteria" body={thirdData.generate.exclusionCriteria} />
                </div>
              }
            </div>
          </Card>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}