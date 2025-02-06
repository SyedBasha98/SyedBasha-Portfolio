import React from 'react';
import '../styles/Description.css';

const AccountantDescription = () => {
  return (
    <section className="description">
      <h2>Accountant</h2>
      <Paragraph text="Hi, I'm Syed Basha, an experienced Junior Accountant with expertise in managing financial transactions, journal entries, and ensuring accurate reconciliation of financial reports." />
      <Paragraph text="With a keen eye for detail and a strong understanding of accounting principles, I have successfully handled tasks like accounts payable/receivable, invoicing, and financial reporting for various businesses." />
      <Paragraph text="I’m highly proficient with accounting software, including Wings Accounting, and have experience in managing daily financial operations, bank transactions, and asset accounting." />
      <Paragraph text="My goal is to bring efficiency and accuracy to financial operations, ensuring compliance and streamlining accounting workflows for business success." />
    </section>
  );
};

const FrontendDeveloperDescription = () => {
  return (
    <section className="description">
      <h2>Frontend Developer</h2>
      <Paragraph text="Hi, I'm Syed Basha, a passionate Frontend Developer with expertise in React.js, React Native, and modern web technologies. I specialize in building dynamic and responsive user interfaces." />
      <Paragraph text="I enjoy creating seamless user experiences by leveraging my knowledge of JavaScript, HTML, CSS, and React, ensuring that applications are both visually appealing and functional." />
      <Paragraph text="From developing single-page applications to integrating APIs, I focus on building scalable web solutions that are optimized for performance and user engagement." />
      <Paragraph text="With a strong foundation in frontend development and a commitment to continuous learning, I am always looking for new challenges to further enhance my skills and stay ahead in the fast-paced tech world." />
    </section>
  );
};

const Paragraph = ({ text }) => (
  <p className="description-paragraph">{text}</p>
);

export { AccountantDescription, FrontendDeveloperDescription };
