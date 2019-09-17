// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(function (response) {
    // handle success
    console.log(response);
    })
    .catch(function (error) {
    // handle error
    console.log(error);
    })
    .finally(function () {
    // always executed
    });

tabContainer = document.querySelector('.topics');

function tabCreator(tabName) {
    const newTab = document.createElement('div');
    newTab.classList.add('tab');
    newTab.textContent = tabName;
    tabContainer.appendChild(newTab);
}

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(function (response) {
    // handle success
    const topicList = response.data.topics;
    topicList.forEach(element => {
        tabCreator(element);
    });
    })
    .catch(function (error) {
    // handle error
    console.log(error);
    })
    .finally(function () {
    // always executed
    });


