import SkillLevelContainer from './SkillLevelContainer'

export default function UserSkills() {
  return (
    <div className="mt-4 w-full px-8">
      <SkillLevelContainer
        level="Multiplicador"
        skills={[
          {
            category: '🎨 Designer',
            name: 'Adobe Dreamweaver',
            url: 'https://img.shields.io/badge/Adobe%20Dreamweaver-FF61F6?logo=adobedreamweaver&logoColor=fff&style=for-the-badge',
          },
          {
            category: '⏱️ Workflow Platforms',
            name: 'TeamCity',
            url: 'https://img.shields.io/badge/TeamCity-000000?style=for-the-badge&logo=TeamCity&logoColor=white',
          },
          {
            category: '⏱️ Workflow Platforms',
            name: 'Jira',
            url: 'https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white',
          },
        ]}
      ></SkillLevelContainer>
      <SkillLevelContainer
        level="Experiente"
        skills={[
          {
            category: '🎨 Designer',
            name: 'Adobe Dreamweaver',
            url: 'https://img.shields.io/badge/Adobe%20Dreamweaver-FF61F6?logo=adobedreamweaver&logoColor=fff&style=for-the-badge',
          },
          {
            category: '🎨 Designer',
            name: 'Adobe After Effects',
            url: 'https://img.shields.io/badge/Adobe%20After%20Effects-99F?logo=adobeaftereffects&logoColor=fff&style=for-the-badge',
          },
          {
            category: '🎨 Designer',
            name: 'Adobe Premiere Pro',
            url: 'https://img.shields.io/badge/Adobe%20Premiere%20Pro-99F?logo=adobepremierepro&logoColor=fff&style=for-the-badge',
          },
        ]}
      ></SkillLevelContainer>
      <SkillLevelContainer
        level="Aprendiz"
        skills={[
          {
            category: '🎨 Designer',
            name: 'Adobe Dreamweaver',
            url: 'https://img.shields.io/badge/Adobe%20Dreamweaver-FF61F6?logo=adobedreamweaver&logoColor=fff&style=for-the-badge',
          },
          {
            category: '🎨 Designer',
            name: 'Adobe After Effects',
            url: 'https://img.shields.io/badge/Adobe%20After%20Effects-99F?logo=adobeaftereffects&logoColor=fff&style=for-the-badge',
          },
          {
            category: '🎨 Designer',
            name: 'Adobe Premiere Pro',
            url: 'https://img.shields.io/badge/Adobe%20Premiere%20Pro-99F?logo=adobepremierepro&logoColor=fff&style=for-the-badge',
          },
        ]}
      ></SkillLevelContainer>
      <SkillLevelContainer
        level="Interessado"
        skills={[
          {
            category: '🎨 Designer',
            name: 'Adobe Dreamweaver',
            url: 'https://img.shields.io/badge/Adobe%20Dreamweaver-FF61F6?logo=adobedreamweaver&logoColor=fff&style=for-the-badge',
          },
          {
            category: '🎨 Designer',
            name: 'Adobe After Effects',
            url: 'https://img.shields.io/badge/Adobe%20After%20Effects-99F?logo=adobeaftereffects&logoColor=fff&style=for-the-badge',
          },
          {
            category: '🎨 Designer',
            name: 'Adobe Premiere Pro',
            url: 'https://img.shields.io/badge/Adobe%20Premiere%20Pro-99F?logo=adobepremierepro&logoColor=fff&style=for-the-badge',
          },
        ]}
      ></SkillLevelContainer>
    </div>
  )
}
