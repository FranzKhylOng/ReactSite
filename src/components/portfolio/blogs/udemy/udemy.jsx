import React from 'react'
import './udemy.css'
import cover from '../../../../assets/udemycover.png'

function Udemy() {
    return (
      <div className="testdiv">
      <div className='udemycont'>
        <h2>Project: Descriptive Analysis On Udemy Courses</h2>
        <img id='cover' src={cover} alt="coverpicture" />
        <h3>Preface</h3>
        <p className='content'>As a consistent fan of online learning, I remain deeply appreciative of the opportunities it has afforded me to cultivate and enrich my skill set. Having taken numerous online courses myself, I find myself curious regarding the empirical data surrounding the courses available on Udemy. Accordingly, I have created a quick project that is designed to develop my skills and experience in data cleaning, manipulation, and visualization with the use of Python. With this project, I also intend to broaden my understanding of the Udemy platform, exploring its trends, courses, and user preferences in greater depth.
        </p>
        <h3>Dataset Used</h3>
        <p  className='content'>For the purpose of my analysis, I have obtained a publicly available dataset from Kaggle which offers a comprehensive account of every available Udemy course as of October 10, 2022. The dataset boasts a lot of useful information, including average course ratings, subscriber counts, categorical classifications, and a variety of other interesting factors.
          You can find the dataset <a href="https://www.kaggle.com/datasets/hossaingh/udemy-courses" target='#blank'>here.</a>
        </p>
        <h3>What Are The Goals Of This Project?</h3>
        <p  className='content'>The goal of this project is is to understand the patterns and trends in online course consumption, where we can get insights on what are the preferences of the students purchasing Udemy courses.
        Such insights may, in turn, inform the decision-making processes of individuals who are interested in creating courses on the Udemy platform. Specifically, by analyzing these trends, it may be possible to ascertain which topics or niches are likely to yield the greatest demand and interest among potential students.
        </p>
        <p  className='content'>Specifically, we aim to answer the questions:</p>
        <ul>
          <li><span>What are the most popular courses on Udemy?</span></li>
          <li><span>What are the most popular topics and their ratings?</span></li>
          <li><span>Is ther a correlation with average rating and subscriber numbers?</span></li>
          <li><span>Are there any other significant correlations?</span></li>
        </ul>
        <h3>What Are The Tools Used For This Project?</h3>
        <p className='content'>For this project, we will be using Python, this included well-known Python libraries such as Pandas and Seaborn.</p>
        <h3>Importing The Data</h3>
      </div>
      </div>
    );
  }

export default Udemy