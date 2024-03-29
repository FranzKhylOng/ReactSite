import React , { useEffect } from 'react';
import './udemy.css';
import cover from '../../../../assets/udemycover.png';
import top20 from '../../../../assets/top20df.png';
import topics20 from '../../../../assets/20topics.png';
import utopics from '../../../../assets/utopics.png';
import scatter from './../../../../assets/udemyscatter.png';
import heatmap from '../../../../assets/udemycorr.png';
import tsa from '../../../../assets/tsa.png';
import ulang from '../../../../assets/ulang.png';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { cb } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Link } from 'react-router-dom';

function Udemy() {
  const codeString1 = `  import pandas as pd 
  import matplotlib.pyplot as plt
  import seaborn as sns
  data = pd.read_csv('Course_info.csv')
  
  data.drop_duplicates(inplace=True)
  data.drop(['course_url','headline','instructor_url','last_update_date','id', 'published_time'], axis=1, inplace=True)
  data.drop(data[data['is_paid'] == False].index, inplace=True)`;

  const codeString2=`indiv_best_courses = data.sort_values("num_subscribers", ascending=False)
top20courses = indiv_best_courses.head(20)[["title", "topic","num_subscribers","avg_rating"]]
print(top20courses) `;

  const codeString3=`topicdistribution = top20courses.topic.value_counts()
topicdistribution = topicdistribution.sort_values(ascending=True)
  
sns.set_style("darkgrid")
plt.figure(figsize = (10,8))
topicdistribution.plot(kind='barh',color='purple')
plt.title("Topics Of The 20 Most Popular Courses On Udemy")`;

  const codeString4 = `besttopics = data.groupby("topic")['num_subscribers'].sum().sort_values(ascending=False).head(20)
besttopics = besttopics.sort_values(ascending=True)
  
# Create a horizontal bar plot of topics
plt.figure(figsize = (10,8))
besttopics.plot(kind='barh',color='purple')
  
# Add chart title and axis labels
plt.title("Top 20 Most Subscribed Topics on Udemy")
plt.xlabel("Number of Subscribers")
plt.xscale('log')
plt.ylabel("")
  
# Show the plot
plt.show()`;

const codeString5 = `corr_ratingxsubs = data['num_subscribers'].corr(data['avg_rating'])
print("Correlation: " + str(corr_ratingxsubs))
#plot the data with a scatter plot
plt.figure(figsize = (15,10))
plt.scatter(data['avg_rating'],data['num_subscribers'], s = data['price'],alpha=0.5, c="purple")
plt.ylabel('Number of Subscribers')
plt.xlabel('Average Rating')
plt.title('Number of Subscribers vs Average Rating')
plt.show()`;

const codeString6 = `corr = data.corr()
plt.figure(figsize=(10, 8))
sns.heatmap(corr, annot=True, cmap='coolwarm')
plt.show()`;

useEffect(() => {
  window.scrollTo(0, 0);
}, []);

    return (
      <div className="testdiv">
        <Link to='/' className='backlink'>Back</Link>
      <div className='udemycont'>
          <h2 className='uh2'>Project: Descriptive Analysis On Udemy Courses</h2>
          <img id='cover' src={cover} alt="coverpicture" />
          <h3 className='uh3'>Preface</h3>
          <p className='content'>As a consistent fan of online learning, I remain deeply appreciative of the opportunities it has afforded me to cultivate and enrich my skill set. Having taken numerous online courses myself, I find myself curious regarding the empirical data surrounding the courses available on Udemy. Accordingly, I have created a quick project that is designed to develop my skills and experience in data cleaning, manipulation, and visualization with the use of Python. With this project, I also intend to broaden my understanding of the Udemy platform, exploring its trends, courses, and user preferences in greater depth.
          </p>
          <h3 className='uh3'>Dataset Used</h3>
          <p  className='content'>For the purpose of my analysis, I have obtained a publicly available dataset from Kaggle which offers a comprehensive account of every available Udemy course as of October 10, 2022. The dataset boasts a lot of useful information, including average course ratings, subscriber counts, categorical classifications, and a variety of other interesting factors.
            You can find the dataset <a href="https://www.kaggle.com/datasets/hossaingh/udemy-courses" target='#blank'>here.</a>
          </p>
          <h3 className='uh3'>What Are The Goals Of This Project?</h3>
          <p  className='content'>The goal of this project is to understand the patterns and trends in online course consumption, where we can get insights on what are the preferences of the students purchasing Udemy courses.
          Such insights may, in turn, inform the decision-making processes of individuals who are interested in creating courses on the Udemy platform. Specifically, by analyzing these trends, it may be possible to ascertain which topics or niches are likely to yield the greatest demand and interest among potential students.
          </p>
          <p  className='content'>Specifically, we aim to answer the questions:</p>
          <ul>
            <li><span>What are the most popular courses on Udemy?</span></li>
            <li><span>What are the most popular topics and their ratings?</span></li>
            <li><span>Is there a correlation with average rating and subscriber numbers?</span></li>
            <li><span>Are there any other significant correlations?</span></li>
          </ul>
          <h3 className='uh3'>What Are The Tools Used For This Project?</h3>
          <p className='content'>For this project, we will be using Python, this included well-known Python libraries such as Pandas and Seaborn.</p>
          <h3 className='uh3'>Importing And Cleaning The Data</h3>
          <p>Here, I first imported the libraries that we will be using throughout the project, along with the data. The dataset is stored within a CSV file.
            For the cleaning, I then removed any duplicates from the dataframe. Then I have decided to drop columns that may provide repetitive or unnecessary information such as the course URL, instructor URL, and id. I have also decided to drop any courses that are not paid, as we are only interested in paid courses.
          </p>
          <SyntaxHighlighter language="python" style={cb}>
            {codeString1}
          </SyntaxHighlighter>
        <h3 className='uh3'>What Are The Most Popular Courses On Udemy?</h3>
        <p>In order to initially get the top 20 most subscribed courses on Udemy, I first 
          only chose to keep the columns of course title, topic, number of subscribers, and ratings to make
          the printed result be easier to understand while keeping the information that would be relevant
          to the situation. I then sorted the dataframe by subscriber counts in
          descending order, then I have selected the top 20 rows and printed the results.
        </p>
        <SyntaxHighlighter language="python" style={cb}>
            {codeString2}
        </SyntaxHighlighter>
        <p>Below, you can see the results of the code. With a first glance at the names and topics of the courses, we could 
          already tell that the top 20 courses bought on Udemy <span className="importanttext"> all involve technology</span> in some way. From programming,
          to cloud technologies, to ethical hacking, to digital marketing and spreadsheet software. </p>
        <img className='imgcontudemy' src={top20} alt="top 20 courses" />
        <p>To get more insight, I wanted to see what was the distribution of topics across the top 20 most bought
          courses on Udemy. So, I counted the values of the topics among the top 20 courses, and then plotted it, using the Seaborn library and the Matplotlib library.
          From the graph, we can see that <span className="importanttext">Python is extremely popular</span> as 6 out of the 20 courses being related to Python, which is 30%.
          Besides Java and Web Development, which both have 2 courses, the rest of the other topics only have 1 course each within the top 20.
          It is particularly impressive that topics such as AWS has a top course included in the top 20, considering that the course on the list was published as recently as 2020. While other 
          topic's courses had more time to garner subscribers due to being published earlier, around 2016. But, it is also impressive that a <span className="importanttext">Python</span> course published in 2020 also made it to the top 20, indicating
          that their is still a high demand for that topic, even though there are already existing courses created for it.
        </p>
        <SyntaxHighlighter language="python" style={cb}>
          {codeString3}
        </SyntaxHighlighter>
        <img className='imgcontudemy' src={topics20} alt="top 20 courses by topic" />
        <h3 className='uh3'>What Are The Most Popular Topics On The Platform Overall?</h3>
        <p>While, we have already examined the topics among the most popular courses, I also want to take a look on which topics are the most subscribed on the platform overall in order to see what differs and what stays the same.
          In the code below, I grouped the data by topic and then summed the subscriber counts for each topic. I then sorted the values in descending order and selected the top 20 rows.
        </p>
        <SyntaxHighlighter language="python" style={cb}>
          {codeString4}
        </SyntaxHighlighter>
        <p>With the data below, we could see that <span className="importanttext">Python really is the most popular topic</span> on the platform of Udemy. Additionally, all 20 of the most popular topics involve technology
          in some form, except for one, which is learning the English language. Despite Python being number one, we can see that the topics of JavaScript, CSS, React JS, and Web Development as a whole, all made it 
          onto the list, which shows how big of a demand <span className="importanttext">web development</span> still really has.</p>
        <img className='imgcontudemy' src={utopics} alt="most popular topics" />
        <h3 className='uh3'>Correlations</h3>
        <p>A scatter plot was generated to examine the potential correlation between the number of subscribers a course has and its rating. The analysis revealed a <span className="importanttext">negligible correlation</span> coefficient of 0.07, indicating a very weak association between the two variables.
        </p>
        <SyntaxHighlighter language="python" style={cb}>
          {codeString5} 
        </SyntaxHighlighter>
        <img className='imgcontudemy' src={scatter} alt="number of subscribers vs average rating" />
        <p>A heatmap was then generated to identify potential correlations amongst the rest of the variables in the dataset. The results revealed that the correlations with notable values were predominantly <span className="importanttext">only from expected relationships</span>,
           such as the correlation between the length of a course's content and the number of lectures it comprises, or the number of reviews a course has received and its subscriber count, which can be attributed to a larger pool of individuals available to provide feedback.
        </p>
        <SyntaxHighlighter language="python" style={cb}>
          {codeString6} 
        </SyntaxHighlighter>
        <img className='imgcontudemy' src={heatmap} alt="heatmap" />
        <h3 className='uh3'>Other Findings</h3>
        <p>Plotting the number of courses and subscribers on the platform per year, we could see that the number of subscribers on the platform peaked in the year <span className="importanttext">2020</span>.
          This could possible be due to the fact that the pandemic has caused many people to stay at home, and thus, they have more time to learn new skills and take up new hobbies.
          The number of courses, on the other hand, peaked in the year 2021, this could be due to the fact that there was an increase in demand, as there were now more subscribers on the platform,
          and that the lockdown gave instructors more time to create courses.
        </p>
        <img id='tsa' src={tsa} alt="time series analysis" />
        <p>Ranking the number of total subscribers each languages the courses have, it is unsurprising to see that <span className="importanttext">English</span> is the 
        most popular language on the platform, as it is the most widely spoken language in the world. However, it is interesting to see that <span className="importanttext">Spanish</span> and <span className="importanttext">Portugese</span> is the second and third most popular language on the platform,
        meaning, that there is a large demand for courses in those languages as well. Which is good news for instructors that want to use those languages in their courses but are worried that there will not be enough demand for it. </p>
        <img class='imgcontudemy' src={ulang} alt="languages in udemy" />
        <h3 className='uh3'>Conclusions</h3>
        <p>The following is the summary and findings of my analysis:</p>
        <ul className='conclusions'>
            <li><span><span className="importanttext">Python</span> is the most popular topic on the platform, followed by <span className="importanttext">web development</span> topics.</span></li>
            <li><span>The most popular topics all involve <span className="importanttext">technology</span>, such as programming, data science, digital marketing, and etc. with only a few exceptions, like learning the English language.</span></li>
            <li><span><span className="importanttext">English</span> is unsurprisingly the most popular language courses have, but there is still demand for other languages such as Spanish and Portugese.</span></li>
            <li><span>There are <span className="importanttext">no significant relationships</span> between variables such as course ratings or price and the number of subscribers. However, there is a weak positive correlation (0.21) between the number of lectures and the amount of subscribers a course has. This suggests that courses with more lectures tend to have more subscribers, although the relationship is not very strong and other factors could have a greater influence on subscriber numbers.</span></li>
          </ul>
      </div>
      </div>
    );
  }

export default Udemy