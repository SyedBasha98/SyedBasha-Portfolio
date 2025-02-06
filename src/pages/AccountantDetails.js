import React from 'react';
import '../styles/Description.css';

const AccountantDescription = () => {
  return (
    <section className="description">
      <h2>Accountant Experience</h2>
      
      {/* Paragraph 1: Introduction to Accounting Career */}
      <Paragraph text={accountantIntro} />

      {/* Paragraph 2: Detailed Responsibilities and Skills */}
      <Paragraph text={accountantResponsibilities} />

      {/* Paragraph 3: Key Achievements and Impact */}
      <Paragraph text={accountantAchievements} />
    </section>
  );
};

const FrontendDeveloperDescription = () => {
  return (
    <section className="description">
      <h2>Frontend Developer Experience</h2>

      {/* Paragraph 1: Introduction to Frontend Development Career */}
      <Paragraph text={developerIntro} />

      {/* Paragraph 2: Detailed Responsibilities and Skills */}
      <Paragraph text={developerResponsibilities} />

      {/* Paragraph 3: Key Projects and Achievements */}
      <Paragraph text={developerProjects} />
    </section>
  );
};

// Paragraph Component
const Paragraph = ({ text }) => (
  <p className="description-paragraph">{text}</p>
);

// Content for Accountant Experience (3 detailed paragraphs)
const accountantIntro = `My journey as an accountant began with a deep appreciation for numbers and their role in ensuring the financial health of a business. I joined Sri Gopal Auto Stores as a Junior Accountant, where I was given the responsibility of managing day-to-day financial operations. From handling invoices and payments to reconciling accounts, I quickly learned the importance of accuracy and attention to detail in accounting. Over the years, I became proficient in using accounting software like Wings, which helped streamline my work and reduce human error. Understanding the core principles of accounting allowed me to ensure compliance with legal standards while maintaining the financial integrity of the company.`;

const accountantResponsibilities = `In my role, I was tasked with various crucial responsibilities, each of which allowed me to grow as a financial professional. I was involved in preparing journal entries, processing daily transactions, and performing bank reconciliations. Additionally, I took care of managing accounts payable and receivable, ensuring that all invoices were processed in a timely manner. I also played a key role in monthly and year-end financial closings, verifying the accuracy of reports and ensuring that everything was aligned with the regulatory standards. Maintaining accurate financial records became second nature, and I developed a keen eye for identifying discrepancies and resolving issues swiftly.`;

const accountantAchievements = `One of the most significant achievements during my time as an accountant was the successful streamlining of our financial documentation and invoice management processes. I introduced automation tools within the accounting software that significantly improved the efficiency of our workflows. This reduced manual intervention, minimized errors, and allowed me to focus on higher-value tasks like financial analysis. My proactive approach in identifying cost-saving opportunities also helped the company achieve better financial controls, ultimately resulting in improved profitability. Through these efforts, I was able to contribute to the overall financial stability and growth of the business.`;


// Content for Frontend Developer Experience (3 detailed paragraphs)
const developerIntro = `I transitioned into frontend development with a passion for creating intuitive and user-centric applications. My journey began with self-study, where I honed my skills in HTML, CSS, and JavaScript, eventually moving to React.js and React Native for building dynamic web and mobile applications. As I worked on personal and professional projects, I quickly realized the power of responsive design and the importance of delivering seamless experiences across devices. With a solid understanding of both design principles and technical execution, I began building interactive UIs that catered to user needs while also ensuring smooth functionality.`;

const developerResponsibilities = `As a Frontend Developer, my primary focus was on developing scalable and efficient user interfaces. Using React.js, I created complex web applications with interactive features, such as forms, real-time updates, and seamless transitions. I collaborated closely with backend developers to integrate APIs and ensure that the frontend displayed dynamic content efficiently. I also focused heavily on performance optimization, reducing load times and improving the overall user experience. My responsibilities extended to testing and debugging code, ensuring that every feature was fully functional before deployment. Additionally, I ensured that all applications were mobile-friendly, using responsive design principles to create adaptive layouts that worked seamlessly across all devices.`;

const developerProjects = `One of the key projects I worked on was a real-time e-commerce platform that integrated payment gateways and dynamic product listings. This project allowed me to leverage my React.js skills and work on advanced features such as session storage, form validation, and data handling. I also built a mobile version of the application using React Native, which required me to ensure the app’s functionality was optimized for both iOS and Android platforms. In addition to my technical contributions, I collaborated with UX/UI designers to ensure the product was visually engaging and aligned with modern design trends. This project taught me the importance of teamwork, adaptability, and continuous learning, as I was always exposed to new challenges and innovative technologies.`;

export { AccountantDescription, FrontendDeveloperDescription };
