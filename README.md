# Project 3 | Data Engineering
# Team Ravenclaw

## Overview
Our presentation will provide users with a comprehensive guide to the ETL process used in the collection, manipulation, and organization of multiple data sets. In addition to data tables and code, users will have access to interactive tools that provide key information from our data collections. Users will also have access to visualizations derived from statistical analysis, including trends and correlations, regarding various demographic variables selected from inmate execution records in the United States from 1977 to 2024.  

## Objectives
•	Provide a high-level description of capital punishment, death row, execution, and supplementary terminology related to our topic   
•	Design a database with the capability to be used for future applications   
•	Illustrate a statistical analysis of capital punishment in the United States through well-organized tables and visualizations   
•	Provide a detailed guide of the ETL process we employed to construct our project (ERD)   
•	Create original visualizations and interactive components that present accurate and visually stimulating results   
•	Provide conclusions and potential solutions to capital punishment ‘pro and con’ viewpoints using evidence supported by data analysis   
•	Address ethical concerns that arose during each phase of project development.   
## Workflow
### Data Exploration & Extraction
We spent a generous amount of time searching for a topic that would provide enough data to create a visually interesting project as well as keep users engaged throughout the presentation. We finally decided to investigate capital punishment, and more specifically, death row inmates. We were able to find several datasets which we thought would be interesting to analyze.    

The first of which is a dataset containing the names and demographic information of inmates who have been executed on death row.    
https://www.kaggle.com/datasets/srivastavaprakhar07/texas-deathrow-full-dataset   

The second dataset we found contains data specifically from executed inmates in Texas and includes demographic information as well as their last words.   
https://deathpenaltyinfo.org/database/executions    

After collecting the datasets, we decided on key points to address in our project:   
•	Which areas (cities/counties, states, regions) hold the greatest number of executions? Lowest number of executions?   
•	What trends in demographic variables (age, gender, race, etc.) were present among inmates who were executed?   
•	What are the statistics of execution by day, week, month, and year?    
•	Could significant events in culture and society correlate with the number of executions within a timeframe?   
•	What commonly shared characteristics of executed inmates could be applied to prevention programs to reduce overall victim and execution numbers?   
•	What were the last words of inmates before their execution?   

### Data Transformation
To kick off our project we used Pandas in Jupyter Notebook to transform our data before importing it into a database. During this stage, CSV files were read, columns were manipulated, and DataFrames were created, merged, and cleaned. We removed data that was not relevant to our project, reduced redundancy in the data, and organized the combined data for easier use in future applications.
At this point in our project, each team member split off to perform their chosen tasks in the transformation process (data visualizations, web scraping, database design, etc).   

*
* Detailed breakdown of the process
*

Data Loading
The data we collected is relational. For this reason, we chose to import/load our data in a relational database, PostgreSQL. PostgreSQL is an easy-to-use database, which enabled our team to seamlessly link the data and other components of our project.

*
* How data is read and displayed for future use
*
  

### Analysis
We analyzed our data using the following techniques:     
Count-based aggregation > GeoJson Visualization / Pandas DataFrame      
Summation aggregation > GeoJson Visualization / All Variable Trends     
Correlation Analysis > Time and Location Variable Trends     
Comparison Analysis > All Variable Comparison     
Time-series Analysis > Yearly Execution Count / GeoJson Visualization     
Draft potential solutions:     
•	  
Discuss your conclusions and insights from studying the problem:  
•	  

## Ethical Considerations
While collecting data and web-scraping for our project, we spent time reviewing data ethics, specifically terms of use/licensing, copyright protections, and methods of data collection used to gather the datasets we were interested in using. After we had outlined our project, we created a ‘data ethics’ checklist for our sources. We made sure that each source came from a reputable entity that cited their sources. By doing so, we knew that our desired datasets were not gathered illegally. Checking for copyright protections and reviewing terms of use were on our checklist as well. Fortunately, most of the data sources we considered pulling datasets from were authorized to be used by the public and were not restricted from use in school projects or personal use.
### Workload Distribution
#### Aaron Sell >

#### Ange Ndjeka > 

#### Denis Dragan >

#### Jason Hinshaw >

#### Tim Barney >

#### Summer Dowdy > Data Collection; README.md; Entity Relationship Diagram (ERD)

## Instructions | Interaction Guide

## Directory
### Proposal 
https://github.com/DDragan24/Project-3-TeamRavenClaw/blob/main/Proposal
### Resources 
https://github.com/DDragan24/Project-3-TeamRavenClaw/tree/main/Resources
### Script
https://github.com/DDragan24/Project-3-TeamRavenClaw/tree/main/Scripts
### Website  

### ERD   
https://dbdiagram.io/d   
### Presentation

      
## References
Death Penalty Information Center. (2024, July 17). Execution Database. DPIC. https://deathpenaltyinfo.org/database/executions

OpenDataSoft. (2017, June 27). US County Boundaries. Public.opendatasoft.com; U.S. Census Bureau. https://hifld-geoplatform.opendata.arcgis.com/datasets/us-county-boundaries

Srivastava, P. (2023). Texas Deathrow Full Dataset. Kaggle.com. https://www.kaggle.com/datasets/srivastavaprakhar07/texas-deathrow-full-dataset

Tenneri, M. (2023). US State and Territory Latitude and Longitude Data (P. Sruthi , Ed.). Kaggle.com. https://www.kaggle.com/datasets/tennerimaheshwar/us-state-and-territory-latitude-and-longitude-data

Texas Open Data Portal Administrator. (n.d.). Texas Counties Centroid Map. Data.texas.gov. Retrieved July 17, 2024, from https://data.texas.gov/widgets/ups3-9e8m?mobile_redirect=true

