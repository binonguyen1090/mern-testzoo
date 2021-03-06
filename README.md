# Testzoo
Live link: https://testzoo.herokuapp.com/#/

Testzoo is a test bank platform where users can create categorized, multiple-choice tests and assess their knowledge by taking other users' tests. Testzoo uses a very user-friendly and simplistic approach in allowing users to create and view their tests and post them on the platform as well.
![splash](https://user-images.githubusercontent.com/58091313/79033626-8d8d1180-7b64-11ea-9a54-19431e34361b.png)

# Technologies Used
Testzoo was built using:
- Node.js
- MongoDB
- Express
- React
- Redux

# Features
## Main Page
On the main page, users can view all tests separated by category and click on any they would like to take. They can also elect to create a form or view all forms they have already created from this page as well.
- A similar design page exists for users to view and click to edit their own tests.

![test-zoo-home](https://user-images.githubusercontent.com/58091313/78843392-8a085780-79b7-11ea-93b2-657b096d92e5.png)

## Test taking page
After choosing a test to take, user can answer the questions here and upon submit receive a grade, as well as be redirected to the test show where they can compare their grade to all previous grades.
![testtake](https://user-images.githubusercontent.com/58091313/79033477-73066880-7b63-11ea-975c-be8cf59455c0.png)

![handlegame](https://user-images.githubusercontent.com/58091313/79409587-2d76e080-7f53-11ea-866a-de3c3ebb46fd.png)
- above code removes question once answered, making it easier for user to tackle each question
- if the question is answered correctly, the game score value increases by 1 and at the end that score divided by total num of questions will be the user's grade

![updatebackend](https://user-images.githubusercontent.com/58091313/79411627-23a3ac00-7f58-11ea-92a6-7901d2df34f9.png)
- when user begins taking a test it brings that exam and user info from the backend and after each question an update request is sent to backend to update that user's score, creating a quick and efficient method to obtaining user's score

## Test editing page
After creating a test, users can edit them here by adding questions of varying difficulty levels and providing options as answers (can have multiple right answers if user wishes).
![testedit](https://user-images.githubusercontent.com/58091313/79033501-8fa2a080-7b63-11ea-82fa-19aec8f27a5f.png)


### Create test/question/answer pages
Very simple page layouts with each requiring valid inputs that update the test created
- valid inputs such as a test title and category within a certain character limit

![createqs](https://user-images.githubusercontent.com/58091313/79412740-12a86a00-7f5b-11ea-8133-385de8269188.png)
- to create a question, user updates each required field, then upon submit the given input is sent to the backend and if no errors persist that question is then attached to the appropriate test 


